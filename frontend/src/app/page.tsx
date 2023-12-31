import CreateButton from '@/components/Buttons/CreateButton'
import Card from '@/components/Card'
import { DialogProvider } from '@/contexts/DialogContext'
import { Resultado } from '@/interfaces/interfaces'

export default async function Home() {
  const response = await fetch('http://127.0.0.1:3000/resultados/', {
    cache: 'no-store',
  })

  const resultados: Resultado[] = await response.json()

  const bimestres = ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-screen-xl py-16 px-2.5 md:px-20">
        {bimestres.map((bim, idx) => (
          <div key={idx}>
            <div className="flex justify-between">
              <h2 className="text-lg font-medium">Bimestre {idx + 1}</h2>
              <DialogProvider>
                <CreateButton />
              </DialogProvider>
            </div>
            <ul className="flex flex-wrap py-8">
              {resultados.map(
                (resultado) =>
                  resultado.bimestre === bim && (
                    <Card key={resultado.id} resultado={resultado} />
                  ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
