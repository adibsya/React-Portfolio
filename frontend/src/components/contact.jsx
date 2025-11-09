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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                          bg-white/5 border border-white/10 text-white/70"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Usually responds within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
