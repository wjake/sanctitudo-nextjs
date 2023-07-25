'use client'

import { User } from 'next-auth'
import { Separator } from '../ui/separator'
import UserCard from './card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface UserSettings {
  user: Pick<User, 'id' | 'name' | 'image' | 'role'>
}

export default function UserSettings({ user }: UserSettings) {
  return (
    <div>
      <h1>User Settings</h1>
      <Separator />

      <div className='tems-center mx-auto flex max-w-2xl justify-center gap-2'>
        <UserCard user={user} />
        <Separator orientation='vertical' />
        <UserCard
          user={{
            name: 'Ronak Aldera',
            image:
              'https://img2.finalfantasyxiv.com/f/566eb12f51a19a11cfa79415d4b28c84_c274370774c6bc3483cc8740805f41bcfc0_96x96.jpg?1689953875',
            role: 'CONDITOR',
          }}
          title='Storm Puppy'
        />
      </div>

      <Input type='text' placeholder='Lodestone ID' />
      <Button>Save</Button>
    </div>
  )
}
