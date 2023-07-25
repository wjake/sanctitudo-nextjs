import Event from '@/components/Event'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className='absolute inset-0'>
      <div className='container mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-20'>
        <Event id={params.id} />
      </div>
    </main>
  )
}
