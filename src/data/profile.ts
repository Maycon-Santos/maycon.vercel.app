import emailIcon from '@/assets/images/social-icons/email.png'
import githubIcon from '@/assets/images/social-icons/github.png'
import linkedinIcon from '@/assets/images/social-icons/linkedin.png'
import whatsappIcon from '@/assets/images/social-icons/whatsapp.png'

export { default as profileImage } from '@/assets/images/profile.jpg'
export const profileName = 'Maycon Santos'
export const profileOffice = 'Desenvolvedor de software'

export const socialData = [
  {
    name: 'Whatsapp',
    icon: whatsappIcon,
    link: 'https://api.whatsapp.com/send?phone=5521965297946',
    label: '+55 21 96529-7946',
  },
  {
    name: 'Github',
    icon: githubIcon,
    link: 'https://github.com/Maycon-Santos',
    label: 'github.com/Maycon-Santos',
  },
  {
    name: 'Email',
    icon: emailIcon,
    link: 'mailto:mayconsantos.dev@gmail.com',
    label: 'mayconsantos.dev@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/maycon-link/',
    label: 'linkedin.com/in/maycon-link/',
  },
]
