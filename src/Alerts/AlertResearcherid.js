import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
function AlertforResearcherid() {
    return (
        <>
            <Col>
                <Alert variant="success">
                    <Alert.Heading>Tips for claiming your Web of Science Researcher ID profile</Alert.Heading>
                    <p>
Web of Science Researcher IDs and author profiles can be synched to ORCID.                    </p>
                    <hr />
                    <p>
                        Web of Science automatically creates author profiles. Since they are computer generated, they can be inaccurate: publications can be excluded, two or more authors can be merged onto one profile, or one author can be split between several profiles. 
                    </p>
                    <p>To remove publications from your Web of Science profile, click "Manage" in the Documents section. In Documents, delete any works that are not yours. To add works, click Add Publications</p>
                    <p>To merge two profiles, search for your name in the Researcher search on the Web of Science homepage. Click every profile that is yours and click "Merge Records."</p>
                </Alert>
            </Col>
        </>
    );
}

export default AlertforResearcherid;