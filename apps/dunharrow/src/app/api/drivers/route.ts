const delay = () => new Promise(resolve => setTimeout(resolve, 3000))
export async function GET() {
  await delay()
  return Response.json({ message: 'Teste' })
}
