import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const users = await prisma.user
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
      return NextResponse.json({ error: 'Failed to fetch data.' })
    })

  return NextResponse.json(users)
}
