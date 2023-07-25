import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const canCreateArticle = await prisma.permission.create({
    data: {
      label: 'article.create',
      role: Role.CONDITOR,
    },
  })

  const canEditArticle = await prisma.permission.create({
    data: {
      label: 'article.edit',
      role: Role.CONDITOR,
    },
  })

  const canDeleteArticle = await prisma.permission.create({
    data: {
      label: 'article.delete',
      role: Role.CONDITOR,
    },
  })

  const canCreateComment = await prisma.permission.create({
    data: {
      label: 'comment.create',
      role: Role.SOCIUS,
    },
  })

  const canEditComment = await prisma.permission.create({
    data: {
      label: 'comment.edit',
      role: Role.CONDITOR,
    },
  })

  const canDeleteComment = await prisma.permission.create({
    data: {
      label: 'comment.delete',
      role: Role.CONDITOR,
    },
  })

  const canCreateEvent = await prisma.permission.create({
    data: {
      label: 'event.create',
      role: Role.PRAEFECTUS,
    },
  })

  const canEditEvent = await prisma.permission.create({
    data: {
      label: 'event.edit',
      role: Role.CONDITOR,
    },
  })

  const canDeleteEvent = await prisma.permission.create({
    data: {
      label: 'event.delete',
      role: Role.CONDITOR,
    },
  })

  console.log({
    canCreateArticle,
    canEditArticle,
    canDeleteArticle,
    canCreateComment,
    canEditComment,
    canDeleteComment,
    canCreateEvent,
    canEditEvent,
    canDeleteEvent,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
