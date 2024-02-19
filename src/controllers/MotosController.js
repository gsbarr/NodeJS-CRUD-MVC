// Importamos el modelo
const Motos = require('../models/Motos.js');

// Creamos un nuevo controlador
const MotosController = {};

MotosController.inicio = (req, res) => {
    res.send('sadsa');
};

MotosController.nuevoItem = async (req, res) => {
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

    
};

MotosController.listarTodo= (req, res) => {
    res.send('sadsa');
};

MotosController.eliminarItem = (req, res) => {
    res.send('sadsa');
};

module.exports = MotosController;

