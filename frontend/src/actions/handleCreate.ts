'use server'

import { CreateResultado } from '@/interfaces/interfaces'
import { revalidatePath } from 'next/cache'

export default async function handleCreate(formData: CreateResultado) {
  const res = await fetch('http://127.0.0.1:3000/resultados/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  if (!res.ok) {
    if (res.status === 409) {
      throw new Error('Nota já lançada')
    } else {
      throw new Error('Falha no fetch.')
    }
  }

  revalidatePath('/')
}
