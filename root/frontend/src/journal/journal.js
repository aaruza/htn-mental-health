import React from "react";
import "./journal.css";
import Button from "react-bootstrap/Button";

function Journal() {
  return (
    <div>
      <div className="title-bg">
        <h1 className="page-padding">It's...Journal Time?</h1>
      </div>
      <div className="page-padding">
        <div>What would you like to do?</div>
        <br />
        <Button variant="info" className="button-spacing">
          Create a new journal entry!
        </Button>
        <Button variant="info">Open a previous journal entry!</Button>
      </div>
    </div>
  );
}

export default Journal;
