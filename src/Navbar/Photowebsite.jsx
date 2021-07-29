import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Photowebsite (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div >
<Button className="button" variant="outline-light" onClick={handleShow}>
        Photography site
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Link to wandering-light-photography website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p> Here is a link to an ongoing project website for <a href="http://wandering-light-photography.herokuapp.com/" target="_blank" rel="noreferrer">my wife's photography. </a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Photowebsite;