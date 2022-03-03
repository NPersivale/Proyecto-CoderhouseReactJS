import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <Navbar id="navbar" expand="lg">
                <Container fluid>
                <CartWidget />
                    <Navbar.Brand href="#">JustGaming</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Store</Nav.Link>
                            <Nav.Link href="#action2">About Us</Nav.Link>
                            <Nav.Link href="#">
                                Contact Us
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