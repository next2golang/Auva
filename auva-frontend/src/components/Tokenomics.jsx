import React from 'react'
import tok_img from '../assets/img/about-img-1.png'

export default function Tokenomics() {
  return (
    <div className="tokenomics"  id="power-section">
      <div className="tokenomics-border"></div>
      <div className="tokenomics-inner">
        <div className="tokenomics-heading" data-aos="fade-up" data-aos-delay="" data-aos-offset="">
          <h2>$AUVA TOKENOMICS</h2>
        </div>
        <div className="tokenomics-main_box">
          <div className="box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="">
            <h3>Marketing 15%</h3>
            <p>Presale 15%</p>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="200" data-aos-offset="">
            <h3>Airdrop - 6%</h3>
            <p>Incentives & Ecosystem</p>
            <p>Growth - 14%</p>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="300" data-aos-offset="">
            <h3>Total Supply</h3>
            <p>850,000,000</p>
            <p>Tokens</p>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="400" data-aos-offset="">
            <h3>CEX & DEX Liquidity 40%</h3>
            <p>Team- 10%</p>
          </div>
          <img className='tokenomics-medel_img' src={tok_img} alt="" />
        </div>
      </div>
    </div>
  )
}
