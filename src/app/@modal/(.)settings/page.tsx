import CloseModal from '@/components/CloseModal'
import { Card } from '@/components/ui/card'
import UserSettings from '@/components/user/settings'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Default() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/sign-in?error=Sign in required to access settings.')

  return (
    <div className='fixed inset-0 z-10 bg-zinc-900/20 backdrop-blur-sm'>
      <div className='mx-auto flex h-full max-w-lg items-center'>
        <div className='container relative h-fit w-full py-20'>
          <div className='absolute right-4 top-4'>
            <CloseModal />
          </div>

          <Card className='p-6'>
            <UserSettings user={session.user!} />
          </Card>
        </div>
      </div>
    </div>
  )
}
