import Link from 'next/link'
import { authUserSession } from '@/lib/auth-libs'

export default async function UserButton() {
  const user = await authUserSession()
  const actionLabel = user ? 'Sign Out' : 'Sign in'
  const actionURL = user ? '/api/auth/signout' : '/api/auth/signin'
  return (
    <div className="flex gap-2 justify-between items-center">
      {user ? (
        <Link
          href={'/users/dashboard'}
          className="bg-color-dark text-color-primary rounded-lg py-1 px-12 hover:bg-color-primary hover:text-color-dark"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-primary rounded-lg py-1 px-12 hover:bg-color-primary hover:text-color-dark"
      >
        {actionLabel}
      </Link>
    </div>
  )
}
