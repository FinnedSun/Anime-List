import NextAuth from 'next-auth/next'
import githubAuth from 'next-auth/providers/github'

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CILENT,
      clientSecret: process.env.GITHUB_SICRET,
    }),
  ],
  secret: process.env.NEXTAUTH,
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
