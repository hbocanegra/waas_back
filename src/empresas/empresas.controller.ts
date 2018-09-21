import { Controller, Get, Post, Body, Param, Delete, Put, Patch, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { EmpresasService } from './empresas.service';
import { Empresa as EmpresaInterface } from './interfaces/empresa.interface';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('empresas')
export class EmpresasController {
    constructor(private readonly empresasService: EmpresasService) { }

    @Post()
    @ApiOperation({ title: 'Crear empresa' })
    @ApiResponse({ status: 201, description: 'Registro creado correctamente' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiResponse({ status: 400, description: 'Bas request' })
    async create(@Body() createEmpresaDto: CreateEmpresaDto){
        this.empresasService.create(createEmpresaDto);
    }

    @Get()
    @ApiOperation({ title: 'Listar empresas' })
    @ApiResponse({ status: 200, description: 'ok'})
    async findAll(): Promise<EmpresaInterface[]> {
        return this.empresasService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Consultar empresa por ID' })
    @ApiResponse({ status: 200, description: 'Empresa servido correctamente'})
    @ApiResponse({ status: 404, description: 'La empresa no existe'})
    async findById(@Param('id') id: string): Promise<EmpresaInterface> {
        const empresa = this.empresasService.findById(id);

        if (!empresa){
            throw new NotFoundException();
        }

        return empresa;
    }

    @Delete(':id')
    @ApiOperation({ title: 'Eliminar empresa' })
    @ApiResponse( {status: 200, description: 'Empresa eliminada correctamente.'} )
    @ApiResponse( {status: 400, description: 'Bad request.'} )
    async delete(@Param('id') id: string) {
        this.empresasService.delete(id);
    }

    @Patch(':id')
    @ApiOperation({ title: 'Modificar empresa' })
    @ApiResponse( {status: 200, description: 'Empresa modificado correctamente.'} )
    @ApiResponse( {status: 400, description: 'Bad request.'} )
    async update(@Param('id') id: string, @Body() createEmpresaDto: CreateEmpresaDto): Promise<EmpresaInterface> {
        const empresa = this.empresasService.update(id, createEmpresaDto);

        if (!empresa){
            throw new NotFoundException();
        }
        return empresa;
    }
}