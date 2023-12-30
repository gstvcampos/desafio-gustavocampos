import { Resultado } from '@/interfaces/interfaces'

export default async function Home() {
  const response = await fetch('http://127.0.0.1:3000/resultados/', {
    cache: 'no-store',
  })

  const resultados: Resultado[] = await response.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
