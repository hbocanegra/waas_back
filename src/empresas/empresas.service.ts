import { Model } from 'mongoose';
import { Inject, Injectable, Param } from '@nestjs/common';
import { Empresa } from './interfaces/empresa.interface';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { debug } from 'console';

@Injectable()
export class EmpresasService {
    constructor(
        @Inject(POST_MODEL_PROVIDER) private readonly EmpresaModel: Model<Empresa>) { }

    async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
        const createdEmpresa = new this.EmpresaModel(createEmpresaDto);
        return await createdEmpresa.save();
    }

    async findAll(): Promise<Empresa[]> {
        return await this.EmpresaModel.find().exec();
    }

    async findById(@Param('id') id: string): Promise<Empresa> {
        return await this.EmpresaModel.findById(id);
    }

    async delete(@Param('id') id: string) {
        try {
            return await this.EmpresaModel.findByIdAndRemove(id).exec();
        }
        catch (err){
            debug(err);
            return 'El Empresa no ha podido ser eliminada.';
        }
    }

    async update(@Param('id') id: string, createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
        const empresa = await this.EmpresaModel.findById(id).exec();

        if (empresa) {
            await this.EmpresaModel.findByIdAndUpdate(id, createEmpresaDto).exec();
            return await this.EmpresaModel.findById(id).exec();
        }else{
            debug('Empresa no encontrado');
        }
    }
}
