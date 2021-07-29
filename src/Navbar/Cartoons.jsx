import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Cartoons (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div>
<Button className="button" variant="outline-light" onClick={handleShow}>
        Cartoons site
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Cartoons byLeeSampson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>A website for displaying cartoons I have done <a href="https://cartoons-byleesampson.netlify.app/" target="_blank" rel="noreferrer">Cartoons byLeeSampson</a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Cartoons;