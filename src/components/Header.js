import React from "react";
import { Form, Button, Col, Container, Navbar } from "react-bootstrap";
import Logo from "../img/favicon.png";

export default function Header() {
  return (
    <div className="mb-3">
      <div className="d-flex ">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>
      <Navbar expand="lg" variant="light" bg="light">
        <div className="nav-container">
          <div className="nav-content">
            MOTOR VEHICLE INSURANCE PROPOSAL FORM
          </div>
        </div>
      </Navbar>
    </div>
  );
}
