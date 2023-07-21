import { PrismaAdapter } from '@next-auth/prisma-adapter'
import DiscordProvider from 'next-auth/providers/discord'
import { NextAuthOptions } from 'next-auth'
import { prisma } from '@/lib/db'
import { Role } from '@prisma/client'

export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
      authorization: `https://discord.com/api/oauth2/authorize?scope=${process.env.DISCORD_SCOPES}`,
      userinfo: `https://discord.com/api/users/@me/guilds/${process.env.DISCORD_GUILD}/member`,
      profile(profile) {
        const nickname: string =
          profile.nick === 'null' ? profile.nick : profile.user.global_name

        const imageFormat = (avatar: string): string => {
          return avatar.startsWith('a_') ? 'gif' : 'png'
        }

        const avatarImage = (): string => {
          if (profile.avatar === null) {
            if (profile.user.avatar === null) {
              const defaultAvatarNumber =
                parseInt(profile.user.discriminator) % 5
              return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
            }
            return `https://cdn.discordapp.com/avatars/${profile.user.id}/${
              profile.user.avatar
            }.${imageFormat(profile.user.avatar)}`
          }
          return `https://cdn.discordapp.com/avatars/${profile.user.id}/${
            profile.avatar
          }.${imageFormat(profile.avatar)}`
        }

        return {
          id: profile.user.id,
          name: nickname,
          image: avatarImage(),
        }
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
    // newUser: '/auth/new-user' // redirect new user to user setttings?
  },
  callbacks: {
    async signIn({ user, profile }) {
      if (!profile?.roles)
        throw new Error(
          'Discord account does not exist on Sanctitudo Sollertia.'
        )

      const getRole = (): Role => {
        if (profile.roles.includes('936952458603806720')) return Role.CONDITOR
        if (profile.roles.includes('936957354052812800')) return Role.PRAEFECTUS
        if (profile.roles.includes('1027721585332850718')) return Role.ARTIFEX
        if (profile.roles.includes('936957896380530698')) return Role.SOCIUS
        return Role.NONE
      }

      const highestRole = getRole()

      if (highestRole === Role.NONE)
        throw new Error('Discord account does not meet role requirement.')

      user.role = highestRole

      return true
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        session.user.lodestone = user.lodestone
        session.user.role = user.role
      }
      return session
    },
    redirect() {
      return '/'
    },
  },
}
