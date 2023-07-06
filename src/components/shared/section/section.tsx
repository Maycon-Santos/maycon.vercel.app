import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import styles from './section.module.css'

interface SectionComponent extends React.FC<PropsWithChildren<SectionProps>> {
  Heading: React.FC<SectionHeadingProps>
  Title: React.FC<SectionTitleProps>
  Body: React.FC<SectionBodyProps>
}

type SectionProps = {
  paddingTop?: boolean
  paddingBottom?: boolean
}

type SectionHeadingProps = PropsWithChildren<{
  align?: 'left' | 'center' | 'right'
}>

type SectionTitleProps = {
  children: string
  fragmentStyles?: ('fill' | 'outline')[]
  fragmentSizes?: ('medium' | 'large')[]
  fragmentTextTransforms?: (
    | 'uppercase'
    | 'lowercase'
    | 'capitalize'
    | 'initial'
  )[]
}

type SectionBodyProps = PropsWithChildren<{
  paddingLeft?: boolean
  paddingRight?: boolean
}>

const Section: SectionComponent = (props) => {
  const { children, paddingTop = true, paddingBottom = true } = props

  return (
    <section
      className={classNames(styles.wrapper, {
        [styles['padding-top']]: paddingTop,
        [styles['padding-bottom']]: paddingBottom,
      })}
    >
      {children}
    </section>
  )
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, align = 'left' } = props
  return (
    <div className={classNames(styles.heading, styles[`align-${align}`])}>
      {children}
    </div>
  )
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { children, fragmentStyles, fragmentSizes, fragmentTextTransforms } =
    props

  return (
    <h2 className={styles.title}>
      {children
        .split(' ')
        .filter(Boolean)
        .map((fragment, index) => {
          const fragmentStyle =
            fragmentStyles?.[index % fragmentStyles.length] || 'fill'
          const fragmentSize =
            fragmentSizes?.[index % fragmentSizes.length] || 'medium'
          const fragmentTextTransform =
            fragmentTextTransforms?.[index % fragmentTextTransforms.length] ||
            'initial'

          return (
            <>
              <span
                key={fragment}
                className={classNames(
                  styles['title-fragment'],
                  styles[`style-${fragmentStyle}`],
                  styles[`size-${fragmentSize}`],
                  styles[`text-transform-${fragmentTextTransform}`],
                )}
              >
                {fragment}
              </span>
            </>
          )
        })}
    </h2>
  )
}

const SectionBody: React.FC<SectionBodyProps> = (props) => {
  const { children, paddingLeft = true, paddingRight = true } = props

  return (
    <div
      className={classNames(styles['body'], {
        [styles['padding-left']]: paddingLeft,
        [styles['padding-right']]: paddingRight,
      })}
    >
      {children}
    </div>
  )
}

Section.Title = SectionTitle
Section.Heading = SectionHeading
Section.Body = SectionBody

export default Section
