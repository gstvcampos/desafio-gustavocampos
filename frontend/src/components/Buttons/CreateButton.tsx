'use client'

import { DialogContext } from '@/contexts/DialogContext'
import Image from 'next/image'
import { useContext } from 'react'
import CreateModal from '../Modals/CreateModal'

export default function CreateButton() {
  const { toggleCreate } = useContext(DialogContext)

  return(
    <>
      <button className='bg-orange-500' onClick={toggleCreate}>
        <Image
          priority={true}
          src="plus.svg"
          width={32}
          height={32}
          alt="icone mais"
        />
      </button>
      <CreateModal/>
    </>
  )
}