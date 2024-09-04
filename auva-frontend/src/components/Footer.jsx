import { Col, Container, Row } from "react-bootstrap";
import footerright from "../assets/img/footer-right.png"
import Social from "../components/Social"
import { Link } from 'react-scroll';


export default function Footer() {
  const fNavLink = [
    {
      btn_title: 'Pitch Deck',
      to: 'banner'
    },
    {
      btn_title: 'Brand Assets',
      to: 'about'
    },
    {
      btn_title: 'Waitlist',
      to: 'tokenomics'
    },
    {
      btn_title: 'Roadmap',
      to: 'roadmap'
    },
    {
      btn_title: 'Legal Disclaimer',
      to: 'meet'
    },
    {
      btn_title: 'Tokenomics',
      to: 'meet'
    },
  ];
  return (
    <div className="footer">
      <div className="footer-wrap position-relative z-0">
        <span className="reactangle1 position-absolute z-1"></span>
        <span className="reactangle2 position-absolute z-1"></span>
        <Container fluid>
          <div className="footer-content d-flex flex-sm-column flex-md-row justify-content-between align-items-center">
            <div className="footer-blankleft"></div>
            <div className="footer-content-middle text-center">
              <h2>Join Our Community</h2>
              <div className="icon d-flex justify-content-center m-auto">
                <Social />
              </div>
            </div>
            <div className="footer-content-right">
              <div className="imageright">
                <img src={footerright} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-copy_right">
        <Container>
          <Row>
            <Col>
              <div className="footer-copy_link">
                <ul className="d-lg-flex d-md-flex text-sm-center justify-content-center">
                  {fNavLink.map((link, index) => (
                    <li key={index} className='d-block'>
                      <Link className="heading-link text-capitalize" to={link.to} spy={true} smooth={true} duration={600} offset={0} onClick={() => handleTouchStart(link.to)}>{link.btn_title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copy_text">
          <Container>
            <Row>
              <Col>
                <ul className="d-lg-flex d-md-flex text-sm-center justify-content-between">
                  <li>
                    <a href="#">Provide feedback for support requests.</a>
                  </li>
                  <li>
                    2024©AUVA LLC
                  </li>
                  <li>
                    <a href="mailto:hello@auvacommunity.io">Email :  hello@auvacommunity.io</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}
