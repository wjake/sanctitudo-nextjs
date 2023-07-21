import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <pre>Server: {JSON.stringify(session?.user?.name)}</pre>
    </main>
  )
}
