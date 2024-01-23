'use client'

import YouTube from 'react-youtube'
import { ArrowLineUp, XCircle } from '@phosphor-icons/react'
import { useState } from 'react'

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleCloseButton = () => {
    setIsOpen((prevState) => !prevState)
  }
  const option = {
    width: '300',
    height: '250',
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleCloseButton}>
          <XCircle
            size={32}
            className="text-color-primary hover:text-color-accent transition-all"
            weight="fill"
          />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert('Trailer ini Error')}
        />
      </div>
    )
  }

  return isOpen ? (
    <Player />
  ) : (
    <button
      className="fixed bottom-5 right-5 w-20 text-color-primary bg-color-secondary flex flex-col text-center items-center hover:text-color-accent transition-all rounded"
      onClick={handleCloseButton}
    >
      <ArrowLineUp size={32} weight="fill" />
      <h3>Tonton Trailer</h3>
    </button>
  )
}
export default VideoPlayer
