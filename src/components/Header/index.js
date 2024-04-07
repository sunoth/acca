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
            <Nav.Link href="#WhyChooseUs">WCU?</Nav.Link>
            <Nav.Link href="#WhatWillYouLearnInACCA">Learning</Nav.Link>
            <Nav.Link href="#PlacementAssistance">Placement</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Button variant="light">
                    Log
                </Button>
            </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;