import React from "react";
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image'

function Penguins() {
    return (
        <div className="sites">
   
         <Card border="0" style={{backgroundColor: '#FFF'}}>
  <Image
    className="bottom-cards" 
    src="https://s6.gifyu.com/images/penguins100.webp"
    alt="Penguin byLeeSampson Website Snippet" 
  />
  <Card.Body>
    <Card.Title>Penguins byLeeSampson Website</Card.Title>
    <p> Here is a link to a webesite I created for displaying my thoughts on Leadership using penguins <a href="http://penguins-by-lee-sampson.herokuapp.com/" target="_blank" rel="noreferrer">Penguins byLeeSampson</a></p>

  </Card.Body>
</Card>

        </div>
    )
}

export default Penguins