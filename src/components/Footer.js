import React from "react";
import { Form, Button, Col, Container, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="mt-5 pt-2" style={{ background: "#bc900d" }}>
      <Container>
        <div
          style={{ color: "#000000", fontWeight: "500" }}
          className="d-flex justify-content-between"
        >
          <p className="footer-p">...Protection that counts</p>
          <p className="footer-p">
            Authorised and regulated by the National Insurance Commission.
            RIC-026
          </p>
        </div>
      </Container>
    </div>
  );
}
