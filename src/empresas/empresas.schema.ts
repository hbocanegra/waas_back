import * as mongoose from 'mongoose';

export const EmpresaSchema = new mongoose.Schema({
    nit: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    alta: {
        type: Date,
        required: true,
    },
    contrato: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: String,
    },
});