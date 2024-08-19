// Importamos el modelo
const Motos = require('../models/Usuarios.js');

// Creamos un nuevo controlador
const UsuariosController = {};

UsuariosController.nuevoItem = async (req, res) => {
    // Para obtener un dato en particular
    const { nombre, marca } = req.body;
    console.log(req.body);

    // Si existen los 4 datos
    if ( nombre && marca) {
        // Creamos un nuevo item
        const nuevaMoto = new Motos({nombre, marca});
        console.log(nuevaMoto);


        try {
            // Guardamos el nuevo item 
            let r = await nuevaMoto.save();

            // Verificamos si se creó el recurso
            if (r){
                res.status(200).json({msg: 'Recurso creado'});
            } else {
                res.status(500).json({error: 'Recurso no creado'});
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({error: e});
        }
        
    }
    else {
        res.status(500).json({error: 'faltan datos'});
    }

    
};


UsuariosController.encontrar = async (req, res) => {
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

module.exports = UsuariosController;

