import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';
import Alerts from '../Alerts/Alerts';

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

  
  return (
    <Card className="text-start">

      <Card.Body >
        <h4 className="text-center">ORCID</h4>
         
            {boxOneIsChecked === false || boxTwoIsChecked === false || boxThreeIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

          <p>ORCID is a non-profit that provides identifiers and profiles for researchers.</p>

            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    onChange={boxOneHandleOnChange}
                    label={<>1. <a href="https://orcid.org/signin" target="_blank">Register for ORCID</a></>}
                  />
                </div>
              ))}
            </Form>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    onChange={boxTwoHandleOnChange}
                    label={<>2. <a href="https://orcid.it.northwestern.edu/" target="_blank">Link ORCID to Northwestern</a></>}
                  />
                </div>
              ))}
            </Form>

            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={<>3. Fill in ORCID profile and review for accuracy.
                    </>}
                    onChange={boxThreeHandleOnChange}
                  />
                </div>
              ))}
            </Form>
      </Card.Body>
      <Alerts/>

    </Card>
  );
}

export default OrcidCard;