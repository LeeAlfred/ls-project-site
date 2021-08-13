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
<Navbar fixed= "top" style={{backgroundColor:"#C3BA85"}}  expand="lg">
<Navbar.Brand href="#home">
</Navbar.Brand> 
 <Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end">
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