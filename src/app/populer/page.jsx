'use client'

import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/HeaderMenu'
import Pagination from '@/components/Pagination'
import React, { useEffect, useState } from 'react'

import { getAnimeResponse } from '@/lib/api-libs'

const Page = async () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const data = await getAnimeResponse('top/anime', `page=${page}`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </>
  )
}
export default Page
