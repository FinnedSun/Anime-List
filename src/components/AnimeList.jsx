import Image from 'next/image'
import Link from 'next/link'

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 sm:grid-cols-3 px-4">
      {api.data?.map((data) => {
        return (
          <Link
            href={`/anime/${data.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={data.mal_id}
          >
            <Image
              src={data.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 transition-all hover:scale-105 md:object-fill rounded-sm"
            />
            <h3 className="font-bold text-md md:text-xl  p-4 text-center hover:scale-110 ">
              {data.title}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}
export default AnimeList
