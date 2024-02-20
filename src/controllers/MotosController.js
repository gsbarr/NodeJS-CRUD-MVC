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
        //const id = ProdData.length + 1;
        
        
        res.send('Recurso creado');
    }
    else {
        res.status(500).json({error: 'Error en creación del recurso: '});
    }

    
};

MotosController.listarTodo= async (req, res) => {
    const listado = await Motos.find();
    res.send(listado);
};

MotosController.encontrar = async (req, res) => {
    //const { nombre } = req.params.id;
    console.log(req.params.id);
    if (req.params.id) {
        const Moto = await Motos.findById(req.params.id);
        if (Moto){
            res.send(Moto);
        } else{
            res.send("Elemento no encontrado");
        }
    }
    else {
        res.send("error");
    }
        
  
    
};

MotosController.eliminarItem = async (req, res) => {
    const id = req.params.id;

    if (id){
        console.log(id);
        await Motos.findByIdAndDelete(id);
        res.send("ID ELIMINADO");
    } else{
        res.send("Falta ID");
    }
};

MotosController.actualizar = async (req, res) => {
    const id = req.params.id;
    const { nombre, marca } = req.body;

    console.log(req.body);

    if (id && nombre && marca){
        console.log(id, nombre, marca);
        await Motos.findByIdAndUpdate(id, {nombre, marca});
        res.send("ID actualizado");
    } else{
        res.send("Faltan datos");
    }
};

module.exports = MotosController;

