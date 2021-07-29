import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Contact (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div>
<Button className="button" variant="outline-light" onClick={handleShow}>
        Ways to Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>How To Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>The best way to get in touch and to learn a bit more about me is on <a href="https://www.linkedin.com/in/lee-sampson-831a6614a/" target="_blank" rel="noreferrer">my Linkedin Page</a></p>
        <p>Here is my<a href="https://github.com/LeeAlfred" target="_blank" rel="noreferrer">github</a> profile</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Contact;