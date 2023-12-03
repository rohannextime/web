export async function GET() {
  console.log('api chamada aqui')
  return Response.json({ message: 'Teste' })
}
