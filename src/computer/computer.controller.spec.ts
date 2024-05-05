import { Test, TestingModule } from '@nestjs/testing';
import { ComputerController } from './computer.controller';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';
import { PowerModule } from '../power/power.module';
import { ComputerService } from './computer.service';

describe('ComputerController', () => {
  let controller: ComputerController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputerController],
      imports: [CpuModule, DiskModule, PowerModule],
      providers: [ComputerService],
    }).compile();

    controller = module.get<ComputerController>(ComputerController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/computer/bootUp (POST)', () => {
    it('Should return true when called', async () => {
      return request(app.getHttpServer())
        .post('/computer/bootUp')
        .expect(201)
        .expect({ didBootUp: true });
    });
  });
});
