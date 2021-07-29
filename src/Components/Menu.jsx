import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Contact from "../Navbar/Contact";
import Cv from "../Navbar/Cv";
import Byleesampson from "../Navbar/Byleesampson";
import Photowebsite from "../Navbar/Photowebsite";
import Cartoons from "../Navbar/Cartoons";


function Menu() {

return (
    <div>
<Navbar fixed= "top" bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="#home">
  Lee Sampson Projects
</Navbar.Brand> 
 <Navbar.Toggle />
 <Navbar.Collapse>
  <Navbar.Text>   
    <Contact />
  </Navbar.Text>
  <Navbar.Text>
    <Cv />
  </Navbar.Text>
  <Navbar.Text>
    <Byleesampson />
  </Navbar.Text>
  <Navbar.Text>
    <Cartoons />
  </Navbar.Text>
  <Navbar.Text>
    <Photowebsite />
  </Navbar.Text>
 </Navbar.Collapse>
</Navbar>
    </div>
)


}

export default Menu