'use client'

import { DialogContext } from '@/contexts/DialogContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function DeleteButton() {
  const { toggleDelete } = useContext(DialogContext)

  return (
    <button
      className="inline-block flex-shrink-0 h-8 w-10 p-1"
      onClick={toggleDelete}
    >
      <Image
        priority={true}
        src="trash.svg"
        width={32}
        height={32}
        alt="icone lixeira"
      />
    </button>
  )
}
