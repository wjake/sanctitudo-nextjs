import { User } from 'next-auth'
import { Avatar, AvatarFallback } from '../ui/avatar'
import Image from 'next/image'
import { Icons } from '../icons'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'name' | 'image'>
}

export default function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className='relative aspect-square h-full w-full'>
          <Image
            fill
            src={String(user.image)}
            alt='avatar picture'
            referrerPolicy='no-referrer'></Image>
        </div>
      ) : (
        <AvatarFallback>
          <Icons.user className='h-4 w-4' />
          <span className='sr-only'>{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  )
}
