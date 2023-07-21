import { Role } from '@prisma/client'
import type { Session, User } from 'next-auth'

declare module 'next-auth' {
  interface Profile {
    roles: string[]
  }

  interface User {
    id: string
    lodestone?: number
    role?: Role | null
  }

  interface Session extends DefaultSession {
    user?: User
  }
}
