import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';

function ScopusIdCard() {

 const [boxOneIsChecked, boxOneSetIsChecked] = useState(false)
  const [boxTwoIsChecked, boxTwoSetIsChecked] = useState(false)
  const [boxThreeIsChecked, boxThreeSetIsChecked] = useState(false)
  // const [finished, setFinished] = useState(false)

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
    <Card>
        <Card.Body>
        <Col>

          <Row xs="auto">

            {boxOneIsChecked === false || boxTwoIsChecked === false || boxThreeIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

            </Row>
        </Col><h4>Scopus IDs</h4>
        <Col>
      <p>Scopus IDs are similar to Researcher IDs, but they are through a different company.</p>
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
                  label={<>1. <a href="https://service.elsevier.com/app/answers/detail/a_id/11240/supporthub/scopus/" target="_blank">Add your ORCID iD to your Scopus author profile</a></>}
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
                  label={<>2. <a href="https://orcid.scopusfeedback.com/#/" target="_blank">Synch to ORCID</a></>}
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
                    label={"3. Review the profile for accuracy. If needed, Edit profile."}
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

export default ScopusIdCard;