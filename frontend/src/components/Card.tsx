import { DialogProvider } from "@/contexts/DialogContext";
import { Resultado } from "@/interfaces/interfaces";
import DeleteButton from "./Buttons/DeleteButton";

export default function Card({resultado}: {resultado: Resultado}){
  const bgMap = {
    'BIOLOGIA': 'bg-card-bio',
    'ARTES': 'bg-card-art',
    'GEOGRAFIA': 'bg-card-geo',
    'SOCIOLOGIA': 'bg-card-soc',
  }
  const bg = bgMap[resultado.disciplina];

  return(
    <li className="flex p-1">
      <div className={`flex flex-col w-40 h-36 rounded-2xl ${bg}`}>
        <p>{resultado.disciplina}</p>
        <p>{new Date(resultado.criadoEm).toLocaleDateString()}</p>
        <p className="bg-slate-500">{resultado.nota}</p>        
      </div>
      <DialogProvider>
        <DeleteButton id={resultado.id}/>
      </DialogProvider>
    </li>
  )
}
