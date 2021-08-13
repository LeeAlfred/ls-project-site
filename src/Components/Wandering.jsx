import React from "react";
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';

function Wandering() {
    return (
        <div className="sites">
 
         <Card border="0" style={{backgroundColor: '#FFF'}}>
  <Image
    className="bottom-cards"
    src="https://s6.gifyu.com/images/wanderlinglight100.webp"
    alt="wandering-light-photography Website Snippet"
  />
  <Card.Body>
    <Card.Title>wandering-light-photography</Card.Title>
   
    <p> Here is a link to a website I created for displaying my wife's photography <a href="http://wandering-light-photography.herokuapp.com/" target="_blank" rel="noreferrer">wandering-light-photography</a></p>

  </Card.Body>
</Card>

        </div>
    )
}

export default Wandering