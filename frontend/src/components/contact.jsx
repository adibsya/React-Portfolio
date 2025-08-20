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
    <section id="contact" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-medium text-white/70">Let’s Discuss</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-pink-400">
                Contact
              </span>
            </h2>
            <p className="mt-4 text-white/75">
              Have a question or a project in mind? Feel free to reach out.
            </p>
            <p className="mt-3 text-white/60">
              Location: <span className="text-white">Surabaya, Indonesia</span>
            </p>
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
                             bg-white/10 border border-white/10 hover:bg-white/15
                             disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
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
