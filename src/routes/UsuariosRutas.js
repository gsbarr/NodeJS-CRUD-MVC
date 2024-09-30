const { Router } = require('express');
const router = Router ();

const UsuariosController = require('../controllers/UsuariosController.js');



router.post('/usuario/iniciar_sesion', UsuariosController.iniciar_sesion);
  

module.exports = router;   