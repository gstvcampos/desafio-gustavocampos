'use client'

import { ReactNode, createContext, useState } from 'react'

interface DialogContextType {
  openDelete: boolean
  toggleDelete: () => void
  openCreate: boolean
  toggleCreate: () => void
}

export const DialogContext = createContext({} as DialogContextType)

export function DialogProvider({ children }: { children: ReactNode }) {
  const [openDelete, setOpenDelete] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  function toggleDelete() {
    setOpenDelete((state) => !state)
  }

  function toggleCreate() {
    setOpenCreate((state) => !state)
  }

  return (
    <DialogContext.Provider
      value={{
        openDelete,
        toggleDelete,
        openCreate,
        toggleCreate,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}
