import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';


function Studies() {
    return (
        <div className="intro">
   <Container fluid>    
         <Card border="light">
  
  <Card.Body>
    <Card.Title>Courses Completed</Card.Title>
    <Card.Text>
    <p>
    The Complete Web Development 2020 Boot camp - Dr Angela Yu
    </p>
    <p>
    Programming 101 - Lawrence Turton
    </p>
    <p>
    Javascript Essentials - Lawrence Turton
    </p>
    <p>
    Microsoft SQL Server 2019: For Beginners - Bradley Coetzee
    </p>
    <p>
   SVG basics for beginners - DigiFisk 
    </p>
    </Card.Text>
  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Studies