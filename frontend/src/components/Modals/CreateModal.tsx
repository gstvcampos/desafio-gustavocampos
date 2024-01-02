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
  const handleClose = () => {
    toggleCreate()
    reset()
  }
  const { openCreate, toggleCreate } = useContext(DialogContext)
  const modalRef = useOutClickOutside(handleClose)
  const buttonRef = useKeyDown(handleClose)

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
    const res = await handleCreate(newData)
    if (res?.error) {
      toast.error(res.error)
    } else {
      reset()
      toggleCreate()
      toast.success('Nota lançada com sucesso')
    }
  }

  return (
    <>
      {openCreate && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-80">
          <div className="flex min-h-screen items-center justify-center">
            <div
              ref={modalRef}
              className="bg-background py-4 px-12 max-w-[calc(100%-40px)]"
            >
              <header className="flex items-center justify-between py-8">
                <h2 className="text-3xl">{title}</h2>
                <button ref={buttonRef} onClick={handleClose}>
                  <Image
                    priority={true}
                    src="x.svg"
                    width={32}
                    height={32}
                    alt="icone fechar"
                  />
                </button>
              </header>
              <form
                onSubmit={handleSubmit(handleAdd)}
                className="flex flex-col"
              >
                <span className="text-lg pb-1">Disciplina</span>
                <div className="flex gap-4 flex-wrap">
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
                <label className="text-sm pt-4 pb-1">Nota</label>
                <input
                  {...register('nota')}
                  type="text"
                  className="px-6 focus:outline-none w-20 text-text-secondary py-2 bg-background rounded-xl border-border border-[1px]"
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
                  <span className="text-text-black font-semibold">
                    Confirmar
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
