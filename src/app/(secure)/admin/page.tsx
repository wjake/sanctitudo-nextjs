import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Page() {
  const session = await getServerSession(authOptions)

  return <main></main>
}
