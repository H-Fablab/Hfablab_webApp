import dotenv from 'dotenv'
import getBlogPosts from '../middlewares/getBlogPosts.js'
import projectController from './projectController.js'

dotenv.config()


 class getPagesController {
 
  async homePage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
    const apiRoot = process.env.API_ROOTE
    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    };
    const blog_raw = await getBlogPosts.latest()
    const blog_data = [...blog_raw.data]
    
    res.render(`pages/${page}`, {currentPage, locals, blog_data})
  }

  async aboutUsPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE
    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    };

    res.render(`pages/${page}`, {currentPage, locals})
  }

  async contactPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE
    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    };
    
    
    res.render(`pages/${page}`, {currentPage, locals})

  }

  async loginPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

   const apiRoot = process.env.API_ROOTE

   const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
   // Fetch the page metadata from the API
   const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    };
    
    
    res.render(`pages/${page}`, {currentPage, locals})

  }

  async projectsPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

 const apiRoot = process.env.API_ROOTE

 const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
 // Fetch the page metadata from the API
 const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    }

    const blog_raw = await getBlogPosts.latest()
    const blog_data = [...blog_raw.data]
    
    
    res.render(`pages/${page}`, {currentPage, locals, blog_data})

  }

  async expertisePage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

 const apiRoot = process.env.API_ROOTE

 const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
 // Fetch the page metadata from the API
 const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    }

    const blog_raw = await getBlogPosts.latest()
    const blog_data = [...blog_raw.data]
    
    
    res.render(`pages/${page}`, {currentPage, locals, blog_data})

  }

  async eventPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

 const apiRoot = process.env.API_ROOTE

 const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
 // Fetch the page metadata from the API
 const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    }
    res.render(`pages/${page}`, {currentPage, locals})

  }

  async agritechPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE
   
    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
       // Check the response status
       if (!response.ok) {
         return res.status(response.status).send(response.statusText);
       }
       // Get the page metadata from the response
       const pageLocals = await response.json();
   
       // Render the page with the page metadata
       const locals = {
         ...pageLocals.data,
       }
       res.render(`pages/${page}`, {currentPage, locals})
   
     }

async donationPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE

    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    }

    res.render(`pages/${page}`, {currentPage, locals})

}
  async ateliersPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE

    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    }

    const blog_raw = await getBlogPosts.latest()
    const blog_data = [...blog_raw.data]

    res.render(`pages/${page}`, {currentPage, locals, blog_data})

}


async projectsPage(req, res) {
  const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  
      const apiRoot = process.env.API_ROOTE
  
      const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
      // Fetch the page metadata from the API
      const response = await fetch(`${apiRoot}/metadata/${page}`);
      // Check the response status
      if (!response.ok) {
        return res.status(response.status).send(response.statusText);
      }
      // Get the page metadata from the response
      const pageLocals = await response.json();
  
      // Render the page with the page metadata
      const locals = {
        ...pageLocals.data,
      }
  
      const blog_raw = await getBlogPosts.latest()
      const blog_data = [...blog_raw.data]

      const projectList = await projectController.projectsList()
      res.render(`pages/${page}`, {currentPage, locals, blog_data, projectList})
  
  }


  async singleProject(req, res) {

    const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    const  locals = await projectController.single(req.query.i)
    res.render('pages/details-project', {currentPage, locals})
  } 

async blogPage(req, res) {
const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

  const apiRoot = process.env.API_ROOTE

  const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
  // Fetch the page metadata from the API
  const response = await fetch(`${apiRoot}/metadata/${page}`);
  // Check the response status
  if (!response.ok) {
    return res.status(response.status).send(response.statusText);
  }
  // Get the page metadata from the response
  const pageLocals = await response.json();

  // Render the page with the page metadata
  const locals = {
    ...pageLocals.data,
  }

  const blog_raw = await getBlogPosts.all()
  const blog_data = [...blog_raw.data]

  res.render(`pages/${page}`, {currentPage, locals, blog_data})

}

async submissionProjet(req, res) {
  const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  
      const apiRoot = process.env.API_ROOTE
     
      const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
      // Fetch the page metadata from the API
      const response = await fetch(`${apiRoot}/metadata/${page}`);
         // Check the response status
         if (!response.ok) {
           return res.status(response.status).send(response.statusText);
         }
         // Get the page metadata from the response
         const pageLocals = await response.json();
     
         // Render the page with the page metadata
         const locals = {
           ...pageLocals.data,
         }
         res.render(`pages/${page}`, {currentPage, locals})
     
 }

 async bookingEquipment(req, res) {
  const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  
      const apiRoot = process.env.API_ROOTE
     
      const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
      // Fetch the page metadata from the API
      const response = await fetch(`${apiRoot}/metadata/${page}`);
         // Check the response status
         if (!response.ok) {
           return res.status(response.status).send(response.statusText);
         }
         // Get the page metadata from the response
         const pageLocals = await response.json();
     
         // Render the page with the page metadata
         const locals = {
           ...pageLocals.data,
         }
         res.render(`pages/${page}`, {currentPage, locals})
     
       }
       async registrationWorkshop(req, res) {
        const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
        
            const apiRoot = process.env.API_ROOTE
           
            const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
            // Fetch the page metadata from the API
            const response = await fetch(`${apiRoot}/metadata/${page}`);
               // Check the response status
               if (!response.ok) {
                 return res.status(response.status).send(response.statusText);
               }
               // Get the page metadata from the response
               const pageLocals = await response.json();
           
               // Render the page with the page metadata
               const locals = {
                 ...pageLocals.data,
               }
               res.render(`pages/${page}`, {currentPage, locals})
           
             }
             async registrationEvent(req, res) {
              const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
              
                  const apiRoot = process.env.API_ROOTE
                 
                  const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
                  // Fetch the page metadata from the API
                  const response = await fetch(`${apiRoot}/metadata/${page}`);
                     // Check the response status
                     if (!response.ok) {
                       return res.status(response.status).send(response.statusText);
                     }
                     // Get the page metadata from the response
                     const pageLocals = await response.json();
                 
                     // Render the page with the page metadata
                     const locals = {
                       ...pageLocals.data,
                     }
                     res.render(`pages/${page}`, {currentPage, locals})
                 
                   }

                   async passwordForgot(req, res) {
                    const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    
                        const apiRoot = process.env.API_ROOTE
                       
                        const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
                        // Fetch the page metadata from the API
                        const response = await fetch(`${apiRoot}/metadata/${page}`);
                           // Check the response status
                           if (!response.ok) {
                             return res.status(response.status).send(response.statusText);
                           }
                           // Get the page metadata from the response
                           const pageLocals = await response.json();
                       
                           // Render the page with the page metadata
                           const locals = {
                             ...pageLocals.data,
                           }
                           res.render(`pages/${page}`, {currentPage, locals})
                       
                         }
                         async newPassword(req, res) {
                          const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
                          
                              const apiRoot = process.env.API_ROOTE
                             
                              const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
                              // Fetch the page metadata from the API
                              const response = await fetch(`${apiRoot}/metadata/${page}`);
                                 // Check the response status
                                 if (!response.ok) {
                                   return res.status(response.status).send(response.statusText);
                                 }
                                 // Get the page metadata from the response
                                 const pageLocals = await response.json();
                             
                                 // Render the page with the page metadata
                                 const locals = {
                                   ...pageLocals.data,
                                 }
                                 res.render(`pages/${page}`, {currentPage, locals})
                             
                               }
      
}




export default new getPagesController()