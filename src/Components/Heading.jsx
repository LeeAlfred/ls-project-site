import React from "react";
import Container from "react-bootstrap/Container";
import Greeting from "./Greeting";

function Heading() {
    return(
        <div className="heading">
        <Container fluid id="home">

<h1>Lee Sampson Projects Portfolio</h1>
<div><Greeting /></div>
    <p>
     This is a selection of live sites that I have made with pride, blood, sweat, tears and a tidalwave of syntax errors along the way since finishing my Fullstack Web Dev course in February 2021.
    </p>
 

  </Container>   
  </div>   
    )
}

export default Heading;