import { z } from 'zod'

export const resultadoSchema = z.object({
  id: z.string(),
  bimestre: z.enum(['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']),
  disciplina: z.enum(['BIOLOGIA', 'ARTES', 'GEOGRAFIA', 'SOCIOLOGIA']),
  nota: z.number().min(0).max(10),
  criadoEm: z.date(),
  atualizadoEm: z.date(),
})

export const createResultadoSchema = resultadoSchema.omit({
  id: true,
  criadoEm: true,
  atualizadoEm: true,
})
