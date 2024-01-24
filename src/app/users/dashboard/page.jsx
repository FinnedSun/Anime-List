import { authUserSession } from '@/lib/auth-libs'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await authUserSession()

  if (!user) redirect('/')
  return (
    <div className="text-color-primary flex items-center flex-col justify-center">
      <Image
        src={user.image}
        alt="Image User"
        width={200}
        height={200}
        className="rounded-full mt-4 hover:scale-110 transition-all"
      />
      <h5 className="text-2xl font-bold my-10">Walcome {user.name}</h5>
      <div className="flex gap-4 flex-wrap">
        <Link
          href={'/users/dashboard/collaction'}
          className="bg-color-accent text-color-dark p-2 rounded-md font-bold hover:bg-color-primary"
        >
          Koleksi Saya
        </Link>
        <Link
          href={'/users/dashboard/commnet'}
          className="bg-color-accent text-color-dark p-2 rounded-md font-bold hover:bg-color-primary"
        >
          komentar Saya
        </Link>
      </div>
    </div>
  )
}
