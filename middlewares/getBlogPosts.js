import dotenv from 'dotenv';
dotenv.config();

class getBlogPosts {

  async fetchBlogPosts(apiEndpoint) {
    const apiRoot = process.env.API_ROOTE;

    // Fetch the blog posts from the backend API
    const response = await fetch(`${apiRoot}/${apiEndpoint}`);

    // Check the response status
    if (!response.ok) {
      console.error(`Failed to fetch blog posts: ${response.statusText}`);
      return [];
    }

    // Get the blog posts from the response
    const blogPosts = await response.json();

    // Add "link_title" and "truncate_title" to each blog post
    blogPosts.data.forEach((post) => {
      post.link_title = post.title
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .normalize('NFD') // Normalize to remove accents
        .replace(/[\u0300-\u036f]/g, '');

      post.truncate_title = post.title.length > 55 ? post.title.substring(0, 55) + '...' : post.title;
    });

    return blogPosts;
  }

  async latest() {
    return await this.fetchBlogPosts('latest-posts');
  }

  async all() {
    return await this.fetchBlogPosts('blog');
  }

  async single(id) {

      const apiRoot = process.env.API_ROOTE
      const postEndpoint = `blog/${id}`
      
      // Fetch the blog posts from the backend API
      const response = await fetch(`${apiRoot}/${postEndpoint}`)
  
      // Check the response status
      if (!response.ok) {
        console.error(`Failed to fetch blog posts: ${response.statusText}`)
        return [];
      }
  
      // Get the blog posts from the response
      const blog_raw = await response.json()
      // Add "link_title" and "truncate_title" to each blog post
     const blogPosts = {
          ...blog_raw.data,
          link_title: blog_raw.data.title
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .normalize('NFD') // Normalize to remove accents
            .replace(/[\u0300-\u036f]/g, ''),
          truncate_title: blog_raw.data.title.length > 55 ? blog_raw.data.title.substring(0, 55) + '...' : blog_raw.data.title,
        };
        

   
    return  blogPosts
  }

  async relatives(id) {

    const apiRoot = process.env.API_ROOTE
    const relativesEndpoint = `relative-posts/${id}`
    
    return await this.fetchBlogPosts(relativesEndpoint)
}

}

export default new getBlogPosts();
