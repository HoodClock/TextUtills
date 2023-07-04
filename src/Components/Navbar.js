import React, { useState } from 'react'
import {link} from 'react-router-dom';

export default function Navbar(props) {

  const handleDark = () => {
    const night = document.getElementById("mybox");
    night.style.backgroundColor = "black";
    night.style.color = "white";
  };

  return (
    <>
      <nav className={`navbar navbar_class navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid navbar_class">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/textform">{props.textform}</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">{props.about}</a>
              </li> */}
              <li className="nav-item">
                {/* <button className="btn btn-dark" onClick={handleDark} type="submit">Night</button> */}
                <div className="form-check form-switch my-2">
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
                </div>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2 " id='searching' type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">{props.search}</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  )
}

// What is PROPS???????
// (props is basically passing the values....
// WE can pass the properties to componants and props are the properties.....)

// It's by default have the props in case we miss the main one...(Plan B) 
Navbar.defaultProps = {
  title: "React Dev",
  project: "Portfolio"
}