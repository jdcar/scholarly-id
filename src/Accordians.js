import Accordion from 'react-bootstrap/Accordion';
import OrcidCard from './Researcherids/OrcidCard'
import ResearcherIdCard from './Researcherids/ResearcherIdCard';
import ScopusIdCard from './Researcherids/ScopusId'
import Checklist from './Checklists/Checklist'
import LinkedIn from './Networking/LinkedIn';
import ResearchGate from './Networking/ResearchGate';
import GoogleCard from './SEO/Google';
import WebsiteCard from './ProfessionalWebpage/Website';
import TwitterCard from './SocialMedia/TwitterCard'
import Star from './star.png'

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Researcher Identifiers  <img alt="star" width= "20pt" src={Star} /></Accordion.Header>
        <Accordion.Body>
          <OrcidCard/>
          <ResearcherIdCard/>
          <ScopusIdCard/>
    
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Google  <img alt="star" width= "20pt" src={Star} /></Accordion.Header>
        <Accordion.Body>
          <GoogleCard/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Networking Sites</Accordion.Header>
        <Accordion.Body>
          <LinkedIn/>
          <ResearchGate/>
        </Accordion.Body>
      </Accordion.Item>
 
      <Accordion.Item eventKey="3">
        <Accordion.Header>Social Media</Accordion.Header>
        <Accordion.Body>
          <TwitterCard/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Professional Webpage</Accordion.Header>
        <Accordion.Body>
         <WebsiteCard/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;