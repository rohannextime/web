import { Button } from '@rohan/ui'

import { api } from '@/data/api'
import { HomeProps } from '@/data/types/home'

async function getHomeData(): Promise<HomeProps> {
  const response = await api('/drivers')
  const message = await response.json()
  return message
}
export default async function Home() {
  const { message } = await getHomeData()
  console.log(message)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>{message}</Button>
    </main>
  )
}
