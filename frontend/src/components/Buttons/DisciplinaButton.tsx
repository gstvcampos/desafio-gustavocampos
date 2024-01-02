import { cn } from '@/lib/utils'

export default function DisciplinaButton({ nome, style, register }) {
  const valor = nome.toUpperCase()
  return (
    <div key={nome} className="flex items-center">
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
          'rounded-xl py-2 px-8 bg-opacity-20 cursor-pointer hover:bg-opacity-100 peer-checked:bg-opacity-100',
          style,
        )}
      >
        <span className="font-medium text-lg">{nome}</span>
      </label>
    </div>
  )
}
