import { createResultadoSchema, resultadoSchema } from '@/schemas/schemas'
import { z } from 'zod'

export type Resultado = z.infer<typeof resultadoSchema>
export type CreateResultado = z.infer<typeof createResultadoSchema>
