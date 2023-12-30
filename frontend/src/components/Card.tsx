import { Resultado } from "@/interfaces/interfaces";
import DeleteButton from "./DeleteButton";

export default function Card({resultado}: {resultado: Resultado}){
  const bgMap = {
    'BIOLOGIA': 'bg-card-bio',
    'ARTES': 'bg-card-art',
    'GEOGRAFIA': 'bg-card-geo',
    'SOCIOLOGIA': 'bg-card-soc',
  }
  const bg = bgMap[resultado.disciplina];

  return(
    <li className="flex">
      <div className={`flex flex-col p-4 gap-2 w-36 h-36 rounded-2xl ${bg}`}>
        <p>{resultado.disciplina}</p>
        <p>{new Date(resultado.criadoEm).toLocaleDateString()}</p>
        <p className="bg-opacity-70 bg-background">{resultado.nota}</p>        
      </div>
      <DeleteButton id={resultado.id}/>
    </li>
  )
}