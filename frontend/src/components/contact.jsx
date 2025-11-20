import React from "react";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.4l8 4.9 8-4.9v-.4a.5.5 0 0 0-.5-.5h-15Zm15.5 3.54-7.44 4.56a1 1 0 0 1-1.12 0L4 9.54V17.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V9.54Z" />
        </svg>
      ),
      title: "Email",
      description: "Send me an email",
      value: "ahmadadibsyaifulloh@gmail.com",
      href: "mailto:ahmadadibsyaifulloh@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      title: "WhatsApp",
      description: "Let's chat on WhatsApp",
      value: "+62 813-3193-1033",
      href: "https://wa.me/6281331931033?text=Hi%20Adib,%20I'm%20interested%20in%20your%20work!",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 .04 5 2.5 2.5 0 0 0-.04-5ZM3 8.98h4v12H3v-12Zm7 0h3.82v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1v6.21h-4v-5.51c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.61h-4v-12Z" />
        </svg>
      ),
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/adibsya",
      href: "https://www.linkedin.com/in/adibsya/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 0 0-2.124 1.388 5.878 5.878 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076.008 8.354-.005 8.764.001 12.023c.007 3.259.021 3.667.083 4.947.061 1.277.264 2.149.563 2.911.308.789.72 1.457 1.388 2.123a5.872 5.872 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552 1.278.056 1.689.069 4.947.063 3.257-.007 3.668-.021 4.947-.082 1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 0 0 2.123-1.388 5.881 5.881 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912.056-1.28.07-1.69.063-4.948-.006-3.258-.02-3.667-.081-4.947-.06-1.28-.264-2.148-.564-2.911a5.892 5.892 0 0 0-1.387-2.123 5.857 5.857 0 0 0-2.128-1.38C19.074.322 18.202.12 16.924.066 15.647.009 15.236-.006 11.977 0 8.718.008 8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.736 3.736 0 0 1-1.382-.895 3.695 3.695 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.705 3.705 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.804.244 2.227.408.56.216.96.475 1.382.895.421.42.681.817.9 1.378.165.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848.005 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.23-.216.56-.477.96-.896 1.38a3.705 3.705 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079-3.204.007-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16 4 4 0 0 1 8 12.008" />
        </svg>
      ),
      title: "Instagram",
      description: "Follow me on Instagram",
      value: "@adibsyaa_",
      href: "https://www.instagram.com/adibsyaa_/",
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-400/80">
            Let's Connect
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl 
                         ring-1 ring-white/10 hover:ring-white/20 p-6
                         transition-all duration-300 hover:-translate-y-1
                         hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              {/* Gradient top border */}
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${method.color} opacity-60`}
              />

              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} text-white mb-4`}
              >
                {method.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                {method.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                {method.description}
              </p>
              <p className="mt-3 text-white/80 font-medium">{method.value}</p>

              {/* Arrow icon */}
              <div
                className="mt-4 flex items-center text-pink-400 opacity-0 -translate-x-2 
                              group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <span className="text-sm font-medium mr-2">Connect</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
