import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: any) {
  const comments = await prisma.comment
    .findMany({
      where: { articleId: params.id },
    })
    .catch((e) => {
      return NextResponse.json({ error: 'Failed to fetch data.' })
    })

  return NextResponse.json(comments)
}
