import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: any) {
  const user = await prisma.user
    .findUniqueOrThrow({
      where: {
        id: params.id,
      },
      select: {
        id: true,
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

  return NextResponse.json(user)
}
