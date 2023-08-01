import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { profileImage, profileName, profileOffice } from '@/data/profile'
import styles from './profile-aside.module.css'

type ProfileAsideProps = {
  onClose: () => void
  open: boolean
}

const ProfileAside: React.FC<ProfileAsideProps> = (props) => {
  const { onClose, open } = props

  return (
    <>
      <button
        className={classNames(styles.backdrop, { [styles.open]: open })}
        aria-label="fechar visualização de perfil"
        onClick={onClose}
      />
      <aside className={classNames(styles.wrapper, { [styles.open]: open })}>
        <button
          className={styles['close-button']}
          aria-label="fechar visualização de perfil"
          onClick={onClose}
        >
          <i className={classNames('symbol', styles['close-icon'])}>close</i>
        </button>
        <Link
          href="/"
          className={styles['profile-image-container']}
          title="Ir para a home"
        >
          <Image
            src={profileImage}
            className={styles['profile-image']}
            alt=""
          />
        </Link>
        <div className={styles['profile-content']}>
          <Link
            href="/"
            className={styles['profile-name']}
            title="Ir para a home"
          >
            {profileName}
          </Link>
          <Link
            href="/"
            className={styles['profile-label']}
            title="Ir para a home"
          >
            {profileOffice}
          </Link>
          <ul className={styles['personal-info']}>
            <li className={styles['personal-info-row']}>
              <b>Idade:</b> 25
            </li>
            <li className={styles['personal-info-row']}>
              <b>São pedro da Aldeia - RJ</b>
            </li>
          </ul>
          <hr className={styles.separator} />
          <div className={styles['main-skills-container']}>
            <h2 className={styles['main-skills-title']}>Principais skills</h2>
            <ul className={styles['main-skills-list']}>
              <li className={styles['main-skills-item']}>
                <i
                  className={classNames(
                    'symbol',
                    styles['main-skills-item-icon'],
                  )}
                >
                  code_blocks
                </i>
                Next.js, React
              </li>
              <li className={styles['main-skills-item']}>
                <i
                  className={classNames(
                    'symbol',
                    styles['main-skills-item-icon'],
                  )}
                >
                  code_blocks
                </i>
                React Native, Typescript
              </li>
              <li className={styles['main-skills-item']}>
                <i
                  className={classNames(
                    'symbol',
                    styles['main-skills-item-icon'],
                  )}
                >
                  code_blocks
                </i>
                Node.js, SCSS
              </li>
              <li className={styles['main-skills-item']}>
                <i
                  className={classNames(
                    'symbol',
                    styles['main-skills-item-icon'],
                  )}
                >
                  code_blocks
                </i>
                GIT
              </li>
            </ul>
          </div>
          <a
            href="/curriculo.pdf"
            download
            className={styles['download-cv-button']}
          >
            <i className={classNames('symbol', styles['download-cv-icon'])}>
              download
            </i>{' '}
            DOWNLOAD CV
          </a>
        </div>
      </aside>
    </>
  )
}

export default ProfileAside
