'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function CreateModal() {
  const { openCreate, toggleCreate } = useContext(DialogContext)

  return (
    <>
      {openCreate && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-900 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-300">
                Bimestre
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
