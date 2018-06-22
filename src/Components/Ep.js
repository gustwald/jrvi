import React, { Component } from 'react';
import joel from '../assets/lilla_joel.jpg';
import logo from '../assets/logo.svg';
import joelInvert from '../assets/lilla_joel_invert.png';

class Ep extends Component {
  state = {
    menuOpen: false,
    menuClosed: true,
    menuClass: 'menu-list',
    bioClass: 'bio'
  }

  toggleMenu = () => {
    const {menuOpen} = this.state;
    console.log('sdada')
    if(!menuOpen){
      this.setState({menuOpen: true, menuClass: `${'menu-list'} ${'menu-list-open'}`, bioClass: `${'bio'} ${'show-bio'}`})
    }else {
      this.setState({menuOpen: false, menuClass: 'menu-list', bioClass: 'bio'})
    }
    
  }
  render() {
    const {menuOpen, menuClass, bioClass} = this.state;
    return (
      <div>
        <div className="logo" onClick={this.toggleMenu} style={{backgroundImage: `url(${logo})`}} />
        <div className="menu">
        {/* <ul className={menuClass}>
          <li>Merch</li>
          <li>Ett listitem</li>
          <li>Bio</li>
        </ul> */}
        </div>
        <div className="ep-wrapper">
          <div
            className="glitch"
            style={{
              backgroundImage: menuOpen ? `url(${joelInvert})` : `url(${joel})`
            }}
          >
            <div onClick={this.toggleMenu} className="glitch-wrapper">
              <div className="outer">
                <div className="inner rotate">RES</div>
              </div>
              <div className="border" />
              <div className="outer">
                <div className="inner rotate">UME</div>
              </div>
            </div>
            <div
              className={menuOpen ? '' : 'glitch-inner'}
              style={{
                backgroundImage: `url(${joel})`
              }}
            />
            <div
              className={menuOpen ? '' : 'glitch-inner-2'}
              style={{
                backgroundImage: `url(${joel})`
              }}
            />
          </div>
          {/* <p className="produced">written, recorded and produced in Älvsjö</p> */}
          {/* <iframe className="player" title="ep" src="https://open.spotify.com/embed?uri=spotify:track:6un2ccMSagLOTz1Kq8hCVd&theme=white" frameBorder="0" allowtransparency="true" allow="encrypted-media" /> */}
          {/* <p className={bioClass}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
        </div>
      </div>
    );
  }
}

export default Ep;
