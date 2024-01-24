'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const Back = ({ title }) => {
  const router = useRouter()
  const handle = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <div className="flex items-center mb-4 gap-2">
      <button
        onClick={handle}
        className="text-color-accent hover:text-color-primary text-2xl font-bold"
      >
        Kembali
      </button>
      <p className="text-2xl text-color-primary  font-bold">/</p>
      <h3 className="text-2xl text-color-primary  font-bold">{title}</h3>
    </div>
  )
}
