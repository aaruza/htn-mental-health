import React, { useState } from "react";
import "./create-journal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function CreateJournal() {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const open = () => setShow(true);
  return (
    <>
      <Button className="button-spacing" variant="info" onClick={open}>
        Create a new journal entry!
      </Button>
      <Modal
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
        centered={true}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Journal Entry!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl
              placeholder="Journal Entry Title"
              aria-label="Journal entry title input field"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <FormControl
              as="textarea"
              rows={20}
              placeholder="Start your journal entry here!"
              aria-label="Journal entry input field"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button variant="info">Save!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateJournal;
