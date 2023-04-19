import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'
import unCheckMark from '../radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';
import AlertforResearcherid from '../Alerts/AlertResearcherid';

function ResearcherIdCard() {

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
      <Card.Body>
        <h4 className="text-center">Researcher IDs from Web of Science</h4>


        {boxOneIsChecked === false || boxTwoIsChecked === false || boxThreeIsChecked === false ? <div><img alt="uncheckmark" src={unCheckMark} /></div> : <div><img alt="checkmark" src={CheckMark} /></div>}

        <p>Researcher IDs are a part of <a href="https://libguides.northwestern.edu/webofscience" target="_blank">Web of Science</a>. They are created through automated processes, so there may be errors in your profile. Claiming your Web of Science profile allows you to fix errors and synch works with ORCID</p>


        <Form>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                onChange={boxOneHandleOnChange}
                label={(<>1. <a href="http://webofscience.help.clarivate.com/Content/author-record.html" target="_blank">Claim your Web of Science researcher profile</a> or <a href="https://publons.freshdesk.com/support/solutions/articles/12000088851-how-to-create-a-web-of-science-researcher-profile-and-login" target="_blank">Create a Web of Science researcher profile</a></>)}
              // dangerouslySetInnerHTML={{ __html: checkBoxOneString }}
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
                label={(<>2. <a href="https://libguides.northwestern.edu/c.php?g=660893&p=9509666" target="_blank">Synch to ORCID</a></>)}
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
                label={<>3. Review profile for accuracy. If needed, edit the Web of Science author profile.</>}
                onChange={boxThreeHandleOnChange}
              />
            </div>
          ))}
        </Form>
        <AlertforResearcherid/>
      </Card.Body>
    </Card>
  );
}

export default ResearcherIdCard;