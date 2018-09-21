import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { clientesProviders } from './clientes.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ClientesController],
    providers: [
        ClientesService,
        ...clientesProviders,
    ],
})
export class ClientesModule { }