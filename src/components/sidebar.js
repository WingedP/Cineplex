import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, Dropdown} from 'react-bootstrap';

export default function sidebar(props) {

   
console.log("genreList",props.genreList)

let showAllGenresNames = props.genreList.map(el=>{return (
<Dropdown.Item className="super-colorsitem" eventKey="1">{el.name}</Dropdown.Item>
)})


    return (
        <Navbar className="sidebar" bg="" variant="dark" expand="lg">   
<Dropdown as={ButtonGroup}>
<Dropdown.Toggle className="sortBtn" split id="dropdown-custom-2">
      <Button variant="" className="sortBtninside" ><i class="fas fa-film"></i></Button>
</Dropdown.Toggle>

    {/* <Dropdown.Toggle split variant="" id="dropdown-custom-2" /> */}
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item className="super-colorsitem" eventKey="1" onClick={()=>{props.topRatedMovies()}}>Top-rated</Dropdown.Item>

      <Dropdown.Item className="super-colorsitem" eventKey="2" onClick={()=>{props.upcomingMovies()}}>Upcoming</Dropdown.Item>
      <Dropdown.Divider />
{showAllGenresNames}
      {/* <Dropdown.Item className="super-colorsitem" eventKey="4"  onClick={()=>{props.popularTVshow()}}>Popular TV shows</Dropdown.Item> */}



    </Dropdown.Menu>
  </Dropdown>


        



      </Navbar>
    )
}
