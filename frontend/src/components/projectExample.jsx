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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => handleProjectClick(project.slug)}
              className="group relative overflow-hidden rounded-3xl
                         bg-gradient-to-b from-white/10 to-white/5
                         backdrop-blur-xl cursor-pointer
                         transition-all duration-700 ease-out
                         hover:-translate-y-2 hover:scale-[1.02]
                         before:absolute before:inset-0 before:rounded-3xl before:p-[1px]
                         before:bg-gradient-to-b before:from-white/20 before:to-transparent
                         before:transition-opacity before:duration-500
                         hover:before:opacity-0
                         after:absolute after:inset-0 after:rounded-3xl after:p-[1px]
                         after:bg-gradient-to-br after:from-pink-500/50 after:via-purple-500/30 after:to-transparent
                         after:opacity-0 after:transition-opacity after:duration-500
                         hover:after:opacity-100
                         shadow-lg shadow-black/20
                         hover:shadow-[0_30px_80px_-20px_rgba(236,72,153,0.4)]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Inner container for border effect */}
              <div className="relative z-10 h-full rounded-3xl overflow-hidden bg-zinc-900/80">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover
                               transition-all duration-700 ease-out
                               group-hover:scale-110
                               filter group-hover:brightness-110 group-hover:saturate-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent
                                  transition-opacity duration-500 group-hover:opacity-80" />
                  
                  {/* Hover glow effect on image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/0 via-transparent to-purple-500/0
                                  opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Subtle top glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px
                                  bg-gradient-to-r from-transparent via-pink-500/50 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-xl font-bold text-white 
                                 group-hover:text-transparent group-hover:bg-clip-text 
                                 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400
                                 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60 line-clamp-2
                                group-hover:text-white/80 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium rounded-full 
                                   bg-white/5 text-white/70 ring-1 ring-white/10
                                   group-hover:bg-pink-500/15 group-hover:text-pink-300 
                                   group-hover:ring-pink-500/30
                                   transition-all duration-500 ease-out"
                        style={{
                          transitionDelay: `${tagIndex * 50}ms`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date & Arrow */}
                  <div className="mt-6 pt-4 border-t border-white/10 
                                  group-hover:border-pink-500/20 transition-colors duration-500
                                  flex items-center justify-between">
                    <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {project.date}
                    </span>
                    <div className="flex items-center gap-2 text-pink-400">
                      <span className="text-xs font-medium opacity-0 -translate-x-2
                                       group-hover:opacity-100 group-hover:translate-x-0
                                       transition-all duration-500 ease-out">
                        View Project
                      </span>
                      <svg
                        className="w-5 h-5 opacity-0 -translate-x-3
                                   group-hover:opacity-100 group-hover:translate-x-0
                                   transition-all duration-500 ease-out delay-75"
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
