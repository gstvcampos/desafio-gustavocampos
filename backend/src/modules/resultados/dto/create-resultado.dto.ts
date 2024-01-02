import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumber, Max, Min } from 'class-validator'

export enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO',
}

export enum Disciplina {
  BIOLOGIA = 'BIOLOGIA',
  ARTES = 'ARTES',
  GEOGRAFIA = 'GEOGRAFIA',
  SOCIOLOGIA = 'SOCIOLOGIA',
}

export class CreateResultadoDto {
  @ApiProperty({
    description: 'Bimestre para lançamento',
    example: 'PRIMEIRO',
  })
  @IsEnum(Bimestre, {
    message:
      'Valor invalido para Bimestre, ' +
      `valores aceitos: ${Object.values(Bimestre)}`,
  })
  bimestre: Bimestre

  @ApiProperty({
    description: 'Disciplina para lançamento',
    example: 'BIOLOGIA',
  })
  @IsEnum(Disciplina, {
    message:
      'Valor invalido para Disciplina, ' +
      `valores aceitos: ${Object.values(Disciplina)}`,
  })
  disciplina: Disciplina

  @ApiProperty({
    description: 'Nota para lançamento',
    example: 7.5,
  })
  @IsNumber()
  @Min(0)
  @Max(10)
  nota: number
}
