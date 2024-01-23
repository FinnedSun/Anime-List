import { getAnimeResponse } from '@/lib/api-libs'
import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image'

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)
  console.log(data)
  return (
    <>
      <div className="p-4">
        <h3 className="text-color-primary text-2xl">
          {data.title} - {data.year}
        </h3>
      </div>
      <div className="p-4 flex gap-2 text-color-primary  overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="uppercase ">Peringkat</h3>
          <p>{data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="uppercase">Skor</h3>
          <p>{data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="uppercase">episode</h3>
          <p>{data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="uppercase">populer</h3>
          <p>{data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3 className="uppercase">episode</h3>
          <p>{data.episodes}</p>
        </div>
      </div>
      <div className="p-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={150}
          height={150}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  )
}
export default Page
