import { Document } from 'mongoose';

export interface Empresa extends Document {
    readonly nit: number;
    readonly nombre: string;
    readonly alta: Date;
    readonly contrato: string;
    readonly estado: string;
}