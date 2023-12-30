import Image from 'next/image'

export default function DeleteButton({id}: { id: string}){
  return (
    <button> 
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