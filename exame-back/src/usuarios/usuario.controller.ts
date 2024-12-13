import { Controller } from '@nestjs/common';

import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}
}
@Get(':id')
await findOne(@Param('id') id: string) {
  return this.onibusService.findOne(Number(id));
}