import { Bimestre, Disciplina } from '@prisma/client'
import { IsEnum, IsNumber, Max, Min } from 'class-validator'

export class CreateResultadoDto {
  @IsEnum(Bimestre, {
    message:
      'Valor invalido para Bimestre, ' +
      `valores aceitos: ${Object.values(Bimestre)}`,
  })
  bimestre: Bimestre

  @IsEnum(Disciplina, {
    message:
      'Valor invalido para Disciplina, ' +
      `valores aceitos: ${Object.values(Disciplina)}`,
  })
  disciplina: Disciplina

  @IsNumber()
  @Min(0)
  @Max(10)
  nota: number
}
