import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';

function ResearchGate() {

  const [boxOneIsChecked, boxOneSetIsChecked] = useState(false)
  const [boxTwoIsChecked, boxTwoSetIsChecked] = useState(false)

  const boxOneHandleOnChange = () => {
    boxOneSetIsChecked(!boxOneIsChecked);
  };

  const boxTwoHandleOnChange = () => {
    boxTwoSetIsChecked(!boxTwoIsChecked);
  };

  return (
    <Card>
      <Card.Body>
        <Col>

          <Row xs="auto">

            {boxOneIsChecked === false || boxTwoIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

            </Row>
        </Col>
        <h4>ResearchGate</h4>
        <Col>
          <p>ResearchGate is a networking site specifically for academics</p>
        </Col>
        <Row xs="auto">
          <Col>

            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    onChange={boxOneHandleOnChange}
                  label={<>1. <a href="https://www.ResearchGate.net/" target="_blank">Register for a ResearchGate account</a></>}
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>
        <Row xs="auto">
          <Col>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    onChange={boxTwoHandleOnChange}
                  label={<>2. Update the profile</>}
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ResearchGate;