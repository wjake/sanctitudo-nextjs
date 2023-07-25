import { Role } from '@prisma/client'
import type { Session, User } from 'next-auth'
import type { DiscordProfile } from 'next-auth/providers/discord'

declare module 'next-auth' {
  interface Profile {
    roles: string[]
  }

  interface User {
    id: string
    discord: string
    nickname: string | null
    lodestone?: number | null
    role?: Role | null
    bio: string | null
  }

  interface Session extends DefaultSession {
    user?: User
  }
}

declare module 'next-auth/providers/discord' {
  interface DiscordProfile extends Record<string, any> {
    avatar: string | null
    communication_disabled_until: string | null
    flags: number
    joined_at: string
    nick: string
    pending: boolean
    premium_since: string | null
    roles: string[]
    user: {
      id: string
      username: string
      avatar: string | null
      discriminator: string
      public_flags: number
      flags: number
      banner: string | null
      accent_color: number
      global_name: string | null
      avatar_decoration: string | null
      banner_color: string
    }
    mute: boolean
    deaf: boolean
    bio: string
    banner: string | null
  }
}
