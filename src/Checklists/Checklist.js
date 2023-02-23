import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Checklist() {
  return (
    <Card>
        <Card.Body>
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'I registered my ORCID'}
          />
        </div>
      ))}
    </Form>
    </Card.Body>
    </Card>
  );
}

export default Checklist