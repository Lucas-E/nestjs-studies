import { Controller, Post } from '@nestjs/common';
import { ComputerService } from './computer.service';

@Controller('computer')
export class ComputerController {
  constructor(private computerService: ComputerService) {}
  @Post('/bootUp')
  bootUp() {
    const didBootUp = this.computerService.bootUp();
    return { didBootUp };
  }
}
