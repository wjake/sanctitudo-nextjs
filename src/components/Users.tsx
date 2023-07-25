'use client'

import useSWR from 'swr'
import { toast } from './ui/use-toast'
// import { fetcher } from '@/lib/utils'

interface UserProps {
  id: string
  name: string
  lodestone: string
  _count: {
    articles: number
    comments: number
  }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Users({ users }: { users: UserProps[] }) {
  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    fallbackData: users,
  })

  if (error) {
    toast({
      title: 'There was a problem.',
      description: 'There was a problem fetching users data.',
      variant: 'destructive',
    })
    console.log(error)
    return <div>{JSON.stringify(data)}</div>
  }
  //   if (isLoading) return <div>loading...</div>

  return <div>{JSON.stringify(users)}</div>
}
