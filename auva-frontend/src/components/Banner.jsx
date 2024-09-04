
import { Container, Row, Col } from 'react-bootstrap'
import banner_img from '../assets/img/banner_img.png'
import pancakswap from '../assets/img/pancakswap.png'
import binance from '../assets/img/binance.png'
import dextools from '../assets/img/dextools.png'
import bg_birder from '../assets/img/button-white-border.png'

import social_1 from '../assets/img/social1.png'
import social_2 from '../assets/img/social2-1.png'
import social_3 from '../assets/img/social3.png'
import social_4 from '../assets/img/social4.png'

import { discord, twitter, telegram, reddit } from './SocialUrl'
import Marquee from 'react-fast-marquee'

export default function Banner() {
  const bannerLogo = [
    {
      img: pancakswap
    },
    {
      img: binance
    },
    {
      img: dextools
    }
  ]
  const social = [
    {
      icon: social_1,
      url: discord,
      name: 'discord',
    },
    {
      icon: social_2,
      url: twitter,
      name: 'twitter',
    },
    // {
    //   icon: social_3,
    //   url: reddit,
    //   name: 'reddit',
    // },
    {
      icon: social_4,
      url: telegram,
      name: 'telegram',
    },
  ]
  const stars = [
    {
      icon: `<svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.002 0.23999L54.9517 45.2902L100.002 50.24L54.9517 55.1897L50.002 100.24L45.0522 55.1897L0.00195312 50.24L45.0522 45.2902L50.002 0.23999Z" fill="white" />
                </svg>`
    },
    {
      icon: `<svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.002 0.23999L54.9517 45.2902L100.002 50.24L54.9517 55.1897L50.002 100.24L45.0522 55.1897L0.00195312 50.24L45.0522 45.2902L50.002 0.23999Z" fill="#FFE12F" />
                </svg>`
    },
    {
      icon: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.002 -0.000549316L54.9517 45.0497L100.002 49.9995L54.9517 54.9492L50.002 99.9995L45.0522 54.9492L0.00195312 49.9995L45.0522 45.0497L50.002 -0.000549316Z" fill="#1880C7" />
                </svg>`
    },
  ]
  return (
    <div className="banner" id="top-section">
      <Container fluid className='g-0'>
        <div className='banner-row d-flex flex-wrap'>
          <div className='banner-left'>
            <div className="social_icon">
              <ul>
                {social.map((item, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={`${index + 1}00`} data-aos-offset="0">
                    <a href={item.url} target="_blank"><img src={item.icon} alt="" /></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='banner-middle'>
            <div className="banner_content">
              <div className="content_box">
                <h1 data-aos="fade-up" data-aos-delay="" data-aos-offset="0"><span>AI-Driven</span> and Meme-inspired Culture</h1>
                <div className="banner_button" data-aos="fade-up" data-aos-delay="" data-aos-offset="0">
                  <a href="#" className="btns">
                    <img className='bg_birder' src={bg_birder} alt="" />
                    Buy Now <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.4962 4.58312C38.5902 3.20562 37.5497 2.01269 36.1722 1.91865L13.7245 0.38613C12.347 0.292087 11.1541 1.33254 11.06 2.71004C10.966 4.08755 12.0064 5.28048 13.3839 5.37452L33.3375 6.73676L31.9752 26.6903C31.8812 28.0678 32.9217 29.2607 34.2992 29.3548C35.6767 29.4488 36.8696 28.4084 36.9636 27.0309L38.4962 4.58312ZM3.64521 35.9512L37.6452 6.29691L34.3587 2.52877L0.358697 32.1831L3.64521 35.9512Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="banner-imges">
                <img src={banner_img} alt="" />
              </div>
            </div>
            <ul className="banner_logos d-none d-md-flex">
              {bannerLogo.map((item, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={`${index + 1}00`} data-aos-offset="0"><img src={item.img} alt="" /></li>
              ))}
            </ul>
            <div className="banner_logos d-md-none">
              <Marquee autoFill={true} speed={60}>
                {bannerLogo.map((item, index) => (
                  <div className='me-2' key={index}><img height={60} src={item.img} alt="" /></div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className='banner-right'>
            <div className="banner_star">
              <ul>
                {stars.map((item, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={`${index + 1}00`} data-aos-offset="0">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
