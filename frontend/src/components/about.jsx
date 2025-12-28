import React from "react";
import profileImg from "../assets/profile1.jpg"; // ganti dengan fotomu

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Glass card with subtle gradient glow */}
        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-xl">
          {/* top glow accent */}
          <div className="pointer-events-none absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-transparent via-[#27005D] to-transparent opacity-60" />
          {/* soft background swirl */}
          <div className="pointer-events-none absolute -inset-20 -z-10 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(39,0,93,0.35),transparent_60%),radial-gradient(40%_40%_at_90%_30%,rgba(168,85,247,0.25),transparent_60%)]" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — text */}
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300/80">
                Get to know me
              </p>

              <h2 className="mt-5 text-3xl sm:text-4xl font-bold leading-tight text-white">
                <span className="italic text-white/90">"Sometimes you</span>{" "}
                <span className="italic bg-clip-text  text-pink-400">win</span>
                <span className="italic text-white/90">
                  , sometimes you
                </span>{" "}
                <span className="italic bg-clip-text  text-pink-400">
                  learn
                </span>
                <span className="italic text-white/90">."</span>
              </h2>
              <p className="mt-3 text-sm text-white/60">— John C. Maxwell</p>

              {/* About me */}
              <p className="mt-6 text-white/80 text-justify">
                Hey! I'm <span className="text-white">Adib</span>, a fullstack 
                web developer who loves building websites from scratch. From 
                crafting sleek user interfaces to setting up solid backend systems.
              </p>
              <p className="mt-4 text-white/75 text-justify">
                On the <span className="text-pink-400">frontend</span>, I work 
                with React and Tailwind CSS. On the 
                <span className="text-pink-400"> backend</span>, I build APIs 
                using Node.js, Express, and databases like MongoDB or PostgreSQL.
              </p>
              <p className="mt-4 text-white/70 text-justify">
                Always excited to learn new tech and love creating solutions 
                that are simple yet powerful.
              </p>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl 
                             bg-gradient-to-r from-pink-500 to-fuchsia-500
                             px-6 py-3 font-medium text-white 
                             hover:from-pink-600 hover:to-fuchsia-600
                             hover:scale-105 transition-all duration-300 
                             shadow-lg shadow-pink-500/25"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#27005D]/10 to-transparent" />
              <img
                src={profileImg}
                alt="Adib working at a desk"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* image border */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-br-3xl rounded-tr-none rounded-tl-none rounded-bl-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
