import Card from 'react-bootstrap/Card';

function ScopusIdCard() {
  return (
    <Card>
      <Card.Body style={{align: "left"}}><h4>Scopus IDs</h4>
      <p>Scopus IDs are similar to Researcher IDs, but they are through a different company.</p>
      <p>1. <a href="https://service.elsevier.com/app/answers/detail/a_id/11240/supporthub/scopus/">Add your ORCID iD to your Scopus author profile</a></p>
      <p>2. <a href="https://orcid.scopusfeedback.com/#/">Synch to ORCID</a></p>
      <p>3. Review the profile for accuracy. If needed, Edit profile.</p>
      </Card.Body>
    </Card>
  );
}

export default ScopusIdCard;