import dotenv from 'dotenv';
dotenv.config();

class projectsController {
  async projectsList(req, res) {
    try {
     
      // Fetch the projects list from the API.
      const projectsData = await fetch(`${process.env.API_ROOTE}/projects`);
      if (!projectsData.ok) {
        throw new Error(`Failed to fetch projects list: ${projectsData.status}`);
      }

      // Get the project data from the response.
      const projectsRaw = await projectsData.json();
      const projects = [...projectsRaw.projectData];
      
      projects.forEach((project) => {
        project.link = project.title
          .toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .normalize('NFD') // Normalize to remove accents
          .replace(/[\u0300-\u036f]/g, '');
          project.summary = project.summary.length > 75 ? project.summary.substring(0, 75) + '...' : project.summary;
          project.title = project.title.length > 40 ? project.title.substring(0, 40) + '...' : project.title;
      });
      // Render the page.
    return projects
    } catch (error) {
      // Handle the error.
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  }

  async single(id) {

    const apiRoot = process.env.API_ROOTE
    const postEndpoint = `project/${id}`
    
    // Fetch the blog posts from the backend API
    const response = await fetch(`${apiRoot}/${postEndpoint}`)

    // Check the response status
    if (!response.ok) {
      console.error(`Failed to fetch blog posts: ${response.statusText}`)
      return [];
    }

    // Get the blog posts from the response
    const projectRaw = await response.json()
    // Add "link_title" and "truncate_title" to each blog post
   const projectData = { ...projectRaw.projectData};
      

 
  return  projectData
}
}

export default new projectsController();
