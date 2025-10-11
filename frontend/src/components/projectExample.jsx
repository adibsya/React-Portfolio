import React, { useState, useEffect, useMemo, useCallback } from "react";

// Sample data
const cards = [
  {
    id: 1,
    category: "Cooking",
    title: "Simplest Salad Recipe ever",
    img: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=500",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timeAgo: "6 mins ago",
    comments: 39,
  },
  {
    id: 2,
    category: "Cooking",
    title: "Best FastFood Ideas (Yummy)",
    img: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=500",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timeAgo: "10 days ago",
    comments: 0,
  },
  {
    id: 3,
    category: "Cooking",
    title: "Why to eat salad?",
    img: "https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&w=500",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timeAgo: "16 hours ago",
    comments: 9,
  },
  {
    id: 4,
    category: "Cooking",
    title: "Protein Bowl Ideas",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
    desc: "Quick balanced bowls with grains, veggies, and lean protein.",
    timeAgo: "2 days ago",
    comments: 4,
  },
  {
    id: 5,
    category: "Cooking",
    title: "Juicing For Energy",
    img: "https://images.pexels.com/photos/6546021/pexels-photo-6546021.jpeg?auto=compress&cs=tinysrgb&w=500",
    desc: "Fresh combinations to boost micronutrients daily.",
    timeAgo: "5 days ago",
    comments: 12,
  },
];

const ProjectExample = () => {
  const [visibleCards, setVisibleCards] = useState(3); // desktop default
  const [index, setIndex] = useState(0); // left-most card index

  // Responsive breakpoints (Tailwind v4 friendly manual JS)
  useEffect(() => {
    const handle = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCards(1);
      else if (w < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  // Total scroll steps (group logic)
  const steps = useMemo(() => {
    if (!cards.length) return 0;
    return Math.max(1, cards.length - visibleCards + 1);
  }, [visibleCards]);

  // Clamp index on resize
  useEffect(() => {
    setIndex((i) => (i > steps - 1 ? 0 : i));
  }, [steps]);

  const goTo = useCallback(
    (i) => {
      if (!steps) return;
      setIndex(((i % steps) + steps) % steps);
    },
    [steps]
  );

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <section className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 py-10">
      {/* Header */}
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <svg
            className="h-6 mr-3"
            viewBox="0 0 455.005 455.005"
            fill="currentColor"
          >
            <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343  c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428  c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423  c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615  c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595  l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72  C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196  c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956  c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004  C455.004,277.119,451.78,270.719,446.158,267.615z" />
            <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126  c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126  C350.916,232.303,352.298,232.676,353.664,232.676z" />
            <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82  c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905  C320.941,252.21,322.318,252.58,323.68,252.58z" />
            <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062  c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z" />
            <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219  c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37  c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464  c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351  c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z" />
            <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409  c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132  C266.219,292.387,268.669,291.131,270.089,288.846z" />
            <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132  c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455  C60.338,188.266,55.714,189.346,53.527,192.864z" />
          </svg>
          <span className="font-semibold">Cooking Blog</span>
        </div>
        <button
          onClick={() => goTo(0)}
          className="text-indigo-600 hover:underline"
        >
          See All
        </button>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-10 transition-transform duration-700 ease-[cubic-bezier(.22,.8,.36,1)]"
            style={{
              width: `${(cards.length * 100) / visibleCards}%`,
              transform: `translateX(-${(index * 100) / visibleCards}%)`,
            }}
          >
            {cards.map((c) => (
              <div
                key={c.id}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <article className="rounded overflow-hidden shadow-lg flex flex-col h-full bg-white">
                  <div className="relative">
                    <img
                      className="w-full h-52 object-cover"
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gray-900/25 hover:bg-transparent transition"></div>
                    <span className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 rounded hover:bg-white hover:text-indigo-600 transition">
                      {c.category}
                    </span>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <h3 className="font-medium text-lg hover:text-indigo-600 transition mb-2 line-clamp-2">
                      {c.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {c.desc}
                    </p>
                  </div>
                  <div className="px-6 py-3 flex items-center justify-between bg-gray-100 text-gray-900 text-xs">
                    <span className="flex items-center gap-1">
                      <svg
                        height="13"
                        width="13"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      >
                        <path d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M277.3,256 c0,11.8-9.5,21.3-21.3,21.3h-85.3c-11.8,0-21.3-9.5-21.3-21.3s9.5-21.3,21.3-21.3h64v-128c0-11.8,9.5-21.3,21.3-21.3 s21.3,9.5,21.3,21.3V256z" />
                      </svg>
                      {c.timeAgo}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      {c.comments} Comments
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Nav buttons (desktop) */}
        {steps > 1 && (
          <div className="hidden md:flex gap-3 absolute -top-12 right-0">
            <button
              onClick={() => prev()}
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition"
              aria-label="Previous"
            >
              Prev
            </button>
            <button
              onClick={() => next()}
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition"
              aria-label="Next"
            >
              Next
            </button>
          </div>
        )}

        {/* Pagination (bars like template) */}
        {steps > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: steps }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to set ${i + 1}`}
                aria-current={index === i}
                className={`h-1 rounded-2xl transition-all ${
                  index === i
                    ? "w-8 bg-indigo-600"
                    : "w-4 bg-indigo-400/40 hover:bg-indigo-400/70"
                }`}
              />
            ))}
          </div>
        )}

        {/* Mobile buttons */}
        {steps > 1 && (
          <div className="flex md:hidden justify-center gap-3 mt-6">
            <button
              onClick={() => prev()}
              className="px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs hover:bg-indigo-500 transition"
            >
              Prev
            </button>
            <button
              onClick={() => next()}
              className="px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs hover:bg-indigo-500 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectExample;
