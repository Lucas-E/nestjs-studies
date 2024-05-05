import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  receivePower(watts: number) {
    this.powerService.providePower(watts, 'CPU');
  }
}
