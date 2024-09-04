import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import TeamItem from './TeamItem'

import img_1 from '../assets/img/team/1.png';
import img_2 from '../assets/img/team/2.png';
import img_3 from '../assets/img/team/3.png';
import img_4 from '../assets/img/team/2.png';
import img_5 from '../assets/img/team/5.png';
import img_6 from '../assets/img/team/6.png';
import img_7 from '../assets/img/team/7.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const team = [
    {
      img: img_1,
      name: 'ABUL KALAM AZAD',
      title: 'UI/ UX, DEVELOPER',
      des: `This is Abul Kalam Azad UI & UX Designer. Expert in UX, UI / Visual Design, Meme Website Design, Dashboard Design, Mobile Responsive. And Crypto website, NFT Marketplace, DeFi Landing page, Crypto Dashboard & Front end Developer, react js, WordPress, HTMLs `,
      social: [
        {
          name: 'LINKEDIN',
          url: 'https://www.linkedin.com/in/uiazad/'
        },
        {
          name: 'INSTAGRAM',
          url: 'https://www.instagram.com/uiazad/'
        },
        {
          name: 'TELEGRAM',
          url: 'https://t.me/uiazad'
        },
      ]
    }, {
      img: img_2,
      name: 'Sakio',
      title: 'community manager',
      des: ``,
      social: [
        {
          name: 'LINKEDIN',
          url: '/'
        },
        {
          name: 'TWITTER',
          url: 'https://x.com/digitalsakio?s=21 '
        },
        {
          name: 'TELEGRAM',
          url: 'https://t.me/sakiodagoat'
        },
      ]
    }, {
      img: img_3,
      name: 'Angga T',
      title: 'digital artist',
      des: ``,
      social: [
        {
          name: 'LINKEDIN',
          url: '/'
        },
        {
          name: 'TWITTER',
          url: 'https://x.com/anggatantama'
        },
        {
          name: 'TELEGRAM',
          url: ''
        },
      ]
    }, {
      img: img_4,
      name: 'Eric O',
      title: 'animations & motion graphics',
      des: ``,
      social: [
        {
          name: 'LINKEDIN',
          url: 'https://www.linkedin.com/in/eric-okonkwo-1811232b5'
        },
        {
          name: 'TWITTER',
          url: 'https://x.com/vegan_eric?s=21'
        },
        {
          name: 'TELEGRAM',
          url: '/'
        },
      ]
    }, {
      img: img_5,
      name: 'Genki N',
      title: 'Lead Web3 developer',
      des: ``,
      social: [
        {
          name: 'GITHUB',
          url: 'https://github.com/yk909'
        },
        {
          name: 'TWITTER',
          url: 'https://x.com/auvalabs?s=21'
        },
        {
          name: 'TELEGRAM',
          url: '/'
        },
      ]
    }, {
      img: img_6,
      name: 'Israel B',
      title: 'Developer',
      des: ``,
      social: [
        {
          name: 'LINKEDIN',
          url: 'https://www.linkedin.com/in/israel-benedict-07a4352b4'
        },
        {
          name: 'TWITTER',
          url: 'https://x.com/cynetdev?s=21'
        },
        {
          name: 'TELEGRAM',
          url: '/'
        },
      ]
    }, {
      img: img_7,
      name: 'Ray F',
      title: 'Marketing/ PR',
      des: ``,
      social: [
        {
          name: 'LINKEDIN',
          url: 'https://www.linkedin.com/in/ray-felix'
        },
        {
          name: 'INSTAGRAM',
          url: 'https://www.instagram.com/rayfelix.io/'
        },
        {
          name: 'TELEGRAM',
          url: '/'
        },
      ]
    },
  ]
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  }, []);
  // const prevSlide = () => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //         swiperRef.current.swiper.slidePrev();
  //     }
  // };
  // const nextSlide = () => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //         swiperRef.current.swiper.slideNext();
  //     }
  // };
  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  };
  return (
    <div data-aos="fade-up" data-aos-delay="" data-aos-offset="">
      <Swiper
        className='testimonial-slider'
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          481: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={false}
        loop={true}
        modules={[Pagination, Navigation]}
      >
        {team.map((item, index) => (
          <SwiperSlide key={index}>
            <TeamItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
