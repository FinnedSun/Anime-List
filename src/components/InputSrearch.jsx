'use client'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

const InputSrearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (event) => {
    const keyworld = searchRef.current.value

    if (!keyworld || keyworld.trim() == '') return

    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault()
      router.push(`/search/${keyworld}`)
    }
  }

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button>
        <MagnifyingGlass
          className="absolute top-2 end-2"
          onClick={handleSearch}
          size={24}
        />
      </button>
    </div>
  )
}
export default InputSrearch
