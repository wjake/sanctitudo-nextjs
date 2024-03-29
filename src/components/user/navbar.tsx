'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import UserAvatar from './avatar'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { LogOut, Settings, User2 } from 'lucide-react'
import { User } from 'next-auth'

interface UserAccountNav {
  user: Pick<User, 'id' | 'name' | 'image' | 'role'>
}

export default function UserAccountNav({ user }: UserAccountNav) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              {user?.name && user.name}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {user?.role && user.role}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild disabled>
          <Link href='#settings'>
            <User2 className='mr-2 h-4 w-4' />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href='/settings'>
            <Settings className='mr-2 h-4 w-4' />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            })
          }}
          className='cursor-pointer'>
          <LogOut className='mr-2 h-4 w-4' />
          Sign Out
          <DropdownMenuShortcut>⇧⌥Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
