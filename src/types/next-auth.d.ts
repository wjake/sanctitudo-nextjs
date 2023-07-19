import type { Session, User } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    lodestone?: number
  }

  interface Session extends DefaultSession {
    user?: User
  }
}
