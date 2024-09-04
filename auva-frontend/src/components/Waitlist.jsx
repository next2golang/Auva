import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import card_img from '../assets/img/waitlist-box.png'

export default function Waitlist() {
  const waitlist = [
    {
      img: card_img,
      title: 'AI-Driven and Meme-inspired Culture',
      dsc: `A  AUVA is an AI utility built on the Solana ecosystem to bring together the best of decentralized finance..`,
      link: 'E-mail',
      link_2: 'Join Waitlist',
    },
    {
      img: card_img,
      title: 'AI-Driven and Meme-inspired Culture',
      dsc: `A  AUVA is an AI utility built on the Solana ecosystem to bring together the best of decentralized finance..`,
      link: 'E-mail',
      link_2: 'Join Waitlist',
    },
    {
      img: card_img,
      title: 'AI-Driven and Meme-inspired Culture',
      dsc: `A  AUVA is an AI utility built on the Solana ecosystem to bring together the best of decentralized finance..`,
      link: 'E-mail',
      link_2: 'Join Waitlist',
    }
  ]
  return (
    <div className="waitlist">
      <div className="waitlist-border"></div>
      <div className="waitlist-title">
        <h2>Join The Waitlist</h2>
      </div>
      <Container>
        <Row xs={1} md={3} className="g-4 g-md-2 g-lg-4">
          {waitlist.map((item, index,) => (
            <Col >
              <div className="waitlist-wraper">
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.dsc}
                    </Card.Text>
                    <Card.Link href="#">{item.link} <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M7.5483 2.48043L1.96216 2.48043C1.69999 2.47587 1.4501 2.36853 1.26631 2.18151C1.08252 1.9945 0.979534 1.74278 0.979534 1.48058C0.979534 1.21837 1.08252 0.966654 1.26631 0.779642C1.4501 0.59263 1.69999 0.485285 1.96216 0.480729L9.96236 0.480729C10.0938 0.480353 10.224 0.505958 10.3454 0.556072C10.4669 0.606186 10.5773 0.67982 10.6702 0.77274C10.7631 0.865659 10.8368 0.976031 10.8869 1.09751C10.937 1.21899 10.9626 1.34917 10.9622 1.48058L10.9622 9.48078C10.9539 9.74037 10.8449 9.98652 10.6583 10.1672C10.4717 10.3478 10.2221 10.4488 9.96237 10.4487C9.70266 10.4486 9.45316 10.3474 9.26669 10.1667C9.08021 9.9859 8.97138 9.73967 8.96322 9.48008L8.96322 3.89393L2.18489 10.6723C1.99736 10.8598 1.743 10.9652 1.47779 10.9652C1.21257 10.9652 0.958217 10.8598 0.770681 10.6723C0.583145 10.4847 0.477788 10.2304 0.477788 9.96515C0.477788 9.69994 0.583144 9.44558 0.770681 9.25805L7.5483 2.48043Z" fill="white" />
                    </svg></Card.Link>
                    <Card.Link href="#">{item.link_2}<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M7.5483 2.48043L1.96216 2.48043C1.69999 2.47587 1.4501 2.36853 1.26631 2.18151C1.08252 1.9945 0.979534 1.74278 0.979534 1.48058C0.979534 1.21837 1.08252 0.966654 1.26631 0.779642C1.4501 0.59263 1.69999 0.485285 1.96216 0.480729L9.96236 0.480729C10.0938 0.480353 10.224 0.505958 10.3454 0.556072C10.4669 0.606186 10.5773 0.67982 10.6702 0.77274C10.7631 0.865659 10.8368 0.976031 10.8869 1.09751C10.937 1.21899 10.9626 1.34917 10.9622 1.48058L10.9622 9.48078C10.9539 9.74037 10.8449 9.98652 10.6583 10.1672C10.4717 10.3478 10.2221 10.4488 9.96237 10.4487C9.70266 10.4486 9.45316 10.3474 9.26669 10.1667C9.08021 9.9859 8.97138 9.73967 8.96322 9.48008L8.96322 3.89393L2.18489 10.6723C1.99736 10.8598 1.743 10.9652 1.47779 10.9652C1.21257 10.9652 0.958217 10.8598 0.770681 10.6723C0.583145 10.4847 0.477788 10.2304 0.477788 9.96515C0.477788 9.69994 0.583144 9.44558 0.770681 9.25805L7.5483 2.48043Z" fill="white" />
                    </svg></Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="waitlist-border_bottom"></div>
    </div>
  )
}
