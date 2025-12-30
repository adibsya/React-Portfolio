import { MailIcon, LinkedinIcon, InstagramIcon, ArrowRightIcon } from "./icons";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email",
      description: "Send me an email",
      value: "ahmadadibsyaifulloh@gmail.com",
      href: "mailto:ahmadadibsyaifulloh@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    
    {
      icon: <LinkedinIcon className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/adibsya",
      href: "https://www.linkedin.com/in/adibsya/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <InstagramIcon className="w-6 h-6" />,
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
        <div className="flex flex-wrap justify-center gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl 
                         ring-1 ring-white/10 hover:ring-white/20 p-6
                         transition-all duration-300 hover:-translate-y-1
                         hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
                         w-full sm:w-[calc(50%-12px)] lg:w-[280px]"
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
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
