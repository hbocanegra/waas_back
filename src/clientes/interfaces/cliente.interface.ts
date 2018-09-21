import { Document } from 'mongoose';

export interface Cliente extends Document {
    readonly nit: number;
    readonly nombre: string;
    readonly empresa: string;
}