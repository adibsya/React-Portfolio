import React from "react";
import profileImg from "../assets/profile1.jpg"; // ganti dengan fotomu

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
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

              <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-tight text-white">
                <span className="italic text-white/90">“Sometimes you</span>{" "}
                <span className="italic text-pink-400">win</span>
                <span className="italic text-white/90">
                  , sometimes you
                </span>{" "}
                <span className="italic text-pink-400">learn</span>
                <span className="italic text-white/90">.”</span>
              </h2>
              <p className="mt-2 text-sm text-white/60">— John C. Maxwell</p>

              {/* About me */}
              <p className="mt-6 text-white/80 text-justify">
                Hello, my name is <span className="text-white">Adib</span>. I’m
                a full‑stack web developer focused on building end‑to‑end
                products—from user‑friendly interfaces to secure and reliable
                backends. I enjoy turning ideas into clean, fast digital
                experiences that are easy for teams to build on.
              </p>
              <p className="mt-4 text-white/75 text-justify">
                On the <span className="text-pink-400">frontend</span>, I work
                with React, Tailwind CSS, and JavaScript/TypeScript. On the
                <span className="text-pink-400"> backend</span>, I build APIs
                with Node.js and Express, using MongoDB or PostgreSQL—including
                authentication, authorization, and third‑party integrations.
              </p>
              <p className="mt-4 text-white/70 text-justify">
                I enjoy learning new technologies, writing documentation, and
                setting up simple automation so development stays tidy and
                consistent.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15
                             bg-white/5 px-5 py-3 text-white hover:bg-white/10 hover:border-white/25
                             transition shadow-sm"
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
