import { DialogProvider } from '@/contexts/DialogContext'
import { Resultado } from '@/interfaces/interfaces'
import { cn } from '@/lib/utils'
import DeleteButton from './Buttons/DeleteButton'
import { ChartIcon } from './ChartIcon'
import DeleteModal from './Modals/DeleteModal'

function getNotaColor(nota: number) {
  return nota < 6
    ? 'text-note-low'
    : nota < 8
      ? 'text-note-average'
      : 'text-note-high'
}

export default function Card({ resultado }: { resultado: Resultado }) {
  const bgColorMap = {
    BIOLOGIA: 'bg-card-bio',
    ARTES: 'bg-card-art',
    GEOGRAFIA: 'bg-card-geo',
    SOCIOLOGIA: 'bg-card-soc',
  }
  const bgColor = bgColorMap[resultado.disciplina]
  const notaColor = getNotaColor(resultado.nota)
  const formattedDate = new Date(resultado.criadoEm).toLocaleDateString()

  return (
    <li className="inline-block">
      <div className="flex">
        <div
          className={cn(
            'flex flex-col justify-between w-[calc(100%-40px)] max-w-40 h-36 py-4 rounded-2xl mb-8',
            bgColor,
          )}
        >
          <div className="flex flex-col px-4">
            <span className="text-lg font-medium">{resultado.disciplina}</span>
            <span className="text-xs">{formattedDate}</span>
          </div>
          <div
            className={cn(
              'inline-flex items-center bg-opacity px-4 py-1 gap-2',
              notaColor,
            )}
          >
            <ChartIcon />
            <span className="text-xs">Nota: {resultado.nota}</span>
          </div>
        </div>
        <DialogProvider>
          <DeleteButton />
          <DeleteModal id={resultado.id} />
        </DialogProvider>
      </div>
    </li>
  )
}
