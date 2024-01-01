'use client'

import { DialogContext } from '@/contexts/DialogContext'
import useKeyDown from '@/hooks/useKeyDown'
import { useOutClickOutside } from '@/hooks/useOutClickOutside'
import { CreateResultado } from '@/interfaces/interfaces'
import { cn } from '@/lib/utils'
import { createResultadoSchema } from '@/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const numberBim: Record<string, number> = {
  PRIMEIRO: 1,
  SEGUNDO: 2,
  TERCEIRO: 3,
  QUARTO: 4,
}

const disciplinas = [
  { nome: 'Biologia', style: 'bg-card-bio', valor: 'BIOLOGIA' },
  { nome: 'Artes', style: 'bg-card-art', valor: 'ARTES' },
  { nome: 'Geografia', style: 'bg-card-geo', valor: 'GEOGRAFIA' },
  { nome: 'Sociologia', style: 'bg-card-soc', valor: 'SOCIOLOGIA' },
]

export default function CreateModal({ bimestre }: { bimestre: string }) {
  const { openCreate, toggleCreate } = useContext(DialogContext)
  const modalRef = useOutClickOutside(toggleCreate)
  const buttonRef = useKeyDown(toggleCreate)
  const title = `Bimestre ${numberBim[bimestre]}`

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateResultado>({ resolver: zodResolver(createResultadoSchema) })

  const handleAdd = async (data: CreateResultado) => {
    console.log(data)
    createResultadoSchema.parse(data)
    try {
      // await addResultado()
      toggleCreate()
      toast.success('Resultado criado')
    } catch (error) {
      toast.error('Erro, tente novamente mais tarde')
    }
  }

  return (
    <>
      {openCreate && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div ref={modalRef} className="bg-background py-8 px-12">
              <header className="flex items-center justify-between">
                <h3 className="text-3xl">{title}</h3>
                <button ref={buttonRef} onClick={toggleCreate}>
                  <Image
                    priority={true}
                    src="x.svg"
                    width={32}
                    height={32}
                    alt="icone fechar"
                  />
                </button>
              </header>
              <form onSubmit={handleSubmit(handleAdd)}>
                {errors.bimestre && (
                  <p className="text-xs text-red-600">
                    {errors.bimestre.message}
                  </p>
                )}
                <h3 className="text-lg py-6">Disciplina</h3>
                <div className="flex gap-4">
                  {disciplinas.map((disc) => (
                    <div key={disc.nome} className="flex items-center">
                      <label
                        htmlFor={disc.valor}
                        className={cn(
                          'rounded-xl py-2 px-8 bg-opacity-20 cursor-pointer hover:bg-opacity-100',
                          disc.style,
                        )}
                      >
                        <input
                          {...register('disciplina')}
                          type="radio"
                          value={disc.valor}
                          id={disc.valor}
                          className="hidden"
                        />
                        <span className="font-medium text-lg">{disc.nome}</span>
                      </label>
                    </div>
                  ))}
                </div>
                {errors.disciplina && (
                  <p className="text-xs text-red-600">
                    Selecione uma disciplina
                  </p>
                )}
                <div className="flex flex-col items-start py-6">
                  <label className="pb-2 text-sm">Nota</label>
                  <input
                    {...register('nota')}
                    type="number"
                    className="px-4 w-20 text-text-secondary py-3 bg-background rounded-xl border-border border-[1px]"
                  />
                  {errors.nota && (
                    <p className="text-xs text-red-600">
                      {errors.nota.message}
                    </p>
                  )}
                </div>
                <button
                  className="bg-button rounded-xl py-2 px-8 self-end"
                  type="submit"
                >
                  <span className="text-black font-semibold">Confirmar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
