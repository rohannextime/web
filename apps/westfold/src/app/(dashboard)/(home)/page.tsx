import '@/app/global.css'
import { Button } from '@rohan/ui'
import { css } from 'styled-system/css'
export default function Home() {
  return (
    <main>
      <div className={css({ color: 'primary' })}>
        <Button>Click me</Button>
      </div>
    </main>
  )
}
