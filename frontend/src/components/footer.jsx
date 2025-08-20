import React from "react";

const Icon = ({ id }) => {
  switch (id) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.166 22 16.42 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">Ahmad Adib</h3>
            <p className="mt-3 text-white/60 max-w-xs">
              Full-stack developer focused on building clean, user-friendly
              solutions that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-pink-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-white/60">
                <Icon id="mail" />
                <a
                  href="mailto:ahmadadibsyaifulloh@gmail.com"
                  className="hover:text-pink-300 transition-colors"
                >
                  ahmadadibsyaifulloh@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Icon id="github" />
                <a
                  href="https://github.com/adibsya"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  github.com/adibsya
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Icon id="linkedin" />
                <a
                  href="https://www.linkedin.com/in/adibsya/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  linkedin.com/in/adibsya
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Location
            </h4>
            <p className="mt-4 text-white/60">Indonesia, East Java</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Ahmad Adib. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/adibsya"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Icon id="github" />
            </a>
            <a
              href="mailto:ahmadadibsyaifulloh@gmail.com"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Icon id="mail" />
            </a>
            <a
              href="https://www.linkedin.com/in/adibsya/"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Icon id="linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Optional: Purple gradient accent at the top */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#27005D] to-transparent" />
    </footer>
  );
};

export default Footer;
