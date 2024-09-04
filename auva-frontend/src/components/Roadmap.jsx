import { Col, Container, Row } from 'react-bootstrap'
import CommonTitle from "../components/CommonTitle"

export default function Roadmap() {
  const roadmapcards = [
    {
      title: "Phase I",
      subtitle: "Q1 2025",
      des: [
        "Community Building on Twitter, Discord and Reddit",
        "Token Launch/ Presale",
        "Listing on DEX platforms including Pancakeswap, Uniswap and Jupiter",
        "VC Pre Seed Funding and community crowdfunding on Seedr"
      ]
    },
    {
      title: "Phase I",
      subtitle: "Q1 2025",
      des: [
        "Listing on Major CEX including Binance, OKX, MEXC and Bybit",
        "Partnership with OKX and CoinBase Wallet",
        "Multiple promotions and PR exposure",
        "Series A funding"
      ]
    },
    {
      title: "Phase I",
      subtitle: "Q1 2025",
      des: [
        "Launch of community decentralized exchange for trading CPU/GPU resources",
        "Integration with DeFi Platforms & cloud computing service providers ",
        "Collaboration with companies as Nvidia and AMD ",
        "Allow for community to develop and improve on project code lines and app functionalities."
      ]
    },
    {
      title: "Phase I",
      subtitle: "Q1 2025",
      des: [
        "Series B & C fundraising",
        "Launch of subsidiary apps on the platform as AUVA Games, Socials and AI chat.",
        "Exploration of NFT Integration and other smart contract assets",
        "Global Outreach and Mainstream Media"
      ]
    },
  ]
  return (
    <div className='roadmap position-relative z-0'>
      <div className="toplinebar1 position-absolute z-1"></div>
      <div className="toplinebar2 position-absolute z-1"></div>
      <div className="topline1 position-absolute z-1"></div>
      <div className="topline2 position-absolute z-1"></div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} lg={4} >
            <div className='roadmap-heading text-center' data-aos="fade-up" data-aos-delay="" data-aos-offset="">
              <CommonTitle title="Roadmap" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="roadmap-line w-100 mb-4 mb-md-0"></div>
      <Container fluid>
        <Row className='g-0'>
          {roadmapcards.map((item, idx) => (
              <Col xs={12} md={6} lg={3} className='roadmap-cards' key={idx} data-aos="fade-up" data-aos-delay={`${idx+1}00`} data-aos-offset="">
                <div className={`roadmap-cards-card mb-3 mb-lg-0 `}>
                  <h5 className='mb-3 mb-md-4'>{item.title}</h5>
                  <span>Q{idx+1} 2025</span>
                  {item?.des.map((itm,idd)=>
                    <li className='d-flex align-items-center gap-2' key={idd}>
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.7" d="M24.502 2.23999L12.4445 16.1857L7.49238 11.1935M7.00793 16.24L2.00195 11.1935M19.0115 2.23999L12.1754 10.1625" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                    {itm}
                  </li>)
                  }
                </div>
              </Col>
            ))}
        </Row>
      </Container>
      <div className="roadmap-line w-100"></div>
      <div className="bottomline1 position-absolute z-1"></div>
      <div className="bottomline2 position-absolute z-1"></div>
    </div>
  )
}
