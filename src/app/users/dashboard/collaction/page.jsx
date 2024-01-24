import Image from 'next/image'
import Link from 'next/link'
import { Back } from '@/components/Back'

export default function Page() {
  return (
    <section className="mt-4">
      <div className=" mx-4">
        <Back title={'Koleksi Saya'} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={'/'} className="relative border-4 border-color-accent">
            <Image
              src={''}
              alt=""
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute bottom-0 w-full">
              <h5 className="flex items-center justify-center text-xl text-center text-color-secondary bg-color-accent h-16">
                Judul Anime
              </h5>
            </div>
          </Link>
          <Link href={'/'} className="relative border-4 border-color-accent">
            <Image
              src={''}
              alt=""
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute bottom-0 w-full">
              <h5 className="flex items-center justify-center text-xl text-center text-color-secondary bg-color-accent h-16">
                Judul Anime
              </h5>
            </div>
          </Link>
          <Link href={'/'} className="relative border-4 border-color-accent">
            <Image
              src={''}
              alt=""
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute bottom-0 w-full">
              <h5 className="flex items-center justify-center text-xl text-center text-color-secondary bg-color-accent h-16">
                Judul Anime
              </h5>
            </div>
          </Link>
          <Link href={'/'} className="relative border-4 border-color-accent">
            <Image
              src={''}
              alt=""
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute bottom-0 w-full">
              <h5 className="flex items-center justify-center text-xl text-center text-color-secondary bg-color-accent h-16">
                Judul Anime
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
