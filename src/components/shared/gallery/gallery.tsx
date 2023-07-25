import { useCallback, useMemo, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import classNames from 'classnames'
import styles from './gallery.module.css'

export type Media = {
  type: 'image' | 'video'
  src: StaticImageData | string
  thumbSrc?: StaticImageData | string
  alt: string
}

export type GalleryProps = {
  medias: Media[]
  thumbs?: boolean
}

const Gallery: React.FC<GalleryProps> = (props) => {
  const { medias, thumbs } = props
  const [selectedItem, setSelectedItem] = useState(0)
  const mediaCarouselRef = useRef<HTMLDivElement>(null)
  const mediaCarouselPos = useMemo(() => ({ x: 0, left: 0 }), [])

  const handleScroll = useCallback(() => {
    const target = mediaCarouselRef.current

    if (!target) return

    const scrollMax = target.scrollWidth - target.clientWidth
    const currentItem = Math.round(
      (target.scrollLeft / scrollMax) * (medias.length - 1),
    )

    mediaCarouselPos.left = mediaCarouselRef?.current?.scrollLeft
    setSelectedItem(currentItem)
  }, [mediaCarouselPos, medias.length])

  const selectItem = useCallback(
    (itemIndex: number) => {
      const target = mediaCarouselRef.current

      if (!target) return

      const scrollMax = target.scrollWidth - target.clientWidth
      const selectedItem = (itemIndex / (medias.length - 1)) * scrollMax

      target.scrollTo({ left: selectedItem, behavior: 'smooth' })
    },
    [medias.length],
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles['media-carousel-container']}>
        <div
          className={styles['media-carousel-list']}
          onScroll={handleScroll}
          ref={mediaCarouselRef}
        >
          {medias.map(
            ({ src, alt, type }) =>
              type === 'image' && (
                <Image
                  key={typeof src === 'string' ? src : src.src}
                  src={src}
                  className={styles['media-carousel-item']}
                  alt={alt}
                />
              ),
          )}
        </div>
      </div>
      {thumbs && (
        <div className={styles['thumb-list']}>
          {medias.map(
            ({ thumbSrc, alt }, index) =>
              thumbSrc && (
                <Image
                  key={typeof thumbSrc === 'string' ? thumbSrc : thumbSrc.src}
                  src={thumbSrc}
                  className={classNames(styles['thumb-item'], {
                    [styles.selected]: index === selectedItem,
                  })}
                  onClick={() => selectItem(index)}
                  alt={alt}
                />
              ),
          )}
        </div>
      )}
      <div className={styles['dot-list']}>
        {medias.map(({ src }, index) => (
          <button
            key={typeof src === 'string' ? src : src.src}
            onClick={() => selectItem(index)}
            className={classNames(styles['dot-item'], {
              [styles.selected]: index === selectedItem,
            })}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
