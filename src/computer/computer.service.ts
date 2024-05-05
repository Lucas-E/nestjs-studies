import { Injectable } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';
import { PowerService } from '../power/power.service';

@Injectable()
export class ComputerService {
  constructor(
    private powerService: PowerService,
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  bootUp() {
    this.powerService.providePower(100, 'computer');
    this.cpuService.receivePower(100);
    this.diskService.receivePower(100);
    return true;
  }
}
