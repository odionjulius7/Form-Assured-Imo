import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../img/favicon.png";
import CertResult from "../img/linkageCertResult.png";

export default function Header({ step }) {
  return (
    <div className="">
      {step === 4 ? (
        <div className="container">
          <div className="d-flex ">
            <img src={CertResult} alt="logo" className="logo-img2" />
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
