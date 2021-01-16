import React from "react";
import "./journal.css";
import Button from "react-bootstrap/Button";
import CreateJournal from "../create-journal/create-journal";

function Journal() {
  return (
    <div>
      <div className="title-bg">
        <h1 className="page-padding">It's...Journal Time?</h1>
      </div>
      <div className="page-padding">
        <div>What would you like to do?</div>
        <br />
        <CreateJournal />
        <Button variant="info">Open a previous journal entry!</Button>
      </div>
    </div>
  );
}

export default Journal;
