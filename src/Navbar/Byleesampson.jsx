import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Byleesampson (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div>
<Button className="button" variant="outline-light" onClick={handleShow}>
        Penguins site
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Leadership Penguins byLeeSampson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Here is a link to a website I built for displaying my thoughts on Leadership using penguins <a href="http://penguins-by-lee-sampson.herokuapp.com/" target="_blank" rel="noreferrer">Penguins byLeeSampson</a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Byleesampson;