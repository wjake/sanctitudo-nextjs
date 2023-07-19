import Link from 'next/link'
import { Icons } from './icons'
import UserAuthForm from './UserAuthForm'

export default function SignUp() {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
        <p className='mx-auto max-w-xs text-sm'>
          By continuing, you are creating a Sanctitudo and agree to our User
          Agreement and Privacy Policy.
        </p>

        <UserAuthForm />

        <p className='px-8 text-center text-sm text-zinc-700'>
          Already have an account?{' '}
          <Link
            href='/sign-in'
            className='text-sm underline underline-offset-4 hover:text-zinc-800'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
