import mongoose from 'mongoose';

const superHeroSchema = new mongoose.Schema({
    nombreSuperheroe: {
        type: String,
        required: true
    },

    nombreReal: {
        type: String,
        required: true
    },

    edad: {
        type: Number,
        min: 0
    },

    planetaOrigen: {
        type: String,
        default: 'Desconocido'
    },

    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createAt: {
        type: Date,
        default: Date.now
    },
    creador: String,
});

const SuperHero = mongoose.model('SuperHero', superHeroSchema);
export default SuperHero;