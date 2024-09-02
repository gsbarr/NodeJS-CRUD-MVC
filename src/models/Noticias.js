const {Schema, model} = require('mongoose');

const NoticiasEsquema = new Schema({
    Noticias: {
        type: String,
        required: true
    },
    subtitulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    fechahora: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});


module.exports = model('Noticias', NoticiasEsquema, 'Noticias');