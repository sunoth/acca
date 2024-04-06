import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar bg="primary" sticky="top" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Button variant="light">
                    Log: Mark
                </Button>
            </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;