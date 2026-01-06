import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectBySlug } from "../data";
import NotificationModal from "./NotificationModal";
import {
  GithubIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  ArrowLeftIcon,
} from "./icons";

const ProjectDetail = ({ projectId, onClose }) => {
  const project = getProjectBySlug(projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [notification, setNotification] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
  });
  const [clickedButtonRef, setClickedButtonRef] = useState(null);

  const showNotification = (title, message, type = "info", buttonRef) => {
    setClickedButtonRef(buttonRef);
    setNotification({ isOpen: true, title, message, type });
  };

  const closeNotification = () => {
    setNotification({ ...notification, isOpen: false });
  };

  const handleNextImage = () => {
    if (project.images) {
      setDirection(1);
      setImageLoading(true);
      setImageError(false);
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (project.images) {
      setDirection(-1);
      setImageLoading(true);
      setImageError(false);
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const handleDotClick = (index) => {
    if (index !== currentImageIndex) {
      setDirection(index > currentImageIndex ? 1 : -1);
      setImageLoading(true);
      setImageError(false);
      setCurrentImageIndex(index);
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
  }, [project.images]);

  // Close modal when navbar is clicked (hash change or scroll)
  useEffect(() => {
    const handleHashChange = () => {
      onClose();
    };

    // Listen for scroll events on the main page (triggered by navbar)
    const handleNavClick = (e) => {
      const navElement = document.getElementById("main-nav");
      if (navElement && navElement.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleNavClick, true);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleNavClick, true);
    };
  }, [onClose]);

  // Smart preloading - only preload next and previous images
  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % project.images.length;
      const prevIndex = currentImageIndex === 0
        ? project.images.length - 1
        : currentImageIndex - 1;

      // Preload only adjacent images
      [nextIndex, prevIndex].forEach(index => {
        const img = new Image();
        img.src = project.images[index];
      });
    }
  }, [currentImageIndex, project.images]);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center text-white"
        >
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 
                       text-white font-medium hover:scale-105 transition-all duration-300
                       shadow-lg shadow-pink-500/25"
          >
            Back to Projects
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/95 backdrop-blur-sm"
    >
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="fixed top-6 right-6 z-10 w-12 h-12 rounded-xl 
                   bg-pink-500/10 border border-pink-500/30 
                   text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/50
                   hover:text-pink-200 hover:scale-110 transition-all duration-300
                   flex items-center justify-center group shadow-lg shadow-pink-500/10"
        aria-label="Close"
      >
        <CloseIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
      </motion.button>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28"
      >
        {/* Laptop Frame Mockup */}
        <motion.div
          variants={itemVariants}
          className="mb-10 group"
        >
          {/* Laptop Container */}
          <div className="relative max-w-4xl mx-auto perspective-1000">
            {/* Laptop Screen */}
            <div className="relative transform-style-3d" style={{ transform: 'rotateX(2deg)' }}>
              {/* Screen Bezel */}
              <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-t-2xl p-3 shadow-2xl border-t border-x border-zinc-700">
                {/* Webcam */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-950 border border-zinc-600 z-10">
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-900/30 to-transparent"></div>
                </div>

                {/* Screen Display Area */}
                <div className="relative overflow-hidden rounded-lg bg-zinc-950 aspect-video shadow-inner">
                  {/* Main Image with slide animation */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Blur Placeholder - shown while loading */}
                    {imageLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm z-10">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-xs text-white/60">Loading...</span>
                        </div>
                      </div>
                    )}

                    {/* Error State */}
                    {imageError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 z-10">
                        <div className="text-center px-4">
                          <div className="text-4xl mb-2">⚠️</div>
                          <p className="text-white/70 text-sm">Failed to load image</p>
                        </div>
                      </div>
                    )}

                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      {project.images ? (
                        <motion.img
                          key={currentImageIndex}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.3 },
                          }}
                          src={project.images[currentImageIndex]}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          className={`max-w-full max-h-full object-contain transition-all duration-300 ${imageLoading ? 'blur-sm scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'
                            }`}
                          onLoad={() => {
                            setImageLoading(false);
                            setImageError(false);
                          }}
                          onError={() => {
                            setImageLoading(false);
                            setImageError(true);
                          }}
                        />
                      ) : (
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src={project.image}
                          alt={project.title}
                          className={`max-w-full max-h-full object-contain transition-all duration-300 ${imageLoading ? 'blur-sm scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'
                            }`}
                          onLoad={() => {
                            setImageLoading(false);
                            setImageError(false);
                          }}
                          onError={() => {
                            setImageLoading(false);
                            setImageError(true);
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Screen Glare Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                  {/* Navigation Buttons - Only show if multiple images */}
                  {project.images && project.images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                                   bg-zinc-900/90 backdrop-blur-md border border-white/20
                                   text-white hover:bg-zinc-800 hover:border-pink-500/60 hover:scale-110
                                   opacity-0 group-hover:opacity-100 transition-all duration-300
                                   flex items-center justify-center z-10 active:scale-95
                                   shadow-xl shadow-black/50"
                        aria-label="Previous image"
                      >
                        <ChevronLeftIcon className="w-5 h-5" />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                                   bg-zinc-900/90 backdrop-blur-md border border-white/20
                                   text-white hover:bg-zinc-800 hover:border-pink-500/60 hover:scale-110
                                   opacity-0 group-hover:opacity-100 transition-all duration-300
                                   flex items-center justify-center z-10 active:scale-95
                                   shadow-xl shadow-black/50"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon className="w-5 h-5" />
                      </button>

                      {/* Image Counter */}
                      <div
                        className="absolute top-3 right-3 px-2.5 py-1 rounded-full
                                      bg-zinc-900/80 backdrop-blur-md border border-white/20
                                      text-white text-xs font-medium z-10
                                      shadow-lg shadow-black/30"
                      >
                        {currentImageIndex + 1} / {project.images.length}
                      </div>

                      {/* Dot Indicators */}
                      <div
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10
                                      bg-zinc-900/60 backdrop-blur-md px-3 py-2 rounded-full
                                      border border-white/10 shadow-xl shadow-black/40"
                      >
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`rounded-full transition-all duration-300 ease-out
                                        ${index === currentImageIndex
                                ? "w-6 h-1.5 bg-pink-500 shadow-lg shadow-pink-500/50"
                                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70 hover:scale-125"
                              }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Laptop Base/Keyboard */}
              <div className="relative">
                {/* Hinge */}
                <div className="h-1 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 shadow-inner"></div>

                {/* Keyboard Base */}
                <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-2xl px-4 py-6 shadow-2xl border-b border-x border-zinc-700">
                  {/* Keyboard Area */}
                  <div className="mb-3 grid grid-cols-12 gap-0.5 opacity-40">
                    {/* Simplified keyboard representation */}
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 rounded-sm bg-zinc-700/60 col-span-1"
                      ></div>
                    ))}
                  </div>

                  {/* Trackpad */}
                  <div className="mx-auto w-32 h-16 rounded-lg bg-zinc-700/30 border border-zinc-600/40 shadow-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title & Meta */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full 
                           bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20
                           backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            {project.title}
          </h1>

          <p className="text-white/50 text-sm font-medium">{project.date}</p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-xl font-semibold text-white/90 mb-4">
            About This Project
          </h2>
          <p className="text-base text-white/70 leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-xl font-semibold text-white/90 mb-5">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white/80 text-sm font-medium backdrop-blur-sm
                           hover:bg-white/10 hover:border-pink-500/30 hover:text-white
                           transition-all duration-300 hover:scale-105
                           shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-xl font-semibold text-white/90 mb-5">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl 
                           bg-white/5 border border-white/10 backdrop-blur-sm
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <CheckIcon className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          {/* GitHub Link Button */}
          {project.githubLink &&
            !project.githubLink.startsWith("javascript:") &&
            project.githubLink.trim() !== "" ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                         bg-white/5 border border-white/10 text-white font-medium
                         hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300
                         hover:scale-105 shadow-lg shadow-black/10"
            >
              <GithubIcon className="w-5 h-5" />
              View on GitHub
            </a>
          ) : (
            <button
              onClick={(e) => {
                const buttonRef = { current: e.currentTarget };
                if (
                  project.githubLink &&
                  project.githubLink.startsWith("javascript:")
                ) {
                  showNotification(
                    "Design Project",
                    "This is a UI/UX design project created with Figma.\n\nSource code is not available as this is a design-only project showcasing interface design and user experience concepts.\n\nYou can view the design files and prototypes using the demo link above.",
                    "design",
                    buttonRef
                  );
                } else {
                  showNotification(
                    "GitHub Repository Not Available",
                    "The source code for this project is currently not available on GitHub.\n\nThis could be due to:\n• Private repository restrictions\n• Project still in development\n• Business/client confidentiality\n\nPlease check the live demo above to see the project in action.",
                    "info",
                    buttonRef
                  );
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                         bg-white/5 border border-white/10 text-white font-medium
                         hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300
                         hover:scale-105 shadow-lg shadow-black/10"
            >
              <GithubIcon className="w-5 h-5" />
              View on GitHub
            </button>
          )}

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-pink-500/10 border border-pink-500/30 text-pink-300 font-medium
                       hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-200
                       hover:scale-105 transition-all duration-300 
                       shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Projects
          </button>
        </motion.div>
      </motion.div>

      {/* Notification Modal */}
      <NotificationModal
        isOpen={notification.isOpen}
        onClose={closeNotification}
        title={notification.title}
        message={notification.message}
        type={notification.type}
        buttonRef={clickedButtonRef}
      />
    </motion.div>
  );
};

export default ProjectDetail;
