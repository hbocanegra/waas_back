import { Model } from 'mongoose';
import { Inject, Injectable, Param } from '@nestjs/common';

import { Cliente } from './interfaces/cliente.interface';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { debug } from 'console';

@Injectable()
export class ClientesService {
    constructor(
        @Inject(POST_MODEL_PROVIDER) private readonly ClienteModel: Model<Cliente>) { }

    async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
        const createdCliente = new this.ClienteModel(createClienteDto);
        return await createdCliente.save();
    }

    async findAll(): Promise<Cliente[]> {
        return await this.ClienteModel.find().exec();
    }

    async findById(@Param('id') id: string): Promise<Cliente> {
        return await this.ClienteModel.findById(id).populate('empresa').exec();
    }

    async delete(@Param('id') id: string) {
        try {
            return await this.ClienteModel.findByIdAndRemove(id).exec();
        }
        catch (err){
            debug(err);
            return 'El cliente no ha podido ser eliminado.';
        }
    }

    async update(@Param('id') id: string, updateClienteDta: UpdateClienteDto): Promise<Cliente> {
        const cliente = await this.ClienteModel.findById(id).exec();

        if (cliente) {
            await this.ClienteModel.findByIdAndUpdate(id, updateClienteDta).exec();
            return await this.ClienteModel.findById(id).exec();
        }else{
            debug('Cliente no encontrado');
        }
    }
}