import React from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Logo from "../img/anambra-logo.png";
import { Link } from "react-router-dom";

export default function step1() {
  return (
    <div className="body-wrapper">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <div className="content-wrapper">
            <div className="header">
              <img src={Logo} alt="logo" className="header-logo" />
              <h1 className="header-title mb-4">
                Anambra State Government Compulsory 3rd Party Motor Insurance
              </h1>
            </div>
            <h4 className="section-header">Section A: Personal Details</h4>

            <Link
              to="/Step1/motorinsurance"
              className="btn btn-primary btn-lg mt-70 mx-auto"
            >
              Start your Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
