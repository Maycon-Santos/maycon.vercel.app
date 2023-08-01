import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import styles from './section.module.css'

interface SectionComponent extends React.FC<PropsWithChildren<SectionProps>> {
  Header: React.FC<SectionHeadingProps>
  Title: React.FC<SectionTitleProps>
  Body: React.FC<SectionBodyProps>
}

type SectionProps = {
  paddingTop?: boolean
  paddingBottom?: boolean
}

type SectionHeadingProps = PropsWithChildren<{
  align?: 'left' | 'center' | 'right'
  className?: string
}>

type SectionTitleProps = {
  children: string
  fragmentStyles?: ('fill' | 'outline')[]
  fragmentSizes?: ('medium' | 'sm-large' | 'md-large' | 'large')[]
  fragmentTextTransforms?: (
    | 'uppercase'
    | 'lowercase'
    | 'capitalize'
    | 'initial'
  )[]
}

type SectionBodyProps = PropsWithChildren<{
  spacingLeft?: boolean
  spacingRight?: boolean
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

const SectionHeader: React.FC<SectionHeadingProps> = (props) => {
  const { children, align = 'left', className } = props
  return (
    <div
      className={classNames(styles.header, styles[`align-${align}`], className)}
    >
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
            <span
              key={fragment}
              className={classNames(
                styles['title-fragment'],
                styles[`style-${fragmentStyle}`],
                styles[`size-${fragmentSize}`],
                styles[`text-transform-${fragmentTextTransform}`],
              )}
            >
              {index > 0 && <>&nbsp;</>}
              {fragment}
            </span>
          )
        })}
    </h2>
  )
}

const SectionBody: React.FC<SectionBodyProps> = (props) => {
  const {
    children,
    spacingLeft: paddingLeft = true,
    spacingRight: paddingRight = true,
  } = props

  return (
    <div
      className={classNames(styles['body'], {
        [styles['spacing-left']]: paddingLeft,
        [styles['spacing-right']]: paddingRight,
      })}
    >
      {children}
    </div>
  )
}

Section.Title = SectionTitle
Section.Header = SectionHeader
Section.Body = SectionBody

export default Section
