import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react';

import Icon1 from "../assets/img/token-icon1.svg"
import Icon2 from "../assets/img/token-icon2.svg"
import border_v2 from '../assets/img/button-border-v2.png'

import p_img_1 from '../assets/img/payment/1.png'
import p_img_2 from '../assets/img/payment/2.png'
import p_img_3 from '../assets/img/payment/3.png'
import p_img_4 from '../assets/img/payment/4.png'
import p_img_5 from '../assets/img/payment/5.png'
import p_img_6 from '../assets/img/payment/6.png'
import p_img_7 from '../assets/img/payment/7.png'
import p_img_8 from '../assets/img/payment/8.png'
import p_img_9 from '../assets/img/payment/9.png'
import p_img_10 from '../assets/img/payment/10.png'
import p_img_11 from '../assets/img/payment/11.png'
import p_img_12 from '../assets/img/payment/12.png'
import p_img_13 from '../assets/img/payment/13.png'
import p_img_14 from '../assets/img/payment/14.png'
import p_img_15 from '../assets/img/payment/auva.png'

export default function TokenSection() {
  const endDate = "2024-08-28";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const paymentMethods = [
    {
      icon: p_img_1,
      name: 'Solana',
      token_address: '7XhSWUo383WrD45kQwLhzqRVYgG5yDj6CDTMszUigG9z'
    },
    {
      icon: p_img_2,
      name: 'Dogecoin',
      token_address: 'DGpn5b923H3hAgp87bK8vF2Xq9sRuXy377'
    },
    {
      icon: p_img_3,
      name: 'BNB Smart Chain',
      token_address: '0x3231C1Aadf26E03058530Bb481Bc221fc5253F3a'
    },
    {
      icon: p_img_4,
      name: 'Ethereum',
      token_address: '0xc25648AA3824AEb7D416AF33f5a11242475660Dc'
    },
    {
      icon: p_img_5,
      name: 'Arbitrnm',
      token_address: '0x3231C1Aadf26E03058530Bb481Bc221fc5253F3a'
    },
    {
      icon: p_img_6,
      name: 'Polygon',
      token_address: '0xc25648AA3824AEb7D416AF33f5a11242475660Dc'
    },
    // {
    //   icon: p_img_7,
    //   name: 'Avalanche',
    //   token_address: 'xxxxxxxxxxxxxxxxxxxxx'
    // },
    // {
    //   icon: p_img_8,
    //   name: 'Base',
    //   token_address: 'xxxxxxxxxxxxxxxxxxxxx'
    // },
    {
      icon: p_img_9,
      name: 'Linea',
      token_address: '0x3231C1Aadf26E03058530Bb481Bc221fc5253F3a'
    },
    {
      icon: p_img_10,
      name: 'Optimism',
      token_address: '0x3231C1Aadf26E03058530Bb481Bc221fc5253F3a'
    },
    {
      icon: p_img_11,
      name: 'Zksync',
      token_address: '0x3231C1Aadf26E03058530Bb481Bc221fc5253F3a'
    },
    // {
    //   icon: p_img_12,
    //   name: 'Blast',
    //   token_address: 'xxxxxxxxxxxxxxxxxxxxx'
    // },
    {
      icon: p_img_13,
      name: 'Tron',
      token_address: 'TSQS9M4K9it2rfyYEstDN8xraahZUJr1S5'
    },
    {
      icon: p_img_14,
      name: 'Bitcoin',
      token_address: 'bc1qh3qp50w7g0kya6fjwvhchjw8kepwfra35kv06j'
    },
  ]

  const [selected, setSelected] = useState({
    icon: paymentMethods[3].icon,
    name: paymentMethods[3].name
  })

  const [isPopup, setIsPopup] = useState(false);
  const paymentHandleChange = (e) => {
    setSelected(e);
    setIsPopup(!isPopup)
    setTokenModal(!tokenModal)
    setSelectedTwo(e)
  }

  const [tokenModal,setTokenModal] = useState(false)
  const [popupTwo, setPopupTwo] = useState(false)

  const [selectedTwo, setSelectedTwo] = useState({
    icon: paymentMethods[0].icon,
    name: paymentMethods[0].name,
  })

  const [activeToken, setActiveToken] = useState(paymentMethods[0].token_address);
  const [isCopied, setIsCopied] = useState(false)

  const copyHandle = () => {
    navigator.clipboard.writeText(activeToken);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false)
    }, 3000);
    setTimeout(() => {
      setTokenModal(!tokenModal)
    },1000)
  }

  const setCopyToken = (e) => {
    setSelectedTwo(e);
    setActiveToken(e.token_address)
    setPopupTwo(!popupTwo)
    setSelected(e)
  }

  return (
    <div className='token'>
      <div className="token-section position-relative z-1">
        <div className="token-section-top position-absolute z-1 top-0 "></div>
        <div className="token-section-middle position-absolute z-1 end-0 top-50 translate-middle-y"></div>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} lg={6} xl={5} className='mb-3 mb-lg-0'>
              <div className="position-relative z-1">
                <div className="token-content text-center">
                  <p className='title text-center mb-4 pb-md-1'>Buy auva tokens</p>
                  <div className="date-section d-flex align-items-center gap-3 gap-md-4 justify-content-center mb-3 pb-md-1">
                    {Object.entries(timeLeft).map(([unit, value], index) => (
                      <div className="cricle" key={index}>
                        <div className="cricle2 d-flex flex-column align-items-center justify-content-center">
                          <span>{value}</span>
                          <p className='text-capitalize'>{unit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="line w-100 mb-3 mb-md-4">
                    <div className="line-bar">
                      <div className="line-bar-end"><p>UNTIL PRICE INCREASE</p></div>
                    </div>
                  </div>
                  <div className="token-body text-center mb-3 pb-md-1">
                    <p className='title mb-2 pb-md-1'>USDT RAISED : $0,014,715.06  / $5,000,000</p>
                    <p className='value mb-2 pb-md-1  d-flex align-items-center gap-2  justify-content-center'>Your purchased AUVA20 = 0
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9544 18.6569C15.5568 18.6569 19.2878 14.9259 19.2878 10.3236C19.2878 5.72119 15.5568 1.99023 10.9544 1.99023C6.35205 1.99023 2.62109 5.72119 2.62109 10.3236C2.62109 14.9259 6.35205 18.6569 10.9544 18.6569Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.9531 13.6566V10.3232" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.9531 6.98975H10.9615" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>
                    <p className='value mb-3 pb-md-1 d-flex align-items-center gap-2 justify-content-center'>Your stakeable AUVA20 = 0
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9544 18.6569C15.5568 18.6569 19.2878 14.9259 19.2878 10.3236C19.2878 5.72119 15.5568 1.99023 10.9544 1.99023C6.35205 1.99023 2.62109 5.72119 2.62109 10.3236C2.62109 14.9259 6.35205 18.6569 10.9544 18.6569Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.9531 13.6566V10.3232" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.9531 6.98975H10.9615" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>
                    <p className='subtitle'>$AUVA = $0.00022</p>
                  </div>
                  <div className="select-area mb-4 pb-md-2">
                    <div className="payment position-relative z-1">
                      <div onClick={() => setIsPopup(!isPopup)} className="payment-btn d-flex align-items-center justify-content-between">
                        <div className='d-flex align-items-center gap-2 gap-lg-3'>
                          <img src={selected.icon} alt="" />
                          <span>{selected.name}</span>
                        </div>
                        {isPopup ? <IoIosArrowUp className='h4 mb-0' /> : <IoIosArrowDown className='h4 mb-0' />}
                      </div>
                      {isPopup &&
                        <div className="payment-dropdown position-absolute top-100 start-0 w-100 d-flex align-items-center flex-wrap">
                          {paymentMethods.map((item, index) => (
                            <div onClick={() => paymentHandleChange(item)} className="payment-item d-flex align-items-center gap-2" key={index}>
                              <img className='me-1' src={item.icon} alt="" />
                              <span>{item.name}</span>
                            </div>
                          ))}
                        </div>
                      }
                    </div>
                  </div>
                  <div className="input-area mb-3 pb-xl-3 d-flex align-items-center gap-3">
                    <div className="input-area-text w-100">
                      <div className='d-flex'>
                        <p className=' mb-2'>Pay with ETH</p>
                      </div>
                      <div className='position-relative z-0'>
                        <input className='w-100' type="text" placeholder='0' />
                        <img className="position-absolute z-1 end-0 top-50 translate-middle-y me-3 me-md-4 " src={Icon1} alt="" />
                      </div>
                    </div>
                    <div className="input-area-text w-100">
                      <p className='text-start mb-2'>Play your reveive</p>
                      <div className='position-relative z-0'>
                        <input className='w-100' type="text" placeholder='0' />
                        <img className="position-absolute z-1 end-0 top-50  translate-middle-y me-3 me-md-4" src={Icon2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="btn-area d-flex align-items-center  gap-3 gap-xl-4">
                    <a className="btn w-100 text-center">CONNECT WALLET</a>
                    <a className="btn w-100 text-center">Buy with BNB</a>
                  </div>
                  <div className="mt-3 mt-md-4 pt-lg-1">
                    <a href="#" className='h4 fw-semibold lh-base text-black text-decoration-underline'>Don’t have a wallet</a>
                  </div>
                </div>
                {tokenModal&&
                <div className="payment-chain position-absolute top-0 start-0 w-100 h-100 z-2">
                  <div className="mb-3">
                    <label htmlFor="#" className='fs-6 mb-2 pb-1 fw-medium text-white'>Select Chain</label>
                    <div className="payment position-relative z-1">
                      <div onClick={() => setPopupTwo(!popupTwo)} className="payment-btn z-n1 d-flex align-items-center justify-content-between">
                        <div className='d-flex align-items-center gap-2 gap-lg-3'>
                          <img src={selectedTwo.icon} alt="" />
                          <span>{selectedTwo.name}</span>
                        </div>
                        {popupTwo ? <IoIosArrowUp className='h4 mb-0' /> : <IoIosArrowDown className='h4 mb-0' />}
                      </div>
                      {popupTwo &&
                        <div style={{ backgroundColor: '#141319' }} className="payment-dropdown z-n1 position-absolute top-100 start-0 w-100 d-flex align-items-center flex-wrap">
                          {paymentMethods.map((item, index) => (
                            <div onClick={() => setCopyToken(item)} className="payment-item d-flex align-items-center gap-2" key={index}>
                              <img className='me-1' src={item.icon} alt="" />
                              <span>{item.name}</span>
                            </div>
                          ))}
                        </div>}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap flex-md-nowrap gap-3 mb-3">
                    <div className="w-100">
                      <label htmlFor="#" className='fs-6 mb-2 pb-1 fw-medium text-white'>You Pay</label>
                      <div className="chain-item">
                        <div className="payment-btn px-3 d-flex align-items-center justify-content-between">
                          <div className='d-flex align-items-center gap-2 gap-lg-3'>
                            <img src={selectedTwo.icon} alt="" />
                            <span>{selectedTwo.name}</span>
                          </div>
                        </div>
                        <h4 className='m-0 mt-3'>Enter Amount</h4>
                      </div>
                    </div>
                    <div className="w-100">
                      <label htmlFor="#" className='fs-6 mb-2 pb-1 fw-medium text-white'>You Recieve</label>
                      <div className="chain-item">
                        <div className="payment-btn px-3 d-flex align-items-center justify-content-between">
                          <div className='d-flex align-items-center gap-2 gap-lg-3'>
                            <img src={p_img_15} alt="" />
                            <span>AUVA</span>
                          </div>
                        </div>
                        <div className='mt-3'>
                          <input className='mb-0 h4 bg-transparent border-0 p-0' defaultValue={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <a href="#" className='btn bg-primary rounded-3 d-block'>Connect Your Wallet</a>
                  </div>
                  <div className="chain-item mb-3">
                    <p className='fs-6 lh-base text-white mb-2'>You Can Also Make A Purchase By Sending SOL, USDT Or USDC Directly To The Solana Address From Your Web3 Wallet</p>
                    <div className="chain-copy position-relative">
                      <p className='fs-6 lh-base text-white'>{activeToken}</p>
                      <button onClick={() => copyHandle()} className="btn bg-primary rounded-3 position-absolute top-50 translate-middle-y end-0 me-1">{isCopied?'Copied':'Copy'}</button>
                    </div>
                  </div>
                  <a href="#" className="btn bg-transparent text-white text-decoration-underline d-block rounded-3">Transaction History</a>
                </div>}
              </div>
            </Col>
            <Col xs={12} lg={6} xl={7}>
              <div className="token-text">
                <div className="token-text-first">
                  <p className='mb-2'>AUVA is an AI utility built on the Solana ecosystem to bring together the best of decentralized finance and Meme-Inspired Culture.</p>
                  <p className='mb-3 mb-xl-4'>The AUVA Ecosystem is a community-governed ecosystem that aims to create a culture/ brand as a meme token that has real-world use cases with developers creating utilities that drive innovation.</p>
                  <div className='pt-4'>
                    <a href='#' className="about-btn text-white d-flex align-items-center gap-3 w-25">
                      <img src={border_v2} alt="" className="btn_brd" />
                      Pitch Deck<MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
                <div className="token-text-secend mt-4 mt-lg-0">
                  <p className='mb-2 ' >It all started as an idea for a comic book based on the sci-fi movie “GHOST IN THE SHELL” starred by SCARLETT JOHANSON.AUVA was created as a caricature of the hero of the “GHOST IN THE SHELL” sci-fi movie.</p>
                  <p className='mb-2' >We want to create utilities that bridges Meme- Inspired Culture with Decentralized Apps/ Utilities rewarding users and developers to interact and build on the AUVA ecosystem.</p>
                  <p className='mb-3 mb-xl-4'>It transcended from being a mere comic character to being a token governed and control by all in the community.</p>
                  <div className="btns-item d-flex align-items-center gap-4 pt-4">
                    <a href='#' className="about-btn text-white d-flex align-items-center gap-3">
                      <img src={border_v2} alt="" className="btn_brd" />
                      Whitepaper<MdOutlineArrowOutward />
                    </a>
                    <a href='#' className="about-btn d-flex align-items-center gap-3">
                      <img src={border_v2} alt="" className="btn_brd" />
                      Audit<MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
