import SignIn from '@/components/SignIn'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default async function Home() {
  return (
    <main className='absolute inset-0'>
      <div className='mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20'>
        <SignIn />
      </div>
    </main>
  )
}
