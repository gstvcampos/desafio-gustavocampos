'use server'

import { CreateResultado } from '@/interfaces/interfaces'
import { getErrorMessage } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export default async function handleCreate(formData: CreateResultado) {
  try {
    const res = await fetch(
      'https://desafio-gustavocampos.onrender.com/resultados/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      },
    )
    if (res.status === 409) {
      throw new Error('Nota já lançada')
    }
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }

  revalidatePath('/')
}
