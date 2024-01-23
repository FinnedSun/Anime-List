import Header from '@/components/Header'
import AnimeList from '@/components/AnimeList'

import { getAnimeResponse } from '@/lib/api-libs'

const Page = async ({ params }) => {
  const { keyword } = params

  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse('anime', `q=${decodedKeyword}`)
  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}
export default Page
