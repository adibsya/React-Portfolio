import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 pt-28 md:pt-36 pb-20 md:pb-28 px-15"
    >
      {/* smooth full-height gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10
                      bg-gradient-to-b
                      from-zinc-950 from-0%
                      via-[#27005D]/70 via-[45%]
                      to-zinc-950 to-100%"
      />

      {/* Soft glowing orb - top right */}
      <div
        className="pointer-events-none absolute -z-10 -top-20 -right-40 w-[500px] h-[500px]
                      bg-gradient-to-br from-pink-500/20 to-purple-600/10
                      rounded-full blur-[100px]"
      />
      
      {/* Soft glowing orb - bottom left */}
      <div
        className="pointer-events-none absolute -z-10 top-1/2 -left-40 w-[400px] h-[400px]
                      bg-gradient-to-tr from-purple-500/15 to-pink-500/10
                      rounded-full blur-[80px]"
      />

      {/* subtle noise to reduce banding */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02]
                      [background-image:radial-gradient(#fff_1px,transparent_1px)]
                      [background-size:4px_4px]"
      />

      <div className="max-w-7xl mx-auto px-1 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left: title + actions */}
          <div>
            <p className="text-sm md:text-base font-medium text-white/70">
              Hello! I'm <span className="text-white">ADIB</span>
            </p>

            <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl leading-tight font-extrabold tracking-tight text-white">
              <span className="text-pink-400">Fullstack</span> Web Developer
            </h1>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/adibsya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 grid place-items-center rounded-xl bg-white/5 border border-white/10 
                           text-white/80 hover:text-white hover:bg-white/10 hover:border-pink-400/30 
                           hover:scale-110 transition-all duration-300"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="mailto:ahmadadibsyaifulloh@gmail.com"
                aria-label="Email"
                className="w-12 h-12 grid place-items-center rounded-xl bg-white/5 border border-white/10 
                           text-white/80 hover:text-white hover:bg-white/10 hover:border-pink-400/30 
                           hover:scale-110 transition-all duration-300"
              >
                <MailIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/adibsya/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 grid place-items-center rounded-xl bg-white/5 border border-white/10 
                           text-white/80 hover:text-white hover:bg-white/10 hover:border-pink-400/30 
                           hover:scale-110 transition-all duration-300"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: value prop */}
          <div className="lg:pl-8">
            <p className="text-lg md:text-xl leading-relaxed text-white/75">
              I build fast, scalable, and delightful web applications across{" "}
              <span className="text-pink-400 font-semibold">frontend</span> and{" "}
              <span className="text-pink-400 font-semibold">backend</span>
              —from polished interfaces to robust APIs and data layers.
            </p>
          </div>
        </div>

        {/* Tech marquee */}
        <div className="mt-16 relative overflow-hidden edge-fade">
          <div
            className="flex w-max animate-scroll hover:animate-paused
                       gap-0 transform-gpu [will-change:transform]"
          >
            {/* 1st copy */}
            <TechList ariaHidden={false} />

            {/* 2nd copy for seamless loop (IDENTIK) */}
            <TechList ariaHidden={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Single source of truth for items
const tech = [
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  {
    name: "Tailwindcss",
    src: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
  },
  { name: "Express", src: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Nodejs", src: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Javascript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "HTML5", src: "https://cdn.simpleicons.org/html5/DF4C25" },
  { name: "CSS3", src: "https://cdn.simpleicons.org/css/1572B6" },
];

const TechList = ({ ariaHidden }) => (
  <ul
    aria-hidden={ariaHidden}
    className="shrink-0 flex items-center gap-12 md:gap-20 pr-12 md:pr-20"
  >
    {tech.map((t) => (
      <li
        key={t.name}
        className="group flex items-center gap-3 text-white/80 rounded-xl px-3 py-2 transition-colors hover:text-white hover:bg-white/5"
      >
        <img
          alt={t.name}
          src={t.src}
          width={28}
          height={28}
          loading="eager"
          decoding="async"
          draggable="false"
          className="h-7 w-7 object-contain transition-transform duration-300 ease-out opacity-60 group-hover:opacity-100 group-hover:scale-110"
        />
        <span className="hidden sm:inline transition-colors">{t.name}</span>
      </li>
    ))}
  </ul>
);

export default Hero;
