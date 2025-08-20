import React, { useRef, useState, useEffect } from "react";

const Arrow = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
    <path fill="currentColor" d="M9 6l6 6-6 6" />
  </svg>
);

const ProjectCard = ({ title, subtitle, children }) => (
  <article
    data-card
    className="snap-start shrink-0
               basis-full sm:basis-[calc(50%-8px)] md:basis-[calc((100%-16px)/3)]
               rounded-2xl bg-white/5 text-white ring-1 ring-white/10 overflow-hidden"
  >
    <div className="p-4">
      <div className="rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden h-36 sm:h-44 grid place-items-center">
        {children}
      </div>

      <div className="mt-4 flex items-start gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-1 text-white/60">{subtitle}</p>
        </div>
        <div className="ml-auto mt-0.5 text-white/40">
          <Arrow />
        </div>
      </div>
    </div>
  </article>
);

// Dark-theme pills
const pillStyles = {
  emerald: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  amber: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
  rose: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
};
const Pill = ({ color = "emerald", children }) => (
  <span
    className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-[11px] font-medium ring-1 ${
      pillStyles[color] ?? "bg-white/10 text-white/80 ring-white/10"
    }`}
  >
    {children}
  </span>
);

const ProjectExample = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  // Helpers
  const getItems = () =>
    Array.from(trackRef.current?.querySelectorAll("[data-card]") || []);

  const getNearestIndex = () => {
    const track = trackRef.current;
    const items = getItems();
    if (!track || items.length === 0) return 0;

    const left = track.scrollLeft;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    items.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft - left);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  };

  const scrollToIndex = (i) => {
    const items = getItems();
    if (!trackRef.current || !items[i]) return;

    // Smoother animation with proper calculation
    const track = trackRef.current;
    const targetItem = items[i];
    const targetLeft = targetItem.offsetLeft - track.offsetLeft;

    track.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    setActiveIndex(i);
  };

  const handleNext = () => {
    const track = trackRef.current;
    const items = getItems();
    const total = items.length;
    if (!track || !total) return;

    const curr = getNearestIndex();
    const isAtEnd =
      track.scrollLeft >= track.scrollWidth - track.clientWidth - 8; // 8px tolerance

    const next = isAtEnd || curr >= total - 1 ? 0 : curr + 1;
    scrollToIndex(next);
  };

  const handlePrev = () => {
    const items = getItems();
    const total = items.length;
    if (!total) return;
    const curr = getNearestIndex();
    const prev = (curr - 1 + total) % total; // wrap to last
    scrollToIndex(prev);
  };

  // Update active index on scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const index = getNearestIndex();
      setActiveIndex(index);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    // Initial detection
    setTimeout(handleScroll, 100);

    return () => {
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Available cards
  const cardCount = 5; // Total number of cards

  return (
    <section className="py-12" id="projects">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-center md:text-left text-white/60 tracking-[0.25em] text-xs font-semibold">
            SOME OF MY LATEST WORK
          </h2>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="size-9 rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15 grid place-items-center"
              aria-label="Previous"
            >
              <Arrow className="-scale-x-100" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="size-9 rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15 grid place-items-center"
              aria-label="Next"
            >
              <Arrow />
            </button>
          </div>
        </div>

        <div className="mt-5 relative">
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5
                      scroll-smooth transition-all duration-300"
          >
            {/* Card 1 — Status pills + controls */}
            <ProjectCard
              title="My Figma design system"
              subtitle="Design system"
            >
              <div className="w-full px-2.5">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Pill color="emerald">Approved</Pill>
                  <Pill color="amber">Pending</Pill>
                  <Pill color="rose">Rejected</Pill>
                </div>

                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-sm text-white/80">
                  <div className="flex items-center justify-between">
                    <strong className="font-medium text-white">
                      Website submitted
                    </strong>
                    <span className="text-white/40">×</span>
                  </div>
                  <p className="text-white/60">
                    You’ll be notified if it’s accepted
                  </p>

                  <div className="mt-3 flex items-center gap-4">
                    <label className="inline-flex items-center gap-2 text-white/80">
                      <span className="size-4 rounded-full ring-1 ring-white/20 inline-block" />
                      Radio
                    </label>
                    <label className="inline-flex items-center gap-2 text-white/80">
                      <span className="size-5 rounded-md bg-indigo-600/90 inline-grid place-items-center text-white text-[10px]">
                        ✓
                      </span>
                      Checkbox
                    </label>
                    <span className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/10 text-xs text-white/80">
                      Tag
                    </span>
                  </div>
                </div>
              </div>
            </ProjectCard>

            {/* Card 2 — Book cover */}
            <ProjectCard title="My UI design book" subtitle="Book">
              <div className="relative w-full h-full">
                <div className="absolute inset-3 rounded-lg bg-white/5 ring-1 ring-white/10" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-indigo-600 text-white font-semibold px-5 py-6 shadow-2xl">
                  Practical UI
                </div>
              </div>
            </ProjectCard>

            {/* Card 3 — Odds layout */}
            <ProjectCard
              title="Creating a lean design system"
              subtitle="Design system"
            >
              <div className="w-full px-3">
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 space-y-3">
                  <div className="text-white/70">
                    <strong className="text-white">
                      Canberra vs South Sydney
                    </strong>
                    <div className="text-xs text-white/60">
                      11 May, 8:00PM, 120 markets
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg ring-1 ring-white/10 p-3 bg-white/5">
                      <div className="text-sm text-white/80">Canberra</div>
                      <div className="text-indigo-300 font-semibold">1.52</div>
                    </div>
                    <div className="rounded-lg ring-1 ring-white/10 p-3 bg-white/5">
                      <div className="text-sm text-white/80">South</div>
                      <div className="text-indigo-300 font-semibold">2.32</div>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 ring-1 ring-white/10" />
                </div>
              </div>
            </ProjectCard>

            {/* Extra cards */}
            <ProjectCard title="Marketing dashboard" subtitle="Web app">
              <div className="size-20 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600" />
            </ProjectCard>
            <ProjectCard title="Portfolio redesign" subtitle="Website">
              <div className="size-20 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500" />
            </ProjectCard>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: cardCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`size-2.5 rounded-full transition-all
                          ${
                            activeIndex === i
                              ? "bg-pink-400 scale-110"
                              : "bg-white/20 hover:bg-white/30"
                          }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i}
              />
            ))}
          </div>

          {/* Mobile buttons */}
          <div className="mt-4 md:hidden flex justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
              aria-label="Previous"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
              aria-label="Next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectExample;
