import { Button } from '@rohan/ui'

async function getHomeData() {
  const delay = () => new Promise(resolve => setTimeout(resolve, 3000))
  await delay()
  return {
    title: 'Doideira'
  }
}
export default async function Home() {
  const { title } = await getHomeData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{title}</h1>
      <Button>Click me</Button>
    </main>
  )
}
