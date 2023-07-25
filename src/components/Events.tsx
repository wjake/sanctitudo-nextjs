'use client'

// import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import { toast } from './ui/use-toast'
import { EventItem, Server } from 'raid-helper'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { Skeleton } from './ui/skeleton'
import { formatDistanceToNowStrict } from 'date-fns'

function EventsItem({ eventItem }: { eventItem: EventItem }) {
  const { push } = useRouter()
  return (
    <div
      className='cursor-pointer items-center space-x-4 rounded p-3 ring-1 ring-zinc-500/20 hover:ring-zinc-400 dark:bg-slate-800 dark:ring-slate-800'
      onClick={(e) => push(`/events/${eventItem.id}`)}>
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <h1 className='line-clamp-1 overflow-hidden text-ellipsis text-sm font-semibold dark:text-cyan-500'>
            {eventItem.title}
          </h1>
        </div>
        <Separator />
        <div className='flex justify-between text-sm font-light'>
          <p className=''>{eventItem.leaderName}</p>
          <p className=''>
            {formatDistanceToNowStrict(eventItem.startTime * 1000, {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Events() {
  const { data, isLoading, error } = useSWR('/api/events', fetcher)

  if (error) {
    toast({
      title: 'There was a problem.',
      description: 'There was a problem fetching events data from RAID-HELPER.',
      variant: 'destructive',
    })
    console.log(error)
  }
  if (isLoading) return <>Loading...</>

  return (
    <>
      {isLoading ? (
        <div className='cursor-pointer rounded text-center ring-1 ring-zinc-500/20 hover:ring-zinc-400'>
          <Skeleton className='h-4 w-[250px]' />
          <Separator />
          <p className='font-light'>leader</p>
        </div>
      ) : (
        <>
          {(data as Server).postedEvents.map((eventItem) => {
            return <EventsItem key={eventItem.id} eventItem={eventItem} />
          })}
        </>
      )}
    </>
  )
}
