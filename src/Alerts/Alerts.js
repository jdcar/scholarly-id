import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
function AdditionalContentExample() {
    return (
        <>
            <Col>
                <Alert variant="success">
                    <Alert.Heading>Tips for filling in your ORCID profile</Alert.Heading>
                    <p>
                        ORCID allows you to control how much of the profile is visible. At minimum, filling out the <strong>Education</strong> and <strong>Employment and Qualifications</strong> sections and making them visible will help others know they are looking at the right person.
                    </p>
                    <hr />
                    <p>
                        To import <strong>Works</strong> to ORCID, first go through the next steps setting up your Scopus and Web of Science profiles. During this process you will have the chance to synch your publications to your ORCID without having to fill out that part of the profile manually. Once that is complete, manually add any remaing works that were not synched during that process.
                    </p>
                    <p>Watch this <a href="https://www.youtube.com/watch?v=royk1HxSAkA" target="_blank">Quick Start with ORCID</a> video for a 3-minute walkthrough.</p>
                </Alert>
            </Col>
        </>
    );
}

export default AdditionalContentExample;