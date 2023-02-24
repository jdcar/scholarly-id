import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';

function LinkedIn() {

  const [boxOneIsChecked, boxOneSetIsChecked] = useState(false)
  const [boxTwoIsChecked, boxTwoSetIsChecked] = useState(false)
  const [boxThreeIsChecked, boxThreeSetIsChecked] = useState(false)

  const boxOneHandleOnChange = () => {
    boxOneSetIsChecked(!boxOneIsChecked);
  };

  const boxTwoHandleOnChange = () => {
    boxTwoSetIsChecked(!boxTwoIsChecked);
  };

  const boxThreeHandleOnChange = () => {
    boxThreeSetIsChecked(!boxThreeIsChecked);
  };

  const checkBoxOneString = `<p>1. <a href="https://www.linkedin.com/" target="_blank">Register for a LinkedIn account`

  const checkBoxTwoString = `<p>2. Update the profile`

  return (
    <Card>
      <Card.Body>
        <Col>

          <Row xs="auto">

            {boxOneIsChecked === false || boxTwoIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

            </Row>
        </Col>
        <h4>LinkedIn</h4>
        <Col>
          <p>LinkedIn is a networking site used accross all professions</p>
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
                  //label={}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col>
            <div
              dangerouslySetInnerHTML={{ __html: checkBoxOneString }}
            />
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
                  //label={}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col>
            <div
              dangerouslySetInnerHTML={{ __html: checkBoxTwoString }}
            />
          </Col>
        </Row>
        
      </Card.Body>
    </Card>
  );
}

export default LinkedIn;