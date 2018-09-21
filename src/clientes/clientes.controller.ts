import { Controller, Get, Post, Body, Param, Delete, Put, Patch, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClientesService } from './clientes.service';
import { Cliente as ClienteInterface } from './interfaces/cliente.interface';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) { }

    @Post()
    @ApiOperation({ title: 'Crear cliente' })
    @ApiResponse({ status: 201, description: 'Registro creado correctamente' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiResponse({ status: 400, description: 'Bas request' })
    async create(@Body() createClienteDto: CreateClienteDto) {
        this.clientesService.create(createClienteDto);
    }

    @Get()
    @ApiOperation({ title: 'Listar cliente' })
    @ApiResponse({ status: 200, description: 'ok'})
    async findAll(): Promise<ClienteInterface[]> {
        return this.clientesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Consultar cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente servido correctamente'})
    @ApiResponse({ status: 404, description: 'El cliente no existe'})
    async findById(@Param('id') id: string): Promise<ClienteInterface> {
        const cliente = this.clientesService.findById(id);

        if (!cliente){
            throw new NotFoundException();
        }

        return cliente;
    }

    @Delete(':id')
    @ApiOperation({ title: 'Eliminar cliente' })
    @ApiResponse( {status: 200, description: 'Cliente eliminado correctamente.'} )
    @ApiResponse( {status: 400, description: 'Bad request.'} )
    async delete(@Param('id') id: string) {
        this.clientesService.delete(id);
    }

    @Patch(':id')
    @ApiOperation({ title: 'Modificar cliente' })
    @ApiResponse( {status: 200, description: 'Cliente modificado correctamente.'} )
    @ApiResponse( {status: 400, description: 'Bad request.'} )
    async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto): Promise<ClienteInterface> {
        const cliente = this.clientesService.update(id, updateClienteDto);

        if (!cliente){
            throw new NotFoundException();
        }
        return cliente;
    }
}