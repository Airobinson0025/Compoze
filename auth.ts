import { db } from "@/db/schema"
import { verifyPassword } from "@/services/authServices"
import { getUserByEmail } from "@/services/userServices"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin'
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        try {
          if (!credentials.email || !credentials.password) {
            return null
          }

          const user = await getUserByEmail(credentials.email as string)
          if (!user) {
            return null
          }

          const validatedUserPassword = await verifyPassword(credentials.password as string, user.password)

          if (!validatedUserPassword) {
            return null
          }

          if(user && validatedUserPassword) {
            return {id: user.id, email: user.email, name: user.firstName}
          } else {
            return null
          }
        } catch (error) {
          console.error(error)
          throw new Error('An error occurred while logging in with Auth.js')
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },

    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        name: token.name as string,
        emailVerified: token.emailVerified as Date
      }
      
      return session
      
    }
  }
})