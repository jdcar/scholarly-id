import Card from 'react-bootstrap/Card';

function ResearcherIdCard() {
  return (
    <Card>
      <Card.Body><h4>Researcher IDs</h4></Card.Body>
      <p>Researcher IDs are a part of Web of Science. They are created through automation, so there may be errors in your profile. Claiming your Web of Science profile allows you to fix errors and synch works with ORCID</p>
      <p>1. <a href="http://webofscience.help.clarivate.com/Content/author-record.html">Claim your Web of Science researcher profile</a> or <a href="https://publons.freshdesk.com/support/solutions/articles/12000088851-how-to-create-a-web-of-science-researcher-profile-and-login">Create a Web of Science researcher profile</a> </p>
      <p>2. <a href="https://libguides.northwestern.edu/c.php?g=660893&p=9509666">Synch to ORCID</a></p>
    </Card>
  );
}

export default ResearcherIdCard;