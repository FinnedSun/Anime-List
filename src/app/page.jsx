import Header from '@/components/Header'
import AnimeList from '@/components/AnimeList'

import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from '../lib/api-libs'

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=10')
  let topRecomedasi = await getNestedAnimeResponse(
    'recommendations/anime',
    'entry'
  )
  topRecomedasi = reproduce(topRecomedasi, 10)

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header title="Anime Populer" linkHref="/populer" linkTitel="Lihat" />
        <AnimeList api={topAnime} />
      </section>
      {/* Recomendasi Populer */}
      <section>
        <Header title="Anime Rekomendasi" />
        <AnimeList api={topRecomedasi} />
      </section>
    </>
  )
}
export default Page
