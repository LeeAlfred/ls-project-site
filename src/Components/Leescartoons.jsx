import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Leescartoons() {
    return (
        <div className="story">
   <Container fluid>    
         <Card border="light">
  <Image
    className="bottom-cards" variant="top"
    src="https://s6.gifyu.com/images/cartoonsByLeeSamspon.snip.webp"
    alt="cartoons byleesampson Website Snippet" fluid
  />
  <Card.Body>
    <Card.Title>Cartoons byLeeSampson</Card.Title>
   
    <p> Here is a link to a website I created for displaying cartoons I've drawn <a href="https://cartoons-byleesampson.netlify.app/" target="_blank" rel="noreferrer">cartoons-byleesampson</a></p>

  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Leescartoons