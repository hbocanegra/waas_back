import * as mongoose from 'mongoose';
import { EmpresaSchema } from '../empresas/empresas.schema';

export const ClienteSchema = new mongoose.Schema({
    nit: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    empresa: {
        type: mongoose.Schema.ObjectId,  ref: 'Empresa',
        required: true,
    },
});