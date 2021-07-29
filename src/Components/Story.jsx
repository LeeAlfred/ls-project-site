import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';


function Story() {
    return (
        <div className="intro">
   <Container fluid>    
         <Card border="light">
  
  <Card.Body>
    <Card.Title> My Journey</Card.Title>
    <Card.Text>
    <p>
    I started studying Web Dev remotely through Udemy in October 2020.
    </p>
    <p>
    My journey to this point was influenced by two previous roles that interacted directly with the IT teams. 
    </p>
    <p>
    But the real enjoyment comes through the discovery that web dev is similar to other main passion as an artist. Being able to create limitlessly and connect universaly through the senses.
    </p>
    <p>
    I like to build things and Web Dev offers me a universal canvas
    </p>
    <p>
     Still a lot to learn and I enjoy that part just as much! 
    </p>
    </Card.Text>
  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Story