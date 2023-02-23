import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CheckMark from '../task_alt_FILL0_wght400_GRAD0_opsz48.png'

function ResearcherIdCard() {

  const checkBoxOneString = `<p>1. <a href="http://webofscience.help.clarivate.com/Content/author-record.html">Claim your Web of Science researcher profile</a> or <a href="https://publons.freshdesk.com/support/solutions/articles/12000088851-how-to-create-a-web-of-science-researcher-profile-and-login">Create a Web of Science researcher profile</a></p>`

  const checkBoxTwoString = `<p>2. <a href="https://libguides.northwestern.edu/c.php?g=660893&p=9509666">Synch to ORCID</a></p>`


  return (
    <Card>
      <Card.Body>
            <Col><Row xs="auto"><div><img alt="checkmark" src={CheckMark} /></div>
            </Row></Col>
      <h4>Researcher IDs</h4>
      <Col>
        <p>Researcher IDs are a part of Web of Science. They are created through automation, so there may be errors in your profile. Claiming your Web of Science profile allows you to fix errors and synch works with ORCID</p>
        </Col>
        <Row xs="auto">
          <Col>
          
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
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
        <Row xs="auto">
          <Col>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={"3. Review profile for accuracy. If needed, edit the Web of Science author profile."}
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

export default ResearcherIdCard;