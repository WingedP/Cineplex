import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function navbar(props) {
    return (
        <div>
    <Navbar className="navbar" bg="" variant="dark" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />  


  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">
      <i   style={{fontSize:"2rem"}}  class="fas fa-video"></i>
       </Nav.Link>
      {/* <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Navbar.Brand className="cineplextitle" href="#home">Cin(e)Plex</Navbar.Brand>

    <Form inline>
      <FormControl   
      onChange ={(e)=>{props.searchByKeywords(e.target.value)}}
      type="text" placeholder="Search" className="mr-sm-2 searchinputform" />
      <Button className="searchBtn"
      variant="">
<i class="fas fa-search"></i>
      </Button>
    </Form>


  </Navbar.Collapse>



</Navbar>
        </div>
    )
}
