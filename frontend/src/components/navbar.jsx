import React, { useEffect, useRef, useState } from "react";

const Icon = ({ id, className }) => {
  switch (id) {
    case "home":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
        </svg>
      );
    case "projects":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
          <path d="M3 7l3-3h12l3 3" />
        </svg>
      );
    case "contact":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 3 2 12l7 2 2 7 11-18Z" />
          <path d="M22 3 9 14" />
        </svg>
      );
    default:
      return null;
  }
};

const Navbar = ({ active: activeProp = "home" }) => {
  const [active, setActive] = useState(activeProp);

  const containerRef = useRef(null);
  const linkRefs = useRef({}); // { id: HTMLAnchorElement }
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const measure = (id) => {
    const el = linkRefs.current[id];
    const wrap = containerRef.current;
    if (!el || !wrap) return;
    const elRect = el.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    setIndicator({
      left: elRect.left - wrapRect.left,
      width: elRect.width,
      ready: true,
    });
  };

  useEffect(() => {
    // sync dari prop + hash saat reload
    setActive(activeProp);
    const hash = window.location.hash.replace("#", "");
    if (hash) setActive(hash);

    // ukur posisi awal setelah render
    requestAnimationFrame(() => measure(hash || activeProp));

    const onResize = () => measure(hash || activeProp);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeProp]);

  useEffect(() => {
    // pindahkan indicator saat active berubah
    requestAnimationFrame(() => measure(active));
  }, [active]);

  const handleClick = (e, l) => {
    e.preventDefault();
    setActive(l.id);

    document
      .querySelector(l.href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    // hapus hash dari URL, tetap di path sekarang (/home)
    const base = window.location.pathname + window.location.search;
    history.replaceState(null, "", base);
  };

  return (
    <nav
      id="main-nav"
      ref={containerRef}
      className="fixed left-1/2 -translate-x-1/2 z-[100] bg-[var(--background)]
                 border border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out
                 md:top-6 md:bottom-auto bottom-0
                 w-full md:w-[70%] lg:w-[40%]
                 rounded-none md:rounded-3xl px-4 sm:px-6 md:px-10 py-2.5 md:py-3
                 flex items-center md:justify-center justify-between gap-0 md:gap-20"
      style={{ WebkitBackdropFilter: "blur(16px)" }}
    >
      {/* underline bergerak — hanya tampil di desktop */}
      <span
        className={`pointer-events-none absolute bottom-1 h-1 bg-pink-500 rounded-full hidden md:block
                    transition-all duration-350 ease-out ${
                      indicator.ready ? "opacity-100" : "opacity-0"
                    }`}
        style={{ left: indicator.left, width: indicator.width }}
      />

      {links.map((l) => {
        const isActive = l.id === active;
        return (
          <a
            key={l.id}
            ref={(el) => (linkRefs.current[l.id] = el)}
            href={l.href}
            onClick={(e) => handleClick(e, l)}
            aria-current={isActive ? "page" : undefined}
            className={`group relative flex flex-col md:flex-none md:flex-row items-center justify-center
                        flex-1 basis-0 md:basis-auto gap-1 md:gap-0
                        text-[13px] sm:text-sm md:text-base
                        ${
                          isActive
                            ? "text-white"
                            : "text-white hover:text-white/70"
                        }`}
          >
            {/* Icon only on mobile */}
            <Icon id={l.id} className="md:hidden h-5 w-5" />
            <span 
              className="md:pb-1"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
            >
              {l.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
