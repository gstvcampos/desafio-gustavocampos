import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { PrismaService } from 'src/database/prisma.service'
import {
  Bimestre,
  CreateResultadoDto,
  Disciplina,
} from './dto/create-resultado.dto'
import { UpdateResultadoDto } from './dto/update-resultado.dto'
import { Resultado } from './entities/resultado.entity'

@Injectable()
export class ResultadosService {
  constructor(private prisma: PrismaService) {}

  async create(createResultadoDto: CreateResultadoDto) {
    await this.checkDisciplina(
      createResultadoDto.disciplina,
      createResultadoDto.bimestre,
    )
    const resultado = new Resultado()
    Object.assign(resultado, {
      ...createResultadoDto,
    })
    await this.prisma.resultado.create({ data: { ...resultado } })
    return resultado
  }

  async findAll() {
    return await this.prisma.resultado.findMany()
  }

  async findOne(id: string) {
    return await this.findResultadoOrError(id)
  }

  async update(id: string, updateResultadoDto: UpdateResultadoDto) {
    await this.findResultadoOrError(id)
    return await this.prisma.resultado.update({
      where: { id },
      data: { ...updateResultadoDto },
    })
  }

  async remove(id: string) {
    await this.findResultadoOrError(id)
    await this.prisma.resultado.delete({ where: { id } })
  }

  async findResultadoOrError(id: string) {
    const resultado = await this.prisma.resultado.findUnique({ where: { id } })
    if (!resultado) throw new NotFoundException('Resultado não encontrado')
    return resultado
  }

  async checkDisciplina(disciplina: Disciplina, bimestre: Bimestre) {
    const nota = await this.prisma.resultado.findFirst({
      where: { disciplina, bimestre },
    })
    if (nota)
      throw new ConflictException(
        `Já existe uma nota para ${disciplina} no ${bimestre} bimestre`,
      )
  }
}
