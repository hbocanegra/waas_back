import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [ClientesModule, EmpresasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
