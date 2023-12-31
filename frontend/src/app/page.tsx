import CreateButton from '@/components/Buttons/CreateButton'
import Card from '@/components/Card'
import { DialogProvider } from '@/contexts/DialogContext'
import { Resultado } from '@/interfaces/interfaces'

export default async function Home() {
  const response = await fetch('http://127.0.0.1:3000/resultados/', {
    cache: 'no-store',
  })

  const resultados: Resultado[] = await response.json()

  const bimestres = ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"]

  return (
    <main className="bg-background text-text-primary min-h-screen min-w-full">
      <div className="py-16 max-w-4xl m-auto px-6">
        {bimestres.map((bim, idx) => 
        <div key={idx}>
          <div className='flex justify-between'>
            <h2>Bimestre {idx+1}</h2>
            <DialogProvider>
              <CreateButton/>
            </DialogProvider>
          </div>
          <ul className='flex flex-wrap'>
            {resultados.map((resultado) => (resultado.bimestre === bim && 
              <Card key={resultado.id} resultado={resultado}/>
            ))}
          </ul>
        </div>
        )}
      </div>
    </main>
  )
}
