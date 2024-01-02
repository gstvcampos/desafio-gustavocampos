import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateResultadoDto } from './dto/create-resultado.dto'
import { UpdateResultadoDto } from './dto/update-resultado.dto'
import { ResultadosService } from './resultados.service'

@ApiTags('resultados')
@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadosService.create(createResultadoDto)
  }

  @Get()
  findAll() {
    return this.resultadosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultadosService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResultadoDto: UpdateResultadoDto,
  ) {
    return this.resultadosService.update(id, updateResultadoDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultadosService.remove(id)
  }
}
