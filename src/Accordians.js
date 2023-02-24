import Accordion from 'react-bootstrap/Accordion';
import OrcidCard from './Researcherids/OrcidCard'
import ResearcherIdCard from './Researcherids/ResearcherIdCard';
import ScopusIdCard from './Researcherids/ScopusId'
import Checklist from './Checklists/Checklist'
import LinkedIn from './Networking/LinkedIn';
import ResearchGate from './Networking/ResearchGate';
import GoogleCard from './SEO/Google';
import WebsiteCard from './ProfessionalWebpage/Website';

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Researcher Identifiers</Accordion.Header>
        <Accordion.Body>
          <OrcidCard/>
          <ResearcherIdCard/>
          <ScopusIdCard/>
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Networking Sites</Accordion.Header>
        <Accordion.Body>
          <LinkedIn/>
          <ResearchGate/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Google</Accordion.Header>
        <Accordion.Body>
          <GoogleCard/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Social Media</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Professional webpage</Accordion.Header>
        <Accordion.Body>
         <WebsiteCard/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;