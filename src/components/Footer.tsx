import React from 'react'
import { Container, Section } from './craft'
import { H4 } from './typography/h4'
import Balancer from 'react-wrap-balancer'
import { Muted } from './typography/muted'
import { H1 } from './typography/h1'

export const Footer = () => {
  return (
    <Section id='footer' className='bg-secondary'>
      <Container>
        <H1 className='mb-4'>Utlandsfest</H1>
        <footer className='flex flex-col lg:flex-row lg:p-4 gap-4 !p-0 '>
          <div className='lg:w-1/2 flex flex-col gap-4'>
            <div>
              <H4>Hitta Nästa Stora Utlandsfest med Utlandsfest.nu inom det kommande året</H4>
              <Muted>
                Välkommen till Utlandsfest.nu, din bästa källa för att hitta information om de hetaste student utlandsfesterna. Kolla in våra kommande
                event och planera din nästa festresa!
              </Muted>
            </div>
            <div>
              <H4>Varför Välja Utlandsfest.nu?</H4>
              <Muted>
                <Balancer>
                  Vi håller dig uppdaterad med de senaste eventen och festplatserna. Missar inte några kommande event! Planera din nästa utlandsfest
                  med oss och skapa minnen för livet!
                </Balancer>
              </Muted>
            </div>
          </div>
          <div className='flex lg:w-1/2  flex-col gap-2 justify-between'>
            <div>
              <H4>Vill ni synas här eller tas bort?</H4>
              <p className='text-sm text-gray-500'>
                <Balancer>
                  Om vi har råkat skriva fel address, datum eller info så kan ni kontakta{' '}
                  <a href='mailto:robin@aviliax.com' className='text-blue-400'>
                    robin@aviliax.com
                  </a>{' '}
                  för att göra ändringar. Om ni vill att erat event ska synas här, kontakta då{' '}
                  <a href='mailto:robin@aviliax.com' className='text-blue-400'>
                    robin@aviliax.com
                  </a>{' '}
                  för att läggas till i listan.
                </Balancer>
              </p>
            </div>
            <div>
              <H4>Copyright © Utlandsfest.nu {new Date().getFullYear()}</H4>
              <p className='text-sm text-gray-500'>
                <Balancer>
                  Open source tillgängligt här:{' '}
                  <a className='text-blue-400' href='https://github.com/Forsrobin/Utlandsfest'>
                    https://github.com/Forsrobin/Utlandsfest
                  </a>
                </Balancer>
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  )
}
