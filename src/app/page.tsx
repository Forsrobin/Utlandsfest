import { Footer } from '@/components/Footer'
import { EventDisplay } from '@/components/event-display'
import Hero from '@/components/hero'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className='h-screen min-h-screen flex flex-col'>
      <Navbar />
      <Hero />
      <EventDisplay />
      <Footer />
    </main>
  )
}
