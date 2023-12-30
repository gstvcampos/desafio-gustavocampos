import Card from '@/components/Card'
import DeleteButton from '@/components/DeleteButton'
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
        {bimestres.map((bi, idx) => 
        <div key={idx}>
          <h2>Bimestre {idx+1}</h2>
          <button>adicionar</button>
          <ul className='flex p-10'>
            {resultados.map((resultado) => resultado.bimestre === bi &&
            <li key={resultado.id} className='p-4 bg-white m-4'>
              <Card resultado={resultado}/>
              <DeleteButton id={resultado.id}/>
            </li>)}
          </ul>
        </div>
        )}
      </div>
    </main>
  )
}
