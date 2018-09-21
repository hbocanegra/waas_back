import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';

describe('Clientes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ClientesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ClientesController = module.get<ClientesController>(ClientesController);
    expect(controller).toBeDefined();
  });
});
