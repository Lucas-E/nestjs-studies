import { Module } from '@nestjs/common';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { ComputerModule } from './computer/computer.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [CpuModule, DiskModule, ComputerModule, PowerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
