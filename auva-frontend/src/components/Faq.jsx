import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import CommonTitle from './CommonTitle';

export default function Faq() {
  const faq = [
    {
      title: 'Title',
      des: `<p>des</p>`,
    },
    {
      title: 'Title',
      des: `<p>des</p>`,
    },
    {
      title: 'Title',
      des: `<p>des</p>`,
    },
    {
      title: 'Title',
      des: `<p>des</p>`,
    },
  ]
  return (
    <div className="faq common-padding position-relative z-1">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <CommonTitle title="FAQS" des="Frequently Asked Questions" />
          </Col>
          <Col xs={12} md={10}>
            <Accordion defaultActiveKey={0}>
              {faq.map((item, index) => (
                <Accordion.Item eventKey={index} key={index} data-aos="fade-up" data-aos-duration={`1200`} data-aos-delay={`${index+1}00`}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body dangerouslySetInnerHTML={{ __html: item.des }}></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
