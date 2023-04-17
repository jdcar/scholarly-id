import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';

function Twitter() {

  const [boxOneIsChecked, boxOneSetIsChecked] = useState(false)
  const [boxTwoIsChecked, boxTwoSetIsChecked] = useState(false)

  const boxOneHandleOnChange = () => {
    boxOneSetIsChecked(!boxOneIsChecked);
  };

  const boxTwoHandleOnChange = () => {
    boxTwoSetIsChecked(!boxTwoIsChecked);
  };

  return (
    <Card className="text-start">
      <Card.Body>
        <h4 className="text-center">Twitter</h4>


        {boxOneIsChecked === false || boxTwoIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

        <p>Twitter is a social media site often used by academics to communicate with each other and the public.</p>

        <Form>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                onChange={boxOneHandleOnChange}
                label={<>1. <a href="https://www.Twitter.com/" target="_blank">Register for a Twitter account</a></>}
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
                label={<>2. Update the profile. Consider some of the recommendations in this <a href="https://medium.com/@smojarad/a-beginners-guide-to-academic-twitter-f483dae86597" target="_blank" >Medium post</a> for using Twitter as an academic</>}
              />
            </div>
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Twitter;