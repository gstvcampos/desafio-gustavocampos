'use client'

import handleCreate from '@/actions/handleCreate'
import { DialogContext } from '@/contexts/DialogContext'
import useKeyDown from '@/hooks/useKeyDown'
import { useOutClickOutside } from '@/hooks/useOutClickOutside'
import { CreateResultado } from '@/interfaces/interfaces'
import { createResultadoSchema } from '@/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import DisciplinaButton from '../Buttons/DisciplinaButton'

export default function CreateModal({
  bimestre,
  title,
}: {
  bimestre: string
  title: string
}) {
  const { openCreate, toggleCreate } = useContext(DialogContext)
  const modalRef = useOutClickOutside(toggleCreate)
  const buttonRef = useKeyDown(toggleCreate)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateResultado>({ resolver: zodResolver(createResultadoSchema) })

  const handleAdd = async (data: CreateResultado) => {
    const newData = {
      ...data,
      bimestre,
    }
    try {
      await handleCreate(newData)
      toggleCreate()
      reset()
      toast.success('Resultado criado')
    } catch (error) {
      if (error instanceof Error) {
        reset()
        toast.error(error.message)
      }
    }
  }

  return (
    <>
      {openCreate && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div ref={modalRef} className="bg-background py-8 px-12">
              <header className="flex items-center justify-between">
                <h2 className="text-3xl">{title}</h2>
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
                <span className="text-lg py-6">Disciplina</span>
                <div className="flex gap-4">
                  <DisciplinaButton
                    nome={'Biologia'}
                    style={'bg-card-bio'}
                    register={register}
                  />
                  <DisciplinaButton
                    nome={'Artes'}
                    style={'bg-card-art'}
                    register={register}
                  />
                  <DisciplinaButton
                    nome={'Geografia'}
                    style={'bg-card-geo'}
                    register={register}
                  />
                  <DisciplinaButton
                    nome={'Sociologia'}
                    style={'bg-card-soc'}
                    register={register}
                  />
                </div>
                {errors.disciplina && (
                  <span className="text-xs text-red-600">
                    Selecione uma disciplina
                  </span>
                )}
                <label className="pb-2 text-sm">Nota</label>
                <input
                  {...register('nota')}
                  type="text"
                  className="px-4 w-20 text-text-secondary py-3 bg-background rounded-xl border-border border-[1px]"
                />
                {errors.nota && (
                  <span className="text-xs text-red-600">
                    {errors.nota.message}
                  </span>
                )}
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
