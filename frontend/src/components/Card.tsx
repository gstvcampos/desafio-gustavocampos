import { Resultado } from "@/interfaces/interfaces";

export default function Card({resultado}: {resultado: Resultado}){
  return(
    <div className="bg-card-art">
      <p>{resultado.disciplina}</p>
      <p>{new Date(resultado.criadoEm).toLocaleDateString()}</p>
      <p>{resultado.nota}</p>
    </div>
  )
}