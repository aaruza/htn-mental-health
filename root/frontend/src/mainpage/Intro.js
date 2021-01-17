import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Intro.css';

function Intro() {
  return (
    <div className='hero-container'>
      <h1>Welcome To Your Mental Health Tracker</h1>
      <p>I'd love to know all about how you're feeling and be here for you!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Intro;