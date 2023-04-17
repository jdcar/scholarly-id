import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
function AlertforScopus() {
    return (
        <>
            <Col>
                <Alert variant="success">
                    <Alert.Heading>Tips for claiming your Scopus author profile</Alert.Heading>
                    <p>
                        Scopus allows you claim your author profile and synch it to ORCID
                    </p>
                    <hr />
                    <p>
                        Scopus automatically creates author profiles. Since they are computer generated, they can be inaccurate: publications can be excluded, two or more authors can be merged onto one profile, or one author can be split between several profiles. 
                    </p>
                    <p>To remove publications from your Scopus profile, click "Edit profile". In Documents, remove any works that are not yours. To add works, click the link that says Search for Missing Documents on Scopus.</p>
                    <p>To merge two profiles, search for your name. Click every profile that is yours and click "Request to merge authors." Scopus will review your request and send an email confirming the merge.</p>
                </Alert>
            </Col>
        </>
    );
}

export default AlertforScopus;