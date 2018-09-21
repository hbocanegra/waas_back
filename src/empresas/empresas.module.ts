import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { DatabaseModule } from '../database/database.module';
import { EmpresasService } from './empresas.service';
import { empresasProviders } from './empresas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmpresasController],
  providers: [
      EmpresasService,
      ...empresasProviders,
  ],
})
export class EmpresasModule {}
