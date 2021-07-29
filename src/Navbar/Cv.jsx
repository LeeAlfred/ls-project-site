import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Cv (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div >
<Button className="button" variant="outline-light" onClick={handleShow}>
        Resume site
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Link to Lee Sampson CV website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p> Here is a link to a website I built for <a href="https://lee-sampson-resume.herokuapp.com/" target="_blank" rel="noreferrer">my Resume </a> if you want to know more about my professional experience in leadership.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Cv;