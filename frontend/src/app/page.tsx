import CreateButton from '@/components/Buttons/CreateButton'
import Card from '@/components/Card'
import { DialogProvider } from '@/contexts/DialogContext'
import { Resultado } from '@/interfaces/interfaces'

async function getResultads() {
  const res = await fetch('http://127.0.0.1:3000/resultados/', {
    cache: 'no-store',
  })
  return res.json()
}

export default async function Home() {
  const resultados: Resultado[] = await getResultads()
  const bimestres = ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']
  const disciplinas = ['BIOLOGIA', 'ARTES', 'GEOGRAFIA', 'SOCIOLOGIA']

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-screen-xl py-16 px-2.5 md:px-20">
        {bimestres.map((SelectBim, idx) => (
          <div key={idx}>
            <div className="flex justify-between">
              <h2 className="text-lg font-medium">Bimestre {idx + 1}</h2>
              <DialogProvider>
                <CreateButton bimestre={SelectBim} />
              </DialogProvider>
            </div>
            <ul className="flex flex-wrap py-8">
              {disciplinas.map((SelectDis) =>
                resultados
                  .filter(
                    (resultado) =>
                      resultado.bimestre === SelectBim &&
                      resultado.disciplina === SelectDis,
                  )
                  .map((res) => <Card key={res.id} resultado={res} />),
              )}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
