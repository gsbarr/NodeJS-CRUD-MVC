const jwt = require('jsonwebtoken');
require('dotenv').config();

const Autenticacion = {};


Autenticacion.verificarToken = async (req, res, next) => {
    // Extract the token from the Authorization header
    console.log("verificando token");

    const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
    console.log(cookieJWT);

    const secretKey = process.env.JWT_SECRET;

    if (!cookieJWT) {
      console.log("No se entregó token");
      return res.status(401).json({ message: 'No token provided' });
    }
  
    // Verify and decode the token
    jwt.verify(cookieJWT, secretKey, (err, decoded) => {
      if (err) {
        console.log('Token invalido');
        return res.status(403).json({ message: 'Invalid token' });
      }
  
      // Add the decoded user information to the request object
      req.user = decoded;
      console.log("NEXT");
      next();
    });
  }


  module.exports = Autenticacion;
