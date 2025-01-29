import { Container, Row, Col, Card, Button } from "react-bootstrap";

export function Home() {
    return (
        <Container className="container mt-5">
            <Row>
                <Col md={12}>
                    <Card className="text-center">
                        <Card.Body>
                            <h1>Welcome to the Cart App!</h1>
                            <p>This is a basic cart app project built using React and Redux Toolkit.</p>
                            <p>The app is based on a course that covers the main concepts of React.</p>
                            <h4>Course Playlist:</h4>
                            <Button
                                href="https://youtube.com/playlist?list=PLQtNtS-WfRa9LbmD8ON7rWhn-AtKTGdkn"
                                target="_blank"
                                variant="primary">
                                Watch on YouTube
                            </Button>
                            <br />
                            <h4>Special Thanks to the Instructor:</h4>
                            <p>
                                A special thanks to <strong>Eng. Ahmed Naser</strong> for the excellent course.
                            </p>
                            <h4>Source Code :</h4>
                            <Button
                                href="https://github.com/owalid750/cart-app"
                                target="_blank"
                                variant="info">
                                GitHub Repository
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
