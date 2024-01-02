'use client'

import handleDelete from '@/actions/handleDelete'
import { DialogContext } from '@/contexts/DialogContext'
import useKeyDown from '@/hooks/useKeyDown'
import { useOutClickOutside } from '@/hooks/useOutClickOutside'
import Image from 'next/image'
import { useContext } from 'react'
import { toast } from 'sonner'

export default function DeleteModal({ id }: { id: string }) {
  const { openDelete, toggleDelete } = useContext(DialogContext)
  const modalRef = useOutClickOutside(toggleDelete)
  const buttonRef = useKeyDown(toggleDelete)

  const handleDel = async () => {
    try {
      await handleDelete(id)
      toggleDelete()
      toast.success('Resultado deletado')
    } catch (error) {
      toast.error('Erro no fetch, tente novamente mais tarde')
    }
  }

  return (
    <>
      {openDelete && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-80">
          <div className="flex min-h-screen items-center justify-center">
            <div
              ref={modalRef}
              className="bg-background py-4 px-12 max-w-[calc(100%-40px)]"
            >
              <header className="flex items-center justify-between">
                <h3 className="text-3xl">Excluir nota</h3>
                <button onClick={toggleDelete} ref={buttonRef}>
                  <Image
                    priority={true}
                    src="x.svg"
                    width={32}
                    height={32}
                    alt="icone fechar"
                  />
                </button>
              </header>
              <p className="my-8 text-center text-lg">
                Tem certeza de que deseja excluir esta nota?
              </p>
              <footer className="flex justify-end">
                <button
                  className="bg-button rounded-xl py-2 px-8"
                  onClick={handleDel}
                >
                  <span className="text-black font-semibold">Confirmar</span>
                </button>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
