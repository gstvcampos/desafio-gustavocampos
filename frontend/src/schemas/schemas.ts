import { z } from 'zod'

export const resultadoSchema = z.object({
  id: z.string(),
  bimestre: z.enum(['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']),
  disciplina: z.enum(['BIOLOGIA', 'ARTES', 'GEOGRAFIA', 'SOCIOLOGIA']),
  nota: z
    .string()
    .refine((value) => value.trim() !== '', {
      message: 'Nota obrigatoria',
    })
    .refine((value) => !isNaN(Number(value)), {
      message: 'A nota deve ser um número',
    })
    .transform((value) => Number(value))
    .refine((value) => value >= 0 && value <= 10, {
      message: 'A nota deve ser maior ou igual a 0 e menor ou igual a 10',
    }),
  criadoEm: z.date(),
  atualizadoEm: z.date(),
})

export const createResultadoSchema = resultadoSchema.omit({
  id: true,
  bimestre: true,
  criadoEm: true,
  atualizadoEm: true,
})
