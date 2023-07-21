'use client'

import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import { toast } from './ui/use-toast'

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
  if (isLoading) console.log('Loading fresh data from Raid-Helper')

  return <div className='container truncate'>{JSON.stringify(data)}</div>
}
