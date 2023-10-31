import jwt from 'jsonwebtoken';

const JWTSecret = 'YOUR_JWT_SECRET'

const auth = async (req, res, next) => {
  
    try {
       const token = req.cookies.access_token;
       const decodedToken = jwt.verify(token, JWTSecret);
      
      // If the token is not valid, return an error
      if (!decodedToken) {
        return res.status(401).json({ message: 'Token not provide' });
      }
      const apiRoot = process.env.API_ROOTE;
      const response = await fetch(`${apiRoot}/refreshuser`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      
      const userData = await response.json()
  
      // If the user is not found, return an error
      if (!userData) {
       
        return res.status(401).redirect('/login');
      }
      req.user = userData;
      next();

    } catch (err) {
        return res.status(401).redirect('/login');
    }
  };

  export default auth;