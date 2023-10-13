import dotenv from 'dotenv';
dotenv.config();

class memberController {


  async login(req, res) {
    try {


        const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
            
                const apiRoot = process.env.API_ROOTE

                // Fetch the page metadata from the API
                   const userRaw = await fetch(`${apiRoot}/login`);
                   // Check the response status
                   if (!response.ok) {
                     return res.status(response.status).send(response.statusText);
                   }
                   // Get the page metadata from the response
                   const userData = await userRaw.json();
               
                   // Render the page with the page metadata
                   console.log(userData)
                   res.render(`pages/mon-compte}`, {currentPage})
 
    //   res.setHeader('Authorization', `Bearer ${token}`);
    //   res.status(200).json({
    //     status: 'Success',
    //     user,
    //     token
    //   });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async logout(req, res) {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !==req.token
      })

      await req.user.save() 
      
      res.status(200).json({
        status: 'Success'
      });

    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async dashboard(req, res) {
    try { 
      const user = req.user
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
  async parametres(req, res) {
    try { 
      const user = req.user
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async signUp(req, res) {
    try {

      const apiRoot = process.env.API_ROOT;
  
      const response = await fetch(`${apiRoot}/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

      });
  
      // Check the response status code
      if (!response.ok) {
        return res.status(response.status).send(response.statusText);
      }
  
      // Get the response data
      const responseData = await response.json();
  
      // Log the response data
      console.log(responseData);
  
      // Return the response data to the user
      res.status(200).json({ responseData });
    } catch (error) {
      const errorMessage = 'Failed to sign up: ' + error.message;
      res.status(500).json({ message: errorMessage });
    }
  }
  
}


export default new memberController();
