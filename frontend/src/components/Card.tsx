import { DialogProvider } from '@/contexts/DialogContext'
import { Resultado } from '@/interfaces/interfaces'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import DeleteButton from './Buttons/DeleteButton'

export default function Card({ resultado }: { resultado: Resultado }) {
  const bgColorMap = {
    BIOLOGIA: 'bg-card-bio',
    ARTES: 'bg-card-art',
    GEOGRAFIA: 'bg-card-geo',
    SOCIOLOGIA: 'bg-card-soc',
  }
  const bgColor = bgColorMap[resultado.disciplina]

  let notaColor = '';
  if (resultado.nota < 6) {
    notaColor = 'text-note-low';
  } else if (resultado.nota < 8) {
    notaColor = 'text-note-average';
  } else {
    notaColor = 'text-note-high';
  }

  return (
    <li className="flex p-1">
      <div className={cn('flex flex-col justify-between w-40 h-36 py-4 rounded-2xl',
        bgColor,
      )}>
        <div className='flex flex-col px-4'>
          <span>{resultado.disciplina}</span>
          <span>{new Date(resultado.criadoEm).toLocaleDateString()}</span>
        </div>
        <div className={cn("inline-flex items-center bg-opacity px-4 py-1 gap-2", notaColor)}>
          <Image
          priority={true}
          src="chart.svg"
          width={16}
          height={16}
          alt="icone fechar"
          />
          <span className='text-xs'>Nota: {resultado.nota}</span>
        </div>
      </div>
      <DialogProvider>
        <DeleteButton id={resultado.id} />
      </DialogProvider>
    </li>
  )
}
