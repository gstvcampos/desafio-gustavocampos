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
