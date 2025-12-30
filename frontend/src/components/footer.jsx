import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

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
                <MailIcon className="w-5 h-5" />
                <a
                  href="mailto:ahmadadibsyaifulloh@gmail.com"
                  className="hover:text-pink-300 transition-colors"
                >
                  ahmadadibsyaifulloh@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <GithubIcon className="w-5 h-5" />
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
                <LinkedinIcon className="w-5 h-5" />
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
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:ahmadadibsyaifulloh@gmail.com"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adibsya/"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
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
