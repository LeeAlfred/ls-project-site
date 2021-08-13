import React from "react";
import Card from "react-bootstrap/Card";


function Workingon() {
    return (
<div className="working">
   
     <Card border="0" style={{backgroundColor: "#FEFFE2"}}>
      <Card.Body>
       <Card.Title>Working on</Card.Title>
         <Card.Text>
          <p>Finding a job as a developer :)</p>
          <p>React: I've started down the path of learning react to a level where I can work on a team.</p>
          <p>Python: I'm in the early stages of learning python via the "100 Code Challenge".</p>
          <p>Learning the basics: I spend a portion everyday revisiting the courses I have done trying to improve on the basics.</p>
          <p>Websites: Below are some React websites I am currently playing with to learn and grow!</p>
        </Card.Text>
      </Card.Body>
     </Card>

</div>
    )
}

export default Workingon