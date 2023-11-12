import { NextTemplateHome } from './components/templates/NextTemplateHome'

import { items } from '../data'

export default async function Home() {
  return <NextTemplateHome items={items} />
}
