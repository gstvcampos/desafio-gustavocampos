import { cn } from '@/lib/utils'
import { UseFormRegister } from 'react-hook-form'

export default function DisciplinaButton({
  nome,
  style,
  register,
}: {
  nome: string
  style: string
  register: UseFormRegister<{
    disciplina: 'BIOLOGIA' | 'ARTES' | 'GEOGRAFIA' | 'SOCIOLOGIA'
    nota: number
  }>
}) {
  const valor = nome.toUpperCase()
  return (
    <div key={nome} className="flex">
      <input
        {...register('disciplina')}
        type="radio"
        value={valor}
        id={valor}
        className="hidden peer"
      />
      <label
        htmlFor={valor}
        className={cn(
          'rounded-xl py-2 w-32 bg-opacity-20 text-center cursor-pointer hover:bg-opacity-100 peer-checked:bg-opacity-100',
          style,
        )}
      >
        <span className="font-medium text-lg">{nome}</span>
      </label>
    </div>
  )
}
