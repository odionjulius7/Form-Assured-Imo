import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MultiStepForm from "./MultiStepForm";
import { Link } from "react-router-dom";

export default function MotorInsurance() {
    return (
        <div>
          <Header />
          <div id="body-div">
            <MultiStepForm />
          </div>
          <Footer />
        </div>
      );
}
