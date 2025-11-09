import React, { useState } from "react";

const Contact = ({ action }) => {
  const ACTION_URL =
    action ||
    import.meta.env.VITE_CONTACT_ACTION ||
    "https://formspree.io/f/your-id";

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(ACTION_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.[0]?.message || "Failed to send message.");
        setStatus("error");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300/80">
              Let's Connect
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Get In{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-pink-400">
                Touch
              </span>
            </h2>
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              Have a question or a project in mind? Feel free to reach out. I'm
              always open to discussing new projects and opportunities.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/80">Surabaya, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-transparent via-[#27005D] to-transparent opacity-60" />

            {/* Success message */}
            <div
              id="form-message"
              className={status === "success" ? "" : "hidden"}
            >
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                Thanks! Your message has been sent. I’ll get back to you soon.
              </div>
            </div>

            {/* Error message */}
            {status === "error" && (
              <div className="mt-3 rounded-xl border border-rose-400/20 bg-rose-400/10 p-3 text-rose-200">
                {error}
              </div>
            )}

            {/* Form */}
            {status !== "success" && (
              <form
                id="contact-form"
                action={ACTION_URL}
                method="POST"
                onSubmit={onSubmit}
                className="mt-1 space-y-4"
              >
                {/* honeypot (spam trap) */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                />

                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40
                               focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40
                               focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Message"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40
                               focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-white/20 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl px-5 py-3 font-medium text-white
                             bg-gradient-to-r from-pink-500 to-fuchsia-500
                             hover:from-pink-600 hover:to-fuchsia-600
                             disabled:opacity-60 disabled:cursor-not-allowed 
                             transition-all duration-300 shadow-lg shadow-pink-500/25
                             hover:scale-[1.02]"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
