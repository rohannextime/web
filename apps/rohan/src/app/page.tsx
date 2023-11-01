import { Button } from '@nextime-ui/react'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://swapi.dev/api/people/1/')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <main>
      <Button>Teste</Button>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  )
}
