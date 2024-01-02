import { Bimestre, Disciplina } from '../dto/create-resultado.dto'

export class Resultado {
  id: string
  bimestre: Bimestre
  disciplina: Disciplina
  nota: number
  criadoEm: Date
  atualizadoEm: Date
}
