import { Container, Section } from '@/components/craft'
import Balancer from 'react-wrap-balancer'
import { Button } from './ui/button'
import { H1 } from './typography/h1'
import Link from 'next/link'
import GridPattern from './ui/grid-pattern'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className={cn('relative  flex items-end justify-end')}>
      <Container className='flex flex-col  justify-end mt-40 text-center gap-3'>
        <H1>Hitta nästa utlandsfest</H1>
        <h3 className='text-muted-foreground'>
          <Balancer>Med <i>Utlandsfest.nu</i> kan du enkelt och snabbt hitta var och när nästa utlandsfest kommer att ske.</Balancer>
        </h3>
        <div className='mx-auto !mt-8 flex items-center gap-2'>
          <Button asChild>
            <Link href='#event'>Bläddra</Link>
          </Button>
          <Button variant={'outline'} asChild>
            <Link href='#footer'>Mer info</Link>
          </Button>
        </div>
      </Container>
      <GridPattern
        width={40}
        height={40}
        cx={1}
        cy={1}
        cr={1}
        className={cn('[mask-image:linear-gradient(to_bottom_left,background,transparent,transparent)]')}
      />
      <GridPattern
        width={40}
        height={40}
        cx={1}
        cy={1}
        cr={1}
        className={cn('[mask-image:linear-gradient(to_bottom_right,background,transparent,transparent)]')}
      />
    </div>
  )
}

export default Hero
