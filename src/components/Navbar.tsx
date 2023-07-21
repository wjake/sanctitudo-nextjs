import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'
import UserAccountNav from './UserAccountNav'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'

export default async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
    <div className='fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-zinc-100 py-2'>
      <div className='container mx-auto flex h-full max-w-7xl items-center justify-between gap-2'>
        <Link href='/' className='flex items-center gap-2'>
          <Icons.logo className='h-10 w-10 sm:h-8 sm:w-8' />
          <p className='hidden text-sm font-medium text-zinc-700 md:block'>
            Sanctitudo
          </p>
        </Link>

        {/* <Link
          href="#Test"
          className={cn("flex gap-2", buttonVariants({ variant: "default" }))}
        >
          <Newspaper className="h-6 w-6 sm:h-4 sm:w-4" />
          <p className="hidden md:block">Articles</p>
        </Link>

        <Link
          href="#Test"
          className={cn("flex gap-2", buttonVariants({ variant: "default" }))}
        >
          <Calendar className="h-6 w-6 sm:h-4 sm:w-4" />
          <p className="hidden md:block">Events</p>
        </Link> */}

        {/* Search bar */}

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href='/sign-in'
            rel='preload'
            className={cn(
              'flex gap-2',
              buttonVariants({ variant: 'outline' })
            )}>
            <LogIn className='h-6 w-6 sm:h-4 sm:w-4' />
            <p className='hidden md:block'>Sign In</p>
          </Link>
        )}
      </div>
    </div>
  )
}
