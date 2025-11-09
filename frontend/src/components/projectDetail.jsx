import React, { useState, useEffect } from "react";
import { getProjectBySlug } from "../data";

const ProjectDetail = ({ projectId, onClose }) => {
  const project = getProjectBySlug(projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");

  const handleNextImage = () => {
    if (project.images && !isTransitioning) {
      setIsTransitioning(true);
      setDirection("next");
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const handlePrevImage = () => {
    if (project.images && !isTransitioning) {
      setIsTransitioning(true);
      setDirection("prev");
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const handleDotClick = (index) => {
    if (!isTransitioning && index !== currentImageIndex) {
      setIsTransitioning(true);
      setDirection(index > currentImageIndex ? "next" : "prev");
      setCurrentImageIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project.images, isTransitioning]);

  // Preload images for smoother transitions
  useEffect(() => {
    if (project.images) {
      project.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [project.images]);

  if (!project) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 
                       text-white font-medium hover:scale-105 transition-all duration-300
                       shadow-lg shadow-pink-500/25"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/95 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-10 w-12 h-12 rounded-xl 
                   bg-pink-500/10 border border-pink-500/30 
                   text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/50
                   hover:text-pink-200 hover:scale-110 transition-all duration-300
                   flex items-center justify-center group shadow-lg shadow-pink-500/10"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        {/* Image Slider */}
        <div className="relative overflow-hidden rounded-2xl aspect-video mb-8 group">
          {/* Main Image with slide animation */}
          <div className="relative w-full h-full">
            {project.images ? (
              project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  className={`w-full h-full object-cover absolute inset-0
                             transition-all duration-600 ease-out
                             ${
                               index === currentImageIndex
                                 ? "opacity-100 translate-x-0 scale-100 z-10"
                                 : index < currentImageIndex
                                 ? "opacity-0 -translate-x-full scale-95 z-0"
                                 : "opacity-0 translate-x-full scale-95 z-0"
                             }
                             ${
                               isTransitioning && index === currentImageIndex
                                 ? direction === "next"
                                   ? "translate-x-0"
                                   : "translate-x-0"
                                 : ""
                             }`}
                  style={{
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              ))
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover absolute inset-0"
              />
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

          {/* Navigation Buttons - Only show if multiple images */}
          {project.images && project.images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                           bg-black/50 backdrop-blur-sm border border-white/20
                           text-white hover:bg-black/70 hover:border-pink-500/50 hover:scale-110
                           disabled:opacity-50 disabled:cursor-not-allowed
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           flex items-center justify-center z-10 active:scale-95"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                           bg-black/50 backdrop-blur-sm border border-white/20
                           text-white hover:bg-black/70 hover:border-pink-500/50 hover:scale-110
                           disabled:opacity-50 disabled:cursor-not-allowed
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           flex items-center justify-center z-10 active:scale-95"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                              bg-black/60 backdrop-blur-md border border-white/20
                              text-white text-sm font-medium z-10
                              transition-all duration-300"
              >
                {currentImageIndex + 1} / {project.images.length}
              </div>

              {/* Dot Indicators */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10
                              bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full"
              >
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    disabled={isTransitioning}
                    className={`rounded-full transition-all duration-500 ease-out
                                disabled:cursor-not-allowed
                                ${
                                  index === currentImageIndex
                                    ? "w-8 h-2 bg-pink-500 shadow-lg shadow-pink-500/50"
                                    : "w-2 h-2 bg-white/50 hover:bg-white/80 hover:scale-125"
                                }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Title & Meta */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full 
                           bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {project.title}
          </h1>

          <p className="text-white/60 text-sm">{project.date}</p>
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <svg
                  className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white/75">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80
                           hover:bg-white/10 hover:border-pink-500/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-gradient-to-r from-pink-500 to-fuchsia-500
                       text-white font-medium hover:from-pink-600 hover:to-fuchsia-600
                       hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/25"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Live Demo
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-white/5 border border-white/10 text-white font-medium
                       hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.4-3.9-1.4-.53-1.33-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.76-1.55-2.57-.3-5.27-1.29-5.27-5.77 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.64.24 2.86.12 3.16.75.82 1.2 1.87 1.2 3.15 0 4.5-2.71 5.47-5.29 5.76.43.37.81 1.09.81 2.2v3.27c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            View on GitHub
          </a>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-pink-500/10 border border-pink-500/30 text-pink-300 font-medium
                       hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-200
                       hover:scale-105 transition-all duration-300 
                       shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
