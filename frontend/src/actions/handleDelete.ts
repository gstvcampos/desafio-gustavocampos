'use server'

import { revalidatePath } from 'next/cache'

export default async function handleDelete(id: string) {
  const res = await fetch(
    `https://resultados-sxpu.onrender.com/resultados/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  if (!res.ok) {
    throw new Error('Falha no fetch.')
  }

  revalidatePath('/')
}
