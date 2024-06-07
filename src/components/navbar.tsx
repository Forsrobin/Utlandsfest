'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './theme-switch'

interface LinkI {
  name: string
  href: string
}

const links: LinkI[] = [
  // { name: 'About', href: '/#about' },
  // { name: 'Why us', href: '/#why-us' },
  // { name: 'Contact', href: '/#contact' },
]

const LogoIcon = () => {
  return (
    <Link href='/#home' className='ml-6  hover:opacity-80 transition-all items-center lg:ml-0 lg:flex'>
      <h1 className='text-2xl font-bold text-primary'>Utlandsfest</h1>
    </Link>
  )
}

export const Navbar = () => {
  return (
    <header className=' fixed bg-background shadow-lg lg:shadow-none md:bg-transparent z-10 flex p-4 lg:p-5 w-full  shrink-0 items-center px-4 md:px-6'>
      <Sheet>
        {/* <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger> */}
        <SheetContent side='left' className='flex flex-col gap-4 justify-start '>
          <h1 className='text-2xl font-bold text-primary'>Utlandsfest</h1>
          <hr />
          <div className='flex flex-col gap-4 items-start w-full'>
            {links.map((link) => (
              <Link key={link.name} href={link.href} passHref className='w-full'>
                <SheetClose className=' w-1/2 p-3 rounded-md hover:bg-primary/10 cursor-pointer transition-all flex'>{link.name}</SheetClose>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <LogoIcon />
      <nav className='ml-auto items-center hidden  lg:flex gap-6'>
        {links.map((link) => (
          <Link key={link.name} href={link.href} passHref>
            <div className='border-b border-transparent  hover:border-primary p-2 transition-all cursor-pointer'>{link.name}</div>
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  )
}
