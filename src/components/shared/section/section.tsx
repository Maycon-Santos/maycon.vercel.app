import React, { Children, PropsWithChildren } from 'react'
import styles from './section.module.css'
import classNames from 'classnames'

interface SectionComponent extends React.FC<PropsWithChildren> {
  Heading: React.FC<SectionHeadingProps>
  Title: React.FC<SectionTitleProps>
  Body: React.FC<SectionBodyProps>
}

type SectionHeadingProps = PropsWithChildren<{
  align: 'left' | 'center' | 'right'
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

type SectionBodyProps = PropsWithChildren<{}>

const Section: SectionComponent = (props) => {
  const { children } = props

  return <section className={styles.wrapper}>{children}</section>
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children } = props
  return <div className={styles.heading}>{children}</div>
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
                  styles[`title-fragment-style-${fragmentStyle}`],
                  styles[`title-fragment-size-${fragmentSize}`],
                  styles[
                    `title-fragment-text-transform-${fragmentTextTransform}`
                  ],
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
  const { children } = props

  return <div className={styles['body']}>{children}</div>
}

Section.Title = SectionTitle
Section.Heading = SectionHeading
Section.Body = SectionBody

export default Section
