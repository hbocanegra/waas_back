import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasService } from './empresas.service';

describe('EmpresasService', () => {
  let service: EmpresasService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasService],
    }).compile();
    service = module.get<EmpresasService>(EmpresasService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
