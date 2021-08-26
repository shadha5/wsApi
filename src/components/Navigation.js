import React from "react";
import {  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
       
          <Navbar.Brand href="#home">
              <Link to="/">HOME</Link>
               </Navbar.Brand>
    
      </Navbar>
    </div>
  );
};

export default Navigation;
