import React from "react";
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';

function Leescartoons() {
    return (
        <div className="sites">
    
         <Card border="0" style={{backgroundColor: '#FFF'}}>
  <Image
    className="bottom-cards" variant="top"
    src="https://s6.gifyu.com/images/cartoonsbylee100.webp"
    alt="cartoons byleesampson Website Snippet" 
  />
  <Card.Body>
    <Card.Title>Cartoons byLeeSampson</Card.Title>
   
    <p> Here is a link to a website I created for displaying cartoons I've drawn <a href="https://cartoons-byleesampson.netlify.app/" target="_blank" rel="noreferrer">cartoons-byleesampson</a></p>

  </Card.Body>
</Card>

        </div>
    )
}

export default Leescartoons