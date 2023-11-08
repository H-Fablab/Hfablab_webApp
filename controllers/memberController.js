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

      const userData = await response.json();

      if (response.ok) {
        res.cookie("access_token", userData.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });

        // return res.status(200).redirect(303, '/mon-compte/dashboard');
        return res.status(200).send({
          message: "Success"
        })
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
      const response = await fetch(`${apiRoot}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })

      const logout = await response.json()
      console.log(logout)
      // If the user is not found, return an error
      if (logout.status === "Sucess") {
        return res
          .clearCookie("access_token")
          .status(200)
          .redirect(303, '/login')
      }


    } catch (error) {
      res.status(401).json({ message: error.message + 'this error' });
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
      const user = { ...userData.user }

      res.render(`pages/${page}`, { currentPage, locals, user })
    } catch (error) {
      res.send(`Somethings went wrong`)
    }

  }

  async accountSettings(req, res) {
    const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE

    const page = 'parametres'
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
    const userData = req.user
    const user = { ...userData.user }
    res.render(`pages/${page}`, { currentPage, locals, user })

  }

  async updateSettings(req, res) {
    const apiRoot = process.env.API_ROOTE
    const token = req.cookies.access_token;
    const formData = req.body

    const response = await fetch(`${apiRoot}/updatesettings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      return res.status(200).send({ ...data })
    } else {
      return res.status(500).send({
        message: data?.message || "Une erreur est survenue!"
      })
    }

  }

  async accountSubscription(req, res) {
    const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    const apiRoot = process.env.API_ROOTE

    const page = 'abonnement'
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
    const userData = req.user
    const user = { ...userData.user }
    res.render(`pages/${page}`, { currentPage, locals, user })

  }
  async signUp(req, res) {
    try {
      const formData = req.body;
      console.log(formData)
      const apiRoot = process.env.API_ROOTE
      const response = await fetch(`${apiRoot}/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // console.log(await response.json())
      const userData = await response.json();
      if (response.ok) {
        res.cookie("access_token", userData.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });

        return res.status(200).json({ message: 'Success' })
      } else if (response.status === 409) {
        return res.status(409).json({ message: 'User already exists' });
      } else {
        return res.status(400).json({ message: 'Une erreur est survenue, merci de réesayer' });
      }
    } catch (error) {
      return res.status(500).redirect('/login'); // Correct the redirect path
    }


  }


}


export default new memberController();
