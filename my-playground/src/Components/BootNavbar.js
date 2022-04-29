import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
const BootNavbar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <NavbarBrand><img src="https://react-bootstrap.github.io/logo.svg" height="30px" width="30px" alt="react bootstrap logo" />{' '}React Bootstrap</NavbarBrand>
                <Navbar.Toggle aria-controls='id' />
                <Navbar.Collapse id="id">
                    <Nav>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            Skills
                        </Nav.Link>
                        <Nav.Link>
                            Projects
                        </Nav.Link>
                        <NavDropdown title="Dropdownlist"> 
                            <NavDropdown.Item>
                                Sample1
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Sample2
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Sample3
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className='ms-auto d-flex'>
                        <FormControl className='me-2' type="search" placeholder='search' />
                        <Button className='ms-2' variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BootNavbar;