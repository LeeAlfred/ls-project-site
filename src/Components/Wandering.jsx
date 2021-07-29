import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Wandering() {
    return (
        <div className="story">
   <Container fluid>    
         <Card border="light">
  <Image
    className="bottom-cards" variant="top"
    src="https://s6.gifyu.com/images/wandering-light-photography-snippet.png"
    alt="wandering-light-photography Website Snippet" fluid
  />
  <Card.Body>
    <Card.Title>wandering-light-photography</Card.Title>
   
    <p> Here is a link to a website I created for displaying my wife's photography <a href="http://wandering-light-photography.herokuapp.com/" target="_blank" rel="noreferrer">wandering-light-photography</a></p>

  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Wandering