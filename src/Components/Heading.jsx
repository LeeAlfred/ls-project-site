import React from "react";
import { Container } from "react-bootstrap";
import Greeting from "./Greeting";

function Heading() {
    return(
        <div className="heading">

<Container fluid>
<h1 style={{color: "white"}}>Lee Sampson Projects Portfolio</h1>
<br />
<div><Greeting /></div>
<br />
<p style={{textAlign: "left"}}>The puspose of this site is a repository of live sites that I have made with React.</p>
     
<p>I started with zero computer and programing knowledge and it's taken 9 months of blood, sweat, tears and a tidalwave of syntax errors to get to this point.
</p>

<p>The main takeaway is that if you have a dream, you're willing to persevere a trickle of knowledge slowly grows</p>

<p style={{textAlign:"right"}}>My biggest hope is that trickle will fins it's way to an ocean of opportunites :)</p>

</Container>
  </div>   
    )
}

export default Heading;