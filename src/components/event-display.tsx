'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { IEvent, events } from '@/data/events'
import { getNextTwelevemonths } from '@/lib/utils'
import { FC, useState } from 'react'
import Balancer from 'react-wrap-balancer'
import { Container, Section } from './craft'
import { H2 } from './typography/h2'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ScrollArea } from './ui/scroll-area'
import { SearchIcon } from 'lucide-react'

const getFormatedMonth = (month: Date) => {
  return new Intl.DateTimeFormat('sv-SE', { month: 'long' }).format(month) + ' ' + month.getFullYear()
}

interface EventsProps {
  data: IEvent[]
}

const Events: FC<EventsProps> = ({ data }) => {
  const month = data[0].date

  return (
    <div className='flex flex-row  flex-wrap gap-4'>
      {data.map((event, index) => (
        <Card key={index} className='w-full lg:w-96'>
          <CardHeader className='flex flex-row gap-4 items-center'>
            {event.logo && <img src={event.logo} alt={event.name} className='w-10 h-10' />}
            <div className='flex flex-col gap-2'>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{event.date.toDateString() + ' at ' + event.location}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className='gap-4 flex flex-col'>
            {event.url && <a className='text-blue-500 underline' href={event.url} target='_blank' rel='noreferrer'>{event.url}</a>}
            <ScrollArea className='h-[200px] pr-4'>
              <Balancer>{event.description}</Balancer>
            </ScrollArea>
          </CardContent>
          {/* <CardFooter>
            <p>{event.description}</p>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  )
}

export const EventDisplay = () => {
  const [search, setSearch] = useState<string>('')
  const data = events

  const filterData = (month: Date) => {
    const filtered_data = data.filter((event) => {
      return event.name.toLowerCase().includes(search.toLowerCase())
    })

    return filtered_data.filter((event) => event.date.getMonth() === month.getMonth() && event.date.getFullYear() == month.getFullYear())
  }

  return (
    <Section id='event' className='grow'>
      <Container>
        <div className='flex flex-col gap-2'>
          <div className='relative grid w-fit max-w-sm items-center gap-1.5 mb-10'>
            <Label htmlFor='email'>Sök</Label>
            <div className='flex items-center'>
              <Input onChange={(e) => setSearch(e.target.value)} type='email' id='email' placeholder='Utlandsfest' />
              <Label htmlFor='email'>
                <SearchIcon className='right-8 relative bg-background p-1' size={24} />
              </Label>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          {getNextTwelevemonths().map(
            (month, index) =>
              filterData(month).length > 0 && (
                <div key={index} className='flex flex-col gap-1'>
                  <H2 className='capitalize'>{getFormatedMonth(month)}</H2>
                  <Events data={filterData(month)} />
                </div>
              )
          )}
        </div>
      </Container>
    </Section>
  )
}
