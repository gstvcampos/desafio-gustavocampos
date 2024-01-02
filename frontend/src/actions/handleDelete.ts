'use server'

import { revalidatePath } from 'next/cache'

export default async function handleDelete(id: string) {
  const res = await fetch(`http://127.0.0.1:3000/resultados/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Falha no fetch.')
  }

  revalidatePath('/')
}
