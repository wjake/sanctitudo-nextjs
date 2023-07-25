'use client'

import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import EventCard from './event/card'
import { Event } from 'raid-helper'
import { User } from 'next-auth'

export default function Event({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR(
    `https://raid-helper.dev/api/v2/events/${id}`,
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return isLoading ? <></> : <EventCard event={data as Event} />
}
