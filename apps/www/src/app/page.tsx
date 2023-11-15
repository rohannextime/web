'use client'
import { items } from '../data'
import dynamic from 'next/dynamic'

const NextTemplateHome = dynamic(() => import('@nextime-ui/templates').then(mod => mod.NextTemplateHome), { ssr: false })

export default function HomePage() {
  return <NextTemplateHome items={items} />
}
