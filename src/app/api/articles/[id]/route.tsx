import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: any) {
  const article = await prisma.article
    .findUniqueOrThrow({
      where: { id: params.id },
      include: { comments: true },
    })
    .catch((e) => {
      return NextResponse.json({ error: 'Failed to fetch data.' })
    })

  return NextResponse.json(article)
}
