import Card from 'react-bootstrap/Card';

function OrcidCard() {
  return (
    <Card>
      <Card.Body><h4>ORCID</h4>
      <p>ORCID is a non-profit that provides identifiers and profiles for researchers.</p>
      <p>1. <a href="https://orcid.org/signin">Register for ORCID</a></p>
      <p>2. <a href="https://orcid.it.northwestern.edu/">Link ORCID to Northwestern</a></p>
      <p>3. Fill out the ORCID profile, including Employment, Education, and Works</p>
      </Card.Body>
    </Card>
  );
}

export default OrcidCard;