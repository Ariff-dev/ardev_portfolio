import Image from 'next/image'
import { pixel } from '@/helpers/index'

export default function Home() {
  return (
    <main className=''>
      <h1>Hola mundo</h1>
      <Image src={`${pixel}coffee-alt.svg`} alt='Odi' width={24} height={24} />
    </main>
  )
}
