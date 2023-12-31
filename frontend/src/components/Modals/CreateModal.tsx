'use client'

import { DialogContext } from '@/contexts/DialogContext'
import useKeyDown from '@/hooks/useKeyDown'
import { useOutClickOutside } from '@/hooks/useOutClickOutside'
import Image from 'next/image'
import { useContext } from 'react'

export default function CreateModal() {
  const { openCreate, toggleCreate } = useContext(DialogContext)
  const modalRef = useOutClickOutside(toggleCreate)
  const buttonRef = useKeyDown(toggleCreate)


  return (
    <>
      {openCreate && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div ref={modalRef} className="bg-background py-8 px-12">
              <header className="flex items-center justify-between">
                <h3 className="text-3xl">Bimestre</h3>
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
              <h3 className="text-lg py-6">Disciplina</h3>
              <div className="flex gap-4">
                <button className="rounded-xl py-2 px-8 bg-card-bio">
                  <span className="font-semibold">Biologia</span>
                </button>
                <button className="rounded-xl py-2 px-8 bg-card-art">
                  <span className="font-semibold">Artes</span>
                </button>
                <button className="rounded-xl py-2 px-8 bg-card-geo">
                  <span className="font-semibold">Geografia</span>
                </button>
                <button className="rounded-xl py-2 px-8 bg-card-soc">
                  <span className="font-semibold">Sociologia</span>
                </button>
              </div>
              <div className="flex flex-col items-start py-6">
                <label className="pb-2 text-sm">Nota</label>
                <input
                  type="text"
                  className="px-4 w-20 text-text-secondary py-3 bg-background rounded-xl border-border border-[1px]"
                />
              </div>
              <footer className="flex justify-end">
                <button className="bg-button rounded-xl py-2 px-8">
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
