import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
    nit: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
});