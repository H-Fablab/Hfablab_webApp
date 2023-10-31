import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();



class memberController {


  async login(req, res) {
    try {
      const formData = req.body;
      const apiRoot = process.env.API_ROOTE;
      const response = await fetch(`${apiRoot}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 200) {
        
        const userData = await response.json();
        res.cookie("access_token", userData.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });
  
        return res.status(200).redirect(303, '/mon-compte/dashboard');
      } else {
        // Handle errors from the backend API
        const errorMessage = 'Login Failed';
        res.status(response.status).json({ message: errorMessage });
      }
    } catch (error) {
      const errorMessage = 'Failed to sign up: ' + error.message;
      res.status(500).json({ message: errorMessage });
    }
  }

  async logout(req, res) {
    
    try {
      const JWTSecret = 'YOUR_JWT_SECRET'
      const token = req.cookies.access_token;
      const decodedToken = jwt.verify(token, JWTSecret);
  
      // If the token is not valid, return an error
      if (!decodedToken) {
        return res.status(401).json({ message: 'Token not provided' });
      }
      const apiRoot = process.env.API_ROOTE;
      const response = await fetch(`${apiRoot}/logout`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
  
      const logout = await response.json()
      console.log(logout)
      // If the user is not found, return an error
      if (logout.status==="Sucess") {
        return res
              .clearCookie("access_token")
              .status(200)
              .redirect(303, '/login')
      }
     

    } catch (error) {
      res.status(401).json({ message: error.message +'this error' });
    }
  }

  async myAccount(req, res) {
    try {
      const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
        const apiRoot = process.env.API_ROOTE
       
        const page = 'mon-compte'
        // Fetch the page metadata from the API
        const response = await fetch(`${apiRoot}/metadata/${page}`);
           // Check the response status
           
           if (!response.ok) {
           
             return res.status(response.status).send(response.statusText);
             
           }
           const pageLocals = await response.json();
       
           // Render the page with the page metadata
           const locals = {
             ...pageLocals.data,
           }
           const userData = req.user
           const user = {...userData.user}

           res.render(`pages/${page}`, {currentPage, locals, user})
    } catch (error) {
      res.send(`Somethings went wrong`)
    }
       
  }

  async accountSettings(req, res) {
    const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
        const apiRoot = process.env.API_ROOTE
       
        const page =  'parametres'
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
           const user = req.user
           res.render(`pages/${page}`, {currentPage, locals})
       
         }


         async accountSubscription(req, res) {
          const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
          
              const apiRoot = process.env.API_ROOTE
             
              const page =  'abonnement'
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
                 const user = req.user
                 res.render(`pages/${page}`, {currentPage, locals})
             
               }
               async signUp(req, res) {
                 try {
                   const formData = req.body;
                   const apiRoot = process.env.API_ROOTE // Correct the typo in 'API_ROOTE' to 'API_ROOT'.
                   const response = await fetch(`${apiRoot}/sign-up`, {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json',
                     },
                     body: JSON.stringify(formData),
                   });
               
                   if (response.status === 201) {
                     const userData = await response.json();
                     res.cookie("access_token", userData.token, {
                       httpOnly: true,
                       secure: process.env.NODE_ENV === "production",
                     });
               
                     return res.status(200).redirect(303, '/mon-compte/dashboard'); // Correct the redirect path
                   } else {
                     // Handle errors from the backend API
                     const errorMessage = 'Failed';
                     return res.status(response.status).json({ message: errorMessage });
                   }
                 } catch (error) {
                   return res.status(500).redirect('/login'); // Correct the redirect path
                 }
               }
               

}


export default new memberController();
