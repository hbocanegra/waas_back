import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasController } from './empresas.controller';

describe('Empresas Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EmpresasController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EmpresasController = module.get<EmpresasController>(EmpresasController);
    expect(controller).toBeDefined();
  });
});
