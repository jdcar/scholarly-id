import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';


function GoogleCard() {

 const [boxOneIsChecked, boxOneSetIsChecked] = useState(false)
  const [boxTwoIsChecked, boxTwoSetIsChecked] = useState(false)
  const [boxThreeIsChecked, boxThreeSetIsChecked] = useState(false)
  const [boxFourIsChecked, boxFourSetIsChecked] = useState(false)
  const [boxFiveIsChecked, boxFiveSetIsChecked] = useState(false)


  const boxOneHandleOnChange = () => {
    boxOneSetIsChecked(!boxOneIsChecked);
  };

  const boxTwoHandleOnChange = () => {
    boxTwoSetIsChecked(!boxTwoIsChecked);
  };

  const boxThreeHandleOnChange = () => {
    boxThreeSetIsChecked(!boxThreeIsChecked);
  };

  const boxFourHandleOnChange = () => {
    boxFourSetIsChecked(!boxFourIsChecked);
  };

  const boxFiveHandleOnChange = () => {
    boxFiveSetIsChecked(!boxFiveIsChecked);
  };

  return (
    <Card className="text-start">

      <Card.Body>

      <h4 className="text-center">Google</h4>

            {boxOneIsChecked === false || boxTwoIsChecked === false || boxThreeIsChecked === false || boxFourIsChecked === false || boxFiveIsChecked === false? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    onChange={boxOneHandleOnChange}
                  label={<>1. Open an incognito window and <a href="https://google.com" target="_blank">Google your name</a></>}
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
                  label={<>2. Note if there are old social media sites you know longer use appearing in the first two pages of results.</>}
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
                    label={<>3. Mute or delete old and unused social media pages or blogs (Facebook, Tumblr, Instagram, Goodreads, Friendster, MySpace, GeoCities, etc.)</>}
                    onChange={boxThreeHandleOnChange}
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
                    label={<>4. Setup a <a href="https://support.google.com/websearch/answer/4815696?hl=en" target="_blank">Google alert for your name</a></>}
                    onChange={boxFourHandleOnChange}
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
                    label={<>5. <a href="https://scholar.google.com/intl/en/scholar/citations.html" target="_blank">Setup a Google Scholar profile</a></>}
                    onChange={boxFiveHandleOnChange}
                  />
                </div>
              ))}
            </Form>

      </Card.Body>
    </Card>
  );
}

export default GoogleCard;