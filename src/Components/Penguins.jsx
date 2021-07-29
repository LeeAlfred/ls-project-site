import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function Penguins() {
    return (
        <div className="story">
   <Container fluid>    
         <Card border="light">
  <Image
    className="bottom-cards" variant="top"
    src="https://s6.gifyu.com/images/Penguins-website-snippetfcde1d2d7fdf2c43.png"
    alt="Penguin byLeeSampson Website Snippet" fluid
  />
  <Card.Body>
    <Card.Title>Penguins byLeeSampson Website</Card.Title>
    <p> Here is a link to a webesite I created for displaying my thoughts on Leadership using penguins <a href="http://penguins-by-lee-sampson.herokuapp.com/" target="_blank" rel="noreferrer">Penguins byLeeSampson</a></p>

  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Penguins