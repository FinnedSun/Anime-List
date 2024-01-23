import {
  ArrowBendDoubleUpRight,
  ArrowBendDoubleUpLeft,
  ArrowBendUpLeft,
  ArrowBendUpRight,
} from '@phosphor-icons/react/dist/ssr'

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  const handleNextPage = () => {
    setPage((prveState) => prveState + 1)
    scrollTop()
  }
  const handle10NextPage = () => {
    setPage((prveState) => prveState + 10)
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((prveState) => prveState - 1)
    scrollTop()
  }
  const handle10PrevPage = () => {
    setPage((prveState) => prveState - 10)
    scrollTop()
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 text-color-primary gap-5 text-2xl bg-color-secondary">
      <div className="flex gap-10">
        {page <= 10 ? null : (
          <button onClick={handle10PrevPage}>
            <div className="flex gap-1 hover:text-color-accent transition-all">
              <h1>{page - 10}</h1>
              <ArrowBendDoubleUpLeft size={32} />
            </div>
          </button>
        )}
        {page <= 1 ? null : (
          <button
            onClick={handlePrevPage}
            className="hover:text-color-accent transition-all hover:underline"
          >
            <ArrowBendUpLeft
              size={32}
              className="hover:text-color-accent text-color-primary"
            />
          </button>
        )}
      </div>
      <p>
        {page} of {lastPage}
      </p>
      <div className="flex gap-10">
        {page >= lastPage ? null : (
          <button
            onClick={handleNextPage}
            className="hover:text-color-accent transition-all hover:underline"
          >
            <ArrowBendUpRight
              size={32}
              className="hover:text-color-accent text-color-primary"
            />
          </button>
        )}
        {page >= lastPage ? null : (
          <button onClick={handle10NextPage} className="">
            <div className="flex gap-1 hover:text-color-accent transition-all">
              <ArrowBendDoubleUpRight size={32} />
              <h1>{page + 10}</h1>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
export default Pagination
