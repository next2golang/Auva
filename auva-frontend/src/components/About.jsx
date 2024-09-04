import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ASlider from "./AboutSlider"


export default function About() {

  return (
    <div className='about'>
      <Container fluid className="g-0">
        <Row>
          <Col xs={12}>
            <ASlider />
          </Col>
        </Row>
      </Container>

    </div>
  )
}
