const { Router } = require('express');
const router = Router ();

const MotosController = require('../controllers/MotosController.js');


router.post('/motos/nuevo', async (req, res) => {
    // Para obtener un dato en particular
    const { nombre, marca } = req.body;
    console.log(req.body);

    // Si existen los 4 datos
    if ( nombre && marca) {
        // Creamos un nuevo item
        const nuevaMoto = new Motos({nombre, marca});
        console.log(nuevaMoto);

        // Guardamos el nuevo item 
        await nuevaMoto.save();

        //Generamos un nuevo ID
        const id = ProdData.length + 1;
        
        
        res.send('Recurso creado');
    }
    else {
        res.status(500).json({error: 'Error en creación del recurso: '});
    }

    
});

router.get('/motos/listar', MotosController.listarTodo);

router.delete('/motos/eliminar/:id', MotosController.eliminarItem);

module.exports = router;   