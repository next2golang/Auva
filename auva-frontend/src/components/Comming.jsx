import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import card1 from "../assets/img/scards1.png"
import card2 from "../assets/img/scards2.png"
import card3 from "../assets/img/scards3.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Comming() {
    const comingcards = [
        {
            title: "DEX marketplace for cloud computing resources",
            des: "Earn up to 160% in $AUVA and $SOL tokens trading your idle computer resource.",
            image: card1
        },
        {
            title: "NFT Marketplace Integration ",
            des: "Create NFTs, build your community and create tokens. Earn and trade commission free.",
            image: card2
        },
        {
            title: "AUVA Staking",
            des: "Earn up to 400%, when  you stake your $AUVA tokens, enjoy new and unique features coming to the $AUVA staking platform.",
            image: card3
        },
        {
            title: "DEX marketplace for cloud computing resources",
            des: "Earn up to 160% in $AUVA and $SOL tokens trading your idle computer resource.",
            image: card1
        },
        {
            title: "NFT Marketplace Integration ",
            des: "Create NFTs, build your community and create tokens. Earn and trade commission free.",
            image: card2
        },
        {
            title: "AUVA Staking",
            des: "Earn up to 400%, when  you stake your $AUVA tokens, enjoy new and unique features coming to the $AUVA staking platform.",
            image: card3
        },
    ]
    return (
        <div className="comming position-relative z-0">

            <div className="comming-border"></div>
            <div className="comming-title" data-aos="fade-up" data-aos-delay="" data-aos-offset="">
                <h2>Upcoming Projects</h2>
            </div>
            <Container fluid>
                <div className="comming-swiper" data-aos="fade-up" data-aos-delay="" data-aos-offset="">
                    <Swiper
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
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {comingcards.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="comming-swiper-cards">
                                        <div className="image"><img src={item.image} alt="" /></div>
                                        <div className="cards-body">
                                            <h6 className="text-start">{item.title}</h6>
                                            <p className="text-start">{item.des}</p>
                                            <a href="#" className="d-flex align-items-center gap-1">
                                                Learn More
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.06044 2.70148L2.33093 2.70148C2.06204 2.69681 1.80573 2.58671 1.61723 2.3949C1.42872 2.20309 1.32309 1.94491 1.32309 1.67597C1.32309 1.40704 1.42872 1.14886 1.61723 0.957048C1.80573 0.765236 2.06203 0.655137 2.33093 0.650463L10.5365 0.650464C10.6712 0.650078 10.8048 0.67634 10.9294 0.72774C11.054 0.77914 11.1672 0.854664 11.2625 0.949968C11.3578 1.04527 11.4333 1.15848 11.4847 1.28307C11.5361 1.40767 11.5624 1.54119 11.562 1.67597L11.562 9.88151C11.5534 10.1478 11.4416 10.4002 11.2502 10.5855C11.0588 10.7708 10.8029 10.8743 10.5365 10.8742C10.2701 10.8741 10.0142 10.7704 9.82293 10.585C9.63167 10.3996 9.52004 10.147 9.51168 9.88078L9.51168 4.15127L2.55939 11.1036C2.36704 11.2959 2.10615 11.404 1.83413 11.404C1.56211 11.404 1.30123 11.2959 1.10888 11.1036C0.916527 10.9112 0.808466 10.6503 0.808466 10.3783C0.808466 10.1063 0.916527 9.8454 1.10888 9.65305L8.06044 2.70148Z" fill="white" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
                <div className="d-flex justify-content-center m-auto ">
                    <a href="#" className="website d-flex align-items-center text-center justify-content-center">
                        Join The Waitlist
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6516 3.9189L3.05946 3.9189C2.65622 3.9119 2.27186 3.74679 1.98917 3.45914C1.70648 3.1715 1.54808 2.78433 1.54808 2.38102C1.54808 1.97772 1.70648 1.59055 1.98917 1.3029C2.27186 1.01526 2.65622 0.850151 3.05946 0.843142L15.3647 0.843143C15.5668 0.842564 15.767 0.881948 15.9539 0.959029C16.1407 1.03611 16.3105 1.14937 16.4534 1.29229C16.5963 1.43521 16.7096 1.60497 16.7867 1.79182C16.8638 1.97866 16.9031 2.1789 16.9026 2.38102L16.9026 14.6862C16.8897 15.0855 16.7221 15.4641 16.4351 15.742C16.148 16.0198 15.7642 16.1751 15.3647 16.175C14.9652 16.1748 14.5815 16.0193 14.2947 15.7412C14.0078 15.4632 13.8404 15.0844 13.8279 14.6852L13.8279 6.09304L3.40206 16.5189C3.1136 16.8073 2.72238 16.9694 2.31445 16.9694C1.90651 16.9694 1.51529 16.8073 1.22684 16.5189C0.938384 16.2304 0.776333 15.8392 0.776333 15.4313C0.776333 15.0233 0.938383 14.6321 1.22684 14.3437L11.6516 3.9189Z" fill="black" />
                        </svg>
                    </a>
                </div>
            </Container>
        </div>
    )
}
