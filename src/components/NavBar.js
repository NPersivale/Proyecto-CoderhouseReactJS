import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <Navbar id="navbar" expand="lg">
                <Container fluid>
                <CartWidget />
                    <Navbar.Brand href="#">Nicolas Persivale</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About Me</Nav.Link>
                            <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Web Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">UX/UI</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Python
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Contact Me
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;