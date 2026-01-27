'use client'

import styles from './HeroVideo.module.css'

export default function HeroVideo() {
  const videoSrc = "https://player.vimeo.com/video/1158873430?background=1&autoplay=1&loop=1&muted=1&controls=0&playsinline=1&autopause=0"

  return (
    <div className={styles.heroVideoWrapper}>
      <iframe
        src={videoSrc}
        className={styles.heroVideo}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        frameBorder="0"
        title="Background Video"
        style={{ border: 'none' }}
      />
    </div>
  )
}
