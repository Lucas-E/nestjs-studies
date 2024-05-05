import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';
import { PowerModule } from '../power/power.module';
import { ComputerService } from './computer.service';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, DiskModule, PowerModule],
  providers: [ComputerService],
})
export class ComputerModule {}
