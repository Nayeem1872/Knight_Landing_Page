export const metadata = {
  title: 'KNIGHT',
  description: 'KNIGHT',
}

import Hero from '@/components/hero'
import Features from '@/components/features'

import Zigzag from '@/components/zigzag'

import ContactUs from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
   <ContactUs/>
      {/* <Newsletter /> */}
    </>
  )
}
