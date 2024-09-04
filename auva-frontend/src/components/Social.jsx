
import social_1 from '../assets/img/social1.png'
import social_2 from '../assets/img/social2.png'
import social_3 from '../assets/img/social3.png'
import social_4 from '../assets/img/social4.png'

import { discord, twitter, telegram, reddit } from './SocialUrl'

export default function Social({ className }) {
  const socialIcons = [
    {
      icon: social_1,
      url: discord,
      name: 'discord',
    },
    // {
    //   icon: social_3,
    //   url: reddit,
    //   name: 'reddit',
    // },
    {
      icon:social_2,
      url: twitter,
      name: 'twitter',
    },
    {
      icon: social_4,
      url: telegram,
      name: 'telegram',
    },
  ]
  return (
    <ul className={`social-list d-flex align-items-center flex-wrap  ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0" target="_blank" className="social-link d-flex align-items-center justify-content-center ms-1">
            <img src={item?.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}