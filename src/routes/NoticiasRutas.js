const { Router } = require('express');
const router = Router ();

const NoticiasController = require('../controllers/NoticiasController.js');


router.post('/noticias/nuevo', NoticiasController.nuevoItem);

router.get('/noticias/listar', NoticiasController.listarTodo);

router.delete('/noticias/eliminar/:id', NoticiasController.eliminarItem);

router.put('/noticias/actualizar/:id', NoticiasController.actualizar);

router.get('/noticias/listar/:id', NoticiasController.encontrar);


module.exports = router;   