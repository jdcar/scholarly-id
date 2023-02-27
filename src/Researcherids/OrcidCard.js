import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';


function OrcidCard() {

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

    const checkBoxOneString = `<p>1. <a href="https://orcid.org/signin" target="_blank">Register for ORCID</a></p>`

  const checkBoxTwoString = `<p>2. <a href="https://orcid.it.northwestern.edu/" target="_blank">Link ORCID to Northwestern</a></p>`



  return (
    <Card>

      <Card.Body>
        <Col>

          <Row xs="auto">

            {/* {checkboxes < 3 &&
            <div><img alt="uncheckmark" src={unCheckMark} /></div>
}
            {checkboxes == 3 &&
            <div><img alt="checkmark" src={CheckMark} /></div>
} */}
            {boxOneIsChecked === false || boxTwoIsChecked === false || boxThreeIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

            </Row>
        </Col>
        <h4>ORCID</h4>
        <Col>
      <p>ORCID is a non-profit that provides identifiers and profiles for researchers.</p></Col>
     <Row xs="auto">
          <Col>

            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    onChange={boxOneHandleOnChange}
                    label={<><p>1. <a href="https://orcid.org/signin" target="_blank">Register for ORCID</a></p></>}
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
                  label={<><p>2. <a href="https://orcid.it.northwestern.edu/" target="_blank">Link ORCID to Northwestern</a></p></>}
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
                    label={"3. Review profile for accuracy. If needed, edit the Web of Science author profile."}
                    onChange={boxThreeHandleOnChange}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default OrcidCard;