import Link from 'next/link'

const Header = ({ title, linkHref, linkTitel }) => {
  return (
    <div className="p-4 flex items-center gap-2 justify-between md:justify-normal text-color-primary">
      <h1 className="text-2xl font-bold ">{title}</h1>
      {linkHref && linkTitel ? (
        <Link
          href={linkHref}
          className="  hover:text-color-accent underline transition-all"
        >
          {linkTitel}
        </Link>
      ) : null}
    </div>
  )
}
export default Header
