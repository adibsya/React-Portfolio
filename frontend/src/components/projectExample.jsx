import React, { useState } from "react";
import { getAllProjects } from "../data";
import ProjectDetail from "./projectDetail";

const ProjectExample = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = getAllProjects();

  const handleProjectClick = (slug) => {
    setSelectedProject(slug);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    // Re-enable body scroll
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300/80">
            Portfolio
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Featured{" "}
            <span className="bg-clip-text text-pink-400">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleProjectClick(project.slug)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl 
                         ring-1 ring-white/10 hover:ring-white/20 
                         transition-all duration-300 hover:-translate-y-1
                         hover:shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)]
                         cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
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

                {/* Date */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/50">{project.date}</span>
                  <svg
                    className="w-5 h-5 text-pink-400 opacity-0 -translate-x-2 group-hover:opacity-100 
                               group-hover:translate-x-0 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          projectId={selectedProject}
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
};

export default ProjectExample;
