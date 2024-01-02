import { Bimestre, Disciplina } from '@prisma/client'

export class Resultado {
  id: string
  bimestre: Bimestre
  disciplina: Disciplina
  nota: number
  criadoEm: Date
  atualizadoEm: Date
}
