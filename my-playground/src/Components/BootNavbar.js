import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
const BootNavbar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <NavbarBrand><img src="https://react-bootstrap.github.io/logo.svg" height="30px" width="30px" alt="react bootstrap logo" />{' '}React Bootstrap</NavbarBrand>
                <Navbar.Toggle aria-controls='id' />
                <Navbar.Collapse id="id">
                    <Nav className='ms-auto'>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BootNavbar;