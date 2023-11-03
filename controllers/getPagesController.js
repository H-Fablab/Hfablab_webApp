import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';
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

    const projectList = await projectController.latestProject()
    
    res.render(`pages/${page}`, {currentPage, locals, blog_data, projectList})
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

       const token = req.cookies.access_token;
       const apiRoot = process.env.API_ROOTE;
      
      if (token) {
       
         const userResponse = await fetch(`${apiRoot}/refreshuser`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
        })

          if (userResponse.status===200) {
            return res.status(200).redirect(303, '/mon-compte/dashboard');
          }
      }  else {
                    
              const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

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



    const eventRaw = await fetch(`${apiRoot}/events`)
    // Check the response status
    if (!eventRaw.ok) {
      return res.status(eventRaw.status).send(eventRaw.statusText);
    }
    const eventData = await eventRaw.json()

    const events = Object.values(eventData.events);

    res.render(`pages/${page}`, {currentPage, locals, events})

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

         const equipmentData = await fetch(`${apiRoot}/equipements`)
    if (!equipmentData.ok) {
        return res.status(equipmentData.status).send(equipmentData.statusText);
      }
      // Get the page metadata from the response
      const equipmentsRaw = await equipmentData.json()
      const equipments = [...equipmentsRaw.equipments]
         res.render(`pages/${page}`, {currentPage, locals, equipments})
     
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




               const workshopsData = await fetch(`${apiRoot}/workshops`)
               if (!workshopsData.ok) {
                   return res.status(workshopsData.status).send(workshopsData.statusText);
                 }
                 // Get the page metadata from the response
                 const workshopsRaw = await workshopsData.json()
                 const workshops = workshopsRaw.workshop

               res.render(`pages/${page}`, {currentPage, locals, workshops})
           
             }
             async registrationEvent(req, res) {
              const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
              
                  const apiRoot = process.env.API_ROOTE
                 
                  const page = 'inscription-evenement'
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


                     const eventResponse = await fetch(`${apiRoot}/inscription-evenement/${req.params.id}`);
                     
                     // Check the response status
                      if (!eventResponse.ok) {
                        return res.status(eventResponse.status).send(eventResponse.statusText);
                      }
                     const eventRaw =  await eventResponse.json()
                     const eventData = {
                      ...eventRaw.event,
                    }

                     res.render(`pages/inscription-evenement`, {currentPage, locals, eventData})
                 
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