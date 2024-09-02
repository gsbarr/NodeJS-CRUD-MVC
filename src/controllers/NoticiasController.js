// Importamos el modelo
const Noticias = require('../models/Noticias.js');

// Creamos un nuevo controlador
const NoticiasController = {};


NoticiasController.nuevoItem = async (req, res) => {
    // Para obtener un dato en particular
    const { autor, titulo, texto } = req.body;
    console.log(req.body);

    // Si existen los 4 datos
    if ( autor && titulo && texto ) {
        // Creamos un nuevo item
        const nuevaNoticia = new Noticias({autor, titulo, texto});
        console.log(nuevaNoticia);


        try {
            // Guardamos el nuevo item 
            let r = await nuevaNoticia.save();

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

NoticiasController.listarTodo= async (req, res) => {
    const listado = await Noticias.find();
    res.send(listado);
};

NoticiasController.encontrar = async (req, res) => {
    //const { nombre } = req.params.id;
    console.log(req.params.id);
    if (req.params.id) {
        const Noticia = await Noticias.findById(req.params.id);
       
        if (Noticia){
            res.send(Noticia); 
        } else{
            res.send("Elemento no encontrado");
        }
    }
    else {
        res.send("error");
    }
        
  
    
};

NoticiasController.eliminarItem = async (req, res) => {
    const id = req.params.id;

    if (id){
        console.log(id);
        
        try{
            await Noticias.findByIdAndDelete(id);
        }
        catch (err) { 
            console.log("Error en el delete: "+error);
            res.status(500).json({error: err});
        }

        res.send("ID ELIMINADO");
    } else{
        res.send("Falta ID");
    }
};

NoticiasController.actualizar = async (req, res) => {
    const id = req.params.id;
    const { nombre, marca } = req.body;

    console.log(req.body);

    if (id && nombre && marca){
        console.log(id, nombre, marca);
        
        try{
            let r = await Noticias.findByIdAndUpdate(id, {nombre, marca});
            if (r){
                res.status(200).json({msg: 'Recurso actualizado'})
            } else{
                res.status(500).json({error: 'Recurso no encontrado'});
            }
        } catch(e){
            res.status(500).json({error: e});
        }
    } else{
        res.status(500).json({error: 'faltan datos'});
    }
};

module.exports = NoticiasController;

