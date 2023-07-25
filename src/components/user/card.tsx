import { User } from 'next-auth'
import UserAvatar from './avatar'
import { Separator } from '../ui/separator'

interface UserCardProps {
  user: Pick<User, 'name' | 'image' | 'role'>
  title?: string
}

export default function UserCard({ user, title }: UserCardProps) {
  return (
    <div className='m-4 rounded p-4 text-center ring-1 ring-zinc-500/20'>
      <div className='items-center gap-4 md:flex md:justify-between'>
        <UserAvatar
          user={user}
          className='h-16 w-16 rounded-lg ring-1 ring-zinc-500/20'
        />
        <div className='space-y-1'>
          <div className='leading-none'>
            <p className='font-semibold'>{user?.name}</p>
            {title != '' && <p className='text-sm font-light'>{title}</p>}
          </div>
          <Separator />
          <p>{user?.role}</p>
        </div>
      </div>
    </div>
  )
}
