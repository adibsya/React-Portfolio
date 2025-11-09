import cookingAppData from "./cookingApp";
import justibotAiData from "./justibotAi";
import mobileAppData from "./mobileApp";

// Central project data registry
const projectsData = {
  "cooking-app": cookingAppData,
  "justibot-ai": justibotAiData,
  "mobile-app": mobileAppData,
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData[slug] || null;
};

// Helper function to get all projects as array
export const getAllProjects = () => {
  return Object.values(projectsData);
};

export default projectsData;
