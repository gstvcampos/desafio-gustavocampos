import Card from '@/components/Card'
import { Resultado } from '@/interfaces/interfaces'

export default async function Home() {
  const response = await fetch('http://127.0.0.1:3000/resultados/', {
    cache: 'no-store',
  })

  const resultados: Resultado[] = await response.json()

  const bimestres = ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"]

  return (
    <main className="bg-background text-text-primary flex min-h-screen flex-col items-center p-24">
      <div>
        {bimestres.map((bim, idx) => 
        <div key={idx}>
          <div className='flex justify-between'>
            <h2>Bimestre {idx+1}</h2>
            <button>adicionar</button>
          </div>
          <ul className='flex p-10 flex-wrap'>
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
