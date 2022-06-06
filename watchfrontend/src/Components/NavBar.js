import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {VscColorMode} from 'react-icons/vsc'


function NavBar() {


    var backgroundCol={
        backgroundImage: "linear-gradient(to right,#FC1C1C, #FE4141)"
    }


  return (
    <div>
        <Navbar collapseOnSelect style={{backgroundImage: "linear-gradient(to right,#FC1C1C, #FE4141)", padding:"25px 5px"}} fluid variant='dark' bg='dark' expand="sm">
        <Container fluid>
            <Nav className="m1-auto">
            <Navbar.Brand href="/">
                Online StopWatch
            </Navbar.Brand>
             
            </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

            <Nav style ={{marginRight: "1rem", fontSize: "20px", fontWeight: "600"}}className ='ms-auto'>
                <NavDropdown title ="Tools" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">Timer</NavDropdown.Item>
                    <NavDropdown.Item href="/">Stop Watch</NavDropdown.Item>
                    <NavDropdown.Item href="/">Alarm</NavDropdown.Item>
                    <NavDropdown.Item href="/">World Clock</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link style={{marginBottom:"0.2rem"}}>
                    <VscColorMode className='iconStyle'size={"2rem"}/>
                </Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
        </Container>


        </Navbar>

    </div>
  )
}

export default NavBar