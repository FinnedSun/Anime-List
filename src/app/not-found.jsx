'use client'

import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <div className="flex gap-4 justify-center items-center">
          <FileSearch size={32} className="text-color-accent" />
          <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
        </div>
        <Link
          href={'/'}
          className=" text-color-primary hover:text-color-accent text-2xl font-semibold transition-all hover:underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  )
}
export default Page
