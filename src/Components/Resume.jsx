import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function Resume() {
    return (
        <div className="story">
   <Container>    
         <Card border="light">
  <Image
    className="bottom-cards" variant="top"  
    src="https://s6.gifyu.com/images/Lee-Resume-Website-snippetb5bb853442978f73.png"
    alt="Screen Grab Lee Sampson Resume" fluid
  />
  <Card.Body>
    <Card.Title>Lee Sampson CV</Card.Title>
    <p>
    I created this <a href="https://lee-sampson-resume.herokuapp.com/" target="_blank" rel="noreferrer"> website</a> as react version of my online CV/ Resume
    </p>

  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Resume