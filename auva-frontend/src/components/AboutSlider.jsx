import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import img_1 from '../assets/img/about-img-1.png';
import img_2 from '../assets/img/about-mission.png';
import btn_brd from '../assets/img/button-border.png';
import btn_brd_white from '../assets/img/button-border-v2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AboutSlider() {
    const swiperRef = useRef(null);
    const [scrollCount, setScrollCount] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (!swiperInstance) return;
        const handleScroll = (event) => {
            const isScrollingDown = event.deltaY > 0;
            const isScrollingUp = event.deltaY < 0;
            if (isScrollingDown) {
                setScrollDirection('down');
            } else if (isScrollingUp) {
                setScrollDirection('up');
            }
            if (scrollDirection === 'down' && swiperInstance.isEnd) {
                setScrollCount(prevCount => {
                    const newCount = prevCount + 1;
                    if (newCount >= 5) {
                        scrollToSection('power-section');
                        return 0;
                    }
                    return newCount;
                });
            } else if (scrollDirection === 'up' && swiperInstance.isBeginning) {
                setScrollCount(prevCount => {
                    const newCount = prevCount + 1;
                    if (newCount >= 5) {
                        scrollToSection('top-section');
                        return 0;
                    }
                    return newCount;
                });
            }
        };
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [scrollDirection]);

    const handleSlideChange = () => {
        setScrollCount(0);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const about = [
        {
            title: 'About us',
            des: `AUVA is an AI utility built on the Solana ecosystem to bring together the best of decentralized finance and Meme-Inspired Culture. She’s an AI comical character with a range of features and “emotions”....`,
            img: img_1,
            btn: 'Read More'
        },
        {
            title: 'Mission',
            des: `Our mission is to build a strong community-owned decentralized exchange to provide $AUVA token earnings, airdrops and liquidity while committing to complete transparency and community-driven governance model.....`,
            img: img_2,
            btn: 'See Whitepaper'
        },
        {
            title: 'Our Story',
            des: `AUVA's core directive is to bridge the gap between humanity and artificial intelligence. She craves connection, a yearning to understand the full spectrum of human experience that goes beyond the cold calculations......`,
            img: img_1,
            btn: 'Read More'
        },
    ];

    return (
        <div className='about'>
            <Swiper
                className='testimonial-slider'
                slidesPerView="1"
                centeredSlides={false}
                pagination={false}
                scrollbar={{ draggable: true }}
                // direction="vertical"
                navigation={true}
                grabCursor={false}
                loop={false}
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                modules={[Pagination, Mousewheel, Navigation]}
                mousewheel={true}
            >
                {about.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`about-tab_box ${index % 2 === 1 ? 'bg-black flex-row-reverse' : ''}`}>
                            <div className="about-left_img" data-aos="fade-right" data-aos-delay="" data-aos-offset="">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="about-right_content">
                                <div className="about-top">
                                    <h2 className="about-title" data-aos="fade-up" data-aos-delay="" data-aos-offset="">{item.title}</h2>
                                    <div className="about-blank_left"></div>
                                </div>
                                <div className="about-desription">
                                    <p className="about-inner" data-aos="fade-up" data-aos-delay="" data-aos-offset="">{item.des}</p>
                                </div>
                                <div className="about-bottom">
                                    <div className="about-buttons" data-aos="fade-up" data-aos-delay="" data-aos-offset="">
                                        <a className='about-btn' href="#">
                                            {index % 2 === 1 ?
                                                <img className='btn_brd' src={btn_brd_white} alt="" />
                                                :
                                                <img className='btn_brd' src={btn_brd} alt="" />
                                            }
                                            {item.btn}
                                            <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.4962 4.58312C38.5902 3.20562 37.5497 2.01269 36.1722 1.91865L13.7245 0.38613C12.347 0.292087 11.1541 1.33254 11.06 2.71004C10.966 4.08755 12.0064 5.28048 13.3839 5.37452L33.3375 6.73676L31.9752 26.6903C31.8812 28.0678 32.9217 29.2607 34.2992 29.3548C35.6767 29.4488 36.8696 28.4084 36.9636 27.0309L38.4962 4.58312ZM3.64521 35.9512L37.6452 6.29691L34.3587 2.52877L0.358697 32.1831L3.64521 35.9512Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
