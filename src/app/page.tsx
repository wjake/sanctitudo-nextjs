import Events from '@/components/Events'
import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <div className='grid min-w-full grid-cols-3 gap-4'>
        <div className='col-span-3 grid gap-4 md:col-span-1'>
          {session?.user && <Button variant={'outline'}>Create Event</Button>}
          <Events />
        </div>
      </div>
    </main>
  )
}
