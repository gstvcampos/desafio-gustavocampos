'use client'

import { DialogContext } from '@/contexts/DialogContext'
import Image from 'next/image'
import { useContext } from 'react'
import DeleteModal from '../Modals/DeleteModal'

export default function DeleteButton({ id }: { id: string }) {
  const { toggleDelete } = useContext(DialogContext)

  return (
    <>
      <button className="h-8 p-1" onClick={toggleDelete}>
        <Image
          priority={true}
          src="trash.svg"
          width={32}
          height={32}
          alt="icone lixeira"
        />
      </button>
      <DeleteModal id={id} />
    </>
  )
}
