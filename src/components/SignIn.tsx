import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import { Separator } from './ui/separator'

export default function SignIn() {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        {/* <Icons.logo className='mx-auto h-6 w-6' /> */}
        <h1 className='text-4xl font-bold tracking-tight'>Sanctitudo</h1>
        <h1 className='text-1xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='mx-auto max-w-xs text-sm'>
          Sanctitudo Sollertia membership role Socius or higher is required to
          create an account. By continuing, you agree to our User Agreement and
          Privacy Policy.
        </p>

        <UserAuthForm />

        <div className='mx-auto flex h-5 items-center justify-items-center space-x-4 text-xs'>
          <Link
            href='/user-agreement'
            className='text-sm underline underline-offset-4 hover:text-zinc-800'>
            User Agreement
          </Link>
          <Separator orientation='vertical' />
          <Link
            href='/privacy-policy'
            className='text-sm underline underline-offset-4 hover:text-zinc-800'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
