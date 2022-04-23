import React from "react";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
// import Confirmation from "./Confirmation";
import InsuredForm from "./InsuredForm";

import "./style.css";

import Logo from "../img/anambra-logo.png";

import { useGlobalContext } from "../InsuranceContext";
import RadioSection from "./RadioSection";
import Signature from "./Signature";
// import Payment from "./Payment";

export default function MultiStepForm() {
  const { step } = useGlobalContext();

  const displayForm = () => {
    switch (step) {
      case 1:
        return <UserDetails />;
      case 2:
        return <AddressDetails />;
      case 3:
        return <RadioSection />;
      case 4:
        return <InsuredForm />;
      case 5:
        return <Signature />;
      default:
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row row-height">
          <div className="col-xl-4 col-lg-4 content-left">
            <div className="content-left-wrapper">
              <div>
                <figure>
                  <img
                    style={{ width: "10rem" }}
                    src={Logo}
                    alt=""
                    className={`img-fluid ${
                      step === 5 ? "mt-5 pt-5 mb-4" : ""
                    }`}
                  />
                </figure>
                <h2>MOTOR VEHICLE INSURANCE PROPOSAL FORM</h2>

                {step === 5 ? (
                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}> NB:</span> Please read
                    the following declaration very carefully and read again the
                    questions and answers especially if not completed in your
                    own hand, before signing the form.
                  </p> // </button>
                ) : step === 6 ? null : (
                  <>
                    <p style={{ marginBottom: "10px" }} className="text-left">
                      In completing the Proposal Form, please ensure that all
                      questions are answered fully and accurately and where
                      necessary schedules giving further explanation are
                      provided:
                    </p>
                  </>
                )}
              </div>
              <div className="copy">
                © Authorised and regulated by the National Insurance Commission.
                RIC-026
              </div>
            </div>
          </div>
          <div
            style={{
              background: "white",
            }}
            className="col-xl-8 col-lg-8 content-right"
            id="start"
          >
            <div
              id="wizard_container"
              // id="wizard_container"
            >
              <div id="top-wizard">
                {step === 6 ? null : (
                  <>
                    <span id="location">{step} of 5 completed</span>
                    <div className="progress">
                      <div
                        style={{
                          backgroundColor: "#66cd33",
                          width:
                            step === 2
                              ? "25%"
                              : step === 3
                              ? "50%"
                              : step === 4
                              ? "75%"
                              : step === 5
                              ? "100%"
                              : "0",
                        }}
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </>
                )}
              </div>
              {/* <!-- /top-wizard --> */}
              {displayForm()}
            </div>
          </div>
        </div>
      </div>

      <div className="cd-overlay-nav">
        <span></span>
      </div>

      <div className="cd-overlay-content">
        <span></span>
      </div>
    </>
  );
}
