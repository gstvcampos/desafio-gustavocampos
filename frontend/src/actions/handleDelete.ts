'use server'

import { getErrorMessage } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export default async function handleDelete(id: string) {
  try {
    await fetch(`https://desafio-gustavocampos.onrender.com/resultados/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }

  revalidatePath('/')
}
