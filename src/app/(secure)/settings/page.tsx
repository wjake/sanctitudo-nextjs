import UserSettings from '@/components/user/settings'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Settings() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/sign-in?error=Sign in required to access settings.')

  return (
    <main className='absolute inset-0'>
      <div className='mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20'>
        <UserSettings user={session.user!} />
      </div>
    </main>
  )
}
