import SignIn from '@/components/auth/sign-in'

export default async function Home() {
  return (
    <main className='absolute inset-0'>
      <div className='mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20'>
        <SignIn />
      </div>
    </main>
  )
}
