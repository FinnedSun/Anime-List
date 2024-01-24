import Link from 'next/link'
import InputSrearch from './InputSrearch'
import UserButton from './UserButton'

const Nav = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col md:items-center  justify-between px-4 py-2">
        <Link href={'/'}>
          <h1 className="font-bold text-4xl text-center md:text-left text-color-primary">
            Anime List<span className="text-red-400">!</span>
          </h1>
        </Link>
        <div>
          <InputSrearch />
          <UserButton />
        </div>
      </div>
    </header>
  )
}
export default Nav
