import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';


function WebsiteCard() {

 const [boxOneIsChecked, boxOneSetIsChecked] = useState(false)
  const [boxTwoIsChecked, boxTwoSetIsChecked] = useState(false)

  const boxOneHandleOnChange = () => {
    boxOneSetIsChecked(!boxOneIsChecked);
  };

  const boxTwoHandleOnChange = () => {
    boxTwoSetIsChecked(!boxTwoIsChecked);
  };

    const checkBoxOneString = `<p>1. Create a professional website using a tool like Wordpress, Wix, or SquareSpace</a></p>`

//   const checkBoxTwoString = `2. <a href="https://Website.it.northwestern.edu/" target="_blank">Link Website to Northwestern</a></p>`



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
            {boxOneIsChecked === false || boxTwoIsChecked === false  ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

            </Row>
        </Col>
        <h4>Professional webpages</h4>
        <Col>
      {/* <p>You can create a professional webpage with template tools.</p> */}
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
         </Card.Body>
    </Card>
  );
}

export default WebsiteCard;