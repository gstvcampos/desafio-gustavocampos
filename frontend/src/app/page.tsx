import CreateButton from '@/components/Buttons/CreateButton'
import Card from '@/components/Card'
import CreateModal from '@/components/Modals/CreateModal'
import { DialogProvider } from '@/contexts/DialogContext'
import { Resultado } from '@/interfaces/interfaces'

async function getResultads() {
  const res = await fetch('https://resultados-sxpu.onrender.com/resultados/', {
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
      <div className="mx-auto w-full max-w-screen-lg py-16 px-2.5 md:px-20">
        {bimestres.map((SelectBim, idx) => (
          <div key={idx}>
            <div className="flex justify-between px-4">
              <h2 className="text-lg font-medium">Bimestre {idx + 1}</h2>
              <DialogProvider>
                <CreateButton />
                <CreateModal
                  bimestre={SelectBim}
                  title={`Bimestre ${idx + 1}`}
                />
              </DialogProvider>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 px-4 md:px-0 md:gap-2">
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
