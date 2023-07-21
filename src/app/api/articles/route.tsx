import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const articles = await prisma.article
    .findMany({
      select: {
        id: true,
        title: true,
        created_at: true,
        userId: true,
        _count: { select: { comments: true } },
      },
      orderBy: {
        created_at: 'desc',
      },
    })
    .catch((e) => {
      return NextResponse.json({ error: 'Failed to fetch data.' })
    })

  return NextResponse.json(articles)
}
