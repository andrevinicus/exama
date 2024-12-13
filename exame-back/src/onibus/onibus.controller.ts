import { Controller } from '@nestjs/common';
import { OnibusService } from './onibus.service';

@Controller('onibus')
export class OnibusController {
  constructor(private readonly service: OnibusService) {}
}

@Get(':id')
await findOne(@Param('id') id: string) {
  return this.onibusService.findOne(Number(id));
}