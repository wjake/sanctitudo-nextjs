import { PrismaAdapter } from '@next-auth/prisma-adapter'
import DiscordProvider from 'next-auth/providers/discord'
import { NextAuthOptions } from 'next-auth'
import { prisma } from '@/lib/db'
import { randomBytes, randomUUID } from 'crypto'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
      authorization: `https://discord.com/api/oauth2/authorize?scope=${process.env.DISCORD_SCOPES}`,
      userinfo: {
        url: `https://discord.com/api/users/@me/guilds/${process.env.DISCORD_GUILD}/member`,
      },
      profile(profile) {
        if (profile.avatar === null) {
          if (profile.user.avatar === null) {
            const defaultAvatarNumber = parseInt(profile.user.discriminator) % 5
            profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
          } else {
            const format = profile.user.avatar.startsWith('a_') ? 'gif' : 'png'
            profile.image_url = `https://cdn.discordapp.com/avatars/${profile.user.id}/${profile.user.avatar}.${format}`
          }
        } else {
          const format = profile.avatar.startsWith('a_') ? 'gif' : 'png'
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.user.id}/${profile.avatar}.${format}`
        }
        if (profile.nick === null) {
          profile.nick = profile.user.global_name
        }
        return {
          id: profile.user.id,
          name: profile.nick,
          email: profile.email, // will return null - redacted from scope
          image: profile.image_url,
        }
      },
    }),
  ],
  session: {
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex')
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      console.log('Session Callback: ', { session })
      return session
    },
    redirect() {
      return '/'
    },
  },
}
