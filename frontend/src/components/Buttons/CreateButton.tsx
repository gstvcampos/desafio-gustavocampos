'use client'

import { DialogContext } from '@/contexts/DialogContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function CreateButton() {
  const { toggleCreate } = useContext(DialogContext)

  return (
    <button
      className="bg-button flex font-semibold items-center px-4 py-1 rounded-xl"
      onClick={toggleCreate}
    >
      <span className="text-black px-2 hidden md:block">Lançar nota</span>
      <Image
        priority={true}
        src="plus.svg"
        width={32}
        height={32}
        alt="icone mais"
      />
    </button>
  )
}
