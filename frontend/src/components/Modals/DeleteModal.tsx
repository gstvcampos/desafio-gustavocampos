'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function DeleteModal({ id }: { id: string }) {
  const { openDelete, toggleDelete } = useContext(DialogContext)

  const handleDelete = async (id: string) => {
    await fetch(`http://127.0.0.1:3000/resultados/${id}`, {
      method: 'DELETE',
    })
    window.location.reload()
  }

  return (
    <>
      {openDelete && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-900 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-300">
                Excluir nota
              </h3>
              <p className="mb-4 text-center text-sm text-gray-300">
                Tem certeza de que quer excluir essa nota?
              </p>
              <div className="flex justify-between">
                <button
                  className="text-white:bg-red-900 rounded bg-red-600 px-4 py-2"
                  onClick={toggleDelete}
                >
                  Cancelar
                </button>
                <button
                  className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-900"
                  onClick={() => handleDelete(id)}
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
