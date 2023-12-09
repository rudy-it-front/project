import {Col, Container, Row} from "react-bootstrap";

const Footer=()=>{
    return(
        <footer className="bg-dark text-white mt-5 p-5 text-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} xs={12} className="mb-4">
                        <h5>Menu</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Restaurants</a></li>
                            <li><a href="#" className="text-white">News</a></li>
                            <li><a href="#" className="text-white">Bonus Program</a></li>
                        </ul>
                    </Col>
                    <Col md={4} xs={12} className="mb-4">
                        <h5>News</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at elit ac elit porttitor consectetur.
                        </p>
                    </Col>
                    <Col md={4} xs={12}>
                        <h5>Contact</h5>
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>Email: info@mafia.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer