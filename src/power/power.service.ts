import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  providePower(watts: number, module: string) {
    console.log(`Powering ${module} with ${watts} watts`);
  }
}
