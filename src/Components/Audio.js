import React, { Component } from 'react';
import leva from '../songs/VILJALEVA_mastermix.mp3';

class Audio extends Component {
  render() {
    return (
      <div className="audio">
        <audio controls controlsList="nodownload">
          <source src={leva} type="audio/mp3" />
        </audio>
        <audio controls controlsList="nodownload">
          <source src={leva} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default Audio;
