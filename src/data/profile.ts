import emailIcon from '@/assets/social-icons/email.svg'
import githubIcon from '@/assets/social-icons/github.svg'
import linkedinIcon from '@/assets/social-icons/linkedin.svg'
import whatsappIcon from '@/assets/social-icons/whatsapp.svg'

import emailIconLight from '@/assets/social-icons/email-light.svg'
import githubIconLight from '@/assets/social-icons/github-light.svg'
import linkedinIconLight from '@/assets/social-icons/linkedin-light.svg'
import whatsappIconLight from '@/assets/social-icons/whatsapp-light.svg'

export { default as profileImage } from '../assets/profile.jpg'
export const profileName = 'Maycon Santos'
export const profileOffice = 'Desenvolvedor de software'

export const socialData = [
  {
    name: 'Whatsapp',
    icon: {
      dark: whatsappIcon,
      light: whatsappIconLight,
    },
    link: 'https://api.whatsapp.com/send?phone=5521965297946',
    label: '+55 21 96529-7946',
  },
  {
    name: 'Github',
    icon: {
      dark: githubIcon,
      light: githubIconLight,
    },
    link: 'https://github.com/Maycon-Santos',
    label: 'github.com/Maycon-Santos',
  },
  {
    name: 'Email',
    icon: {
      dark: emailIcon,
      light: emailIconLight,
    },
    link: 'mailto:mayconsantos.dev@gmail.com',
    label: 'mayconsantos.dev@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: {
      dark: linkedinIcon,
      light: linkedinIconLight,
    },
    link: 'https://www.linkedin.com/in/maycon-link/',
    label: 'linkedin.com/in/maycon-link/',
  },
]
