import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: any) {
  const articles = await prisma.article
    .findMany({
      where: { userId: params.id },
      select: {
        id: true,
        title: true,
        created_at: true,
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
