import React from "react";
import Card from "react-bootstrap/Card";


function Studies() {
    return (
     <div className="studies">
     
    <Card border="0" style ={{backgroundColor: "#FEFFE2"}}>
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

        </div>
    )
}

export default Studies