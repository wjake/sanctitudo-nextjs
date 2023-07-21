import Users from '@/components/Users'
import { prisma } from '@/lib/db'

export default async function Page() {
  const users: any = await prisma.user
    .findMany({
      select: {
        id: true,
        name: true,
        lodestone: true,
        _count: {
          select: {
            articles: true,
            comments: true,
          },
        },
      },
    })
    .catch((e) => {
      return <main>Failed to fetch data.</main>
    })

  return (
    <main>
      <Users users={users} />
    </main>
  )
}
