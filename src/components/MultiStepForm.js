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
                    <h4
                      style={{ color: "#fff", fontSize: "1rem" }}
                      className="pt-3 "
                    >
                      IMPORTANT NOTICE CONCERNING DISCLOSURE
                    </h4>
                    <ul className="text-left">
                      <li>
                        It is your duty to disclose all material facts to
                        Underwriters.
                      </li>
                      <li>
                        A material fact is one that is likely to influence an
                        Underwriter’s judgement and acceptance of your proposal.
                        If your proposal is a renewal of an existing policy, it
                        should also include any change in facts previously
                        advised to Underwriters. If you are in any doubt as to
                        whether or not facts are considered material, you should
                        disclose them.
                      </li>
                      <li>
                        “An Insurance Agent who assists an applicant to complete
                        an application or proposal for insurance shall be deemed
                        to have done so as the agent of the applicant”.
                      </li>
                      <li>
                        Please note that the completion of this form is not
                        evidence of insurance contract. Linkage Assurance Plc is
                        not on risk until full premium is paid and relevant
                        contract documents issued.
                      </li>
                    </ul>

                    <div id="text-div-left">
                      <h4>
                        PRIVATE CARS/COMMERCIAL VEHICLES/MOTOR CYCLES COVER
                      </h4>
                      <p>
                        The company issues the following forms of motor
                        insurance policies:
                      </p>
                      <h6>(a) COMPREHENSIVE</h6>
                      <p>
                        Third Party liability for injury to persons and damage
                        to property. Loss of or damage to the insured vehicle by
                        accident, fire or theft, hurricane, earthquake, volcanic
                        eruption, flood or any convulsion of nature, riot,
                        strike or civil commotion.
                      </p>
                      <h6>(b) THIRD PARTYFIRE & THEFT</h6>
                      <p>
                        Third Party liability for injury to persons and damage
                        to property. Loss of or damage to the insured vehicle by
                        fire or theft.
                      </p>
                      <h6>(c) THIRD PARTYONLY</h6>
                      <p>
                        Third Party liability for injury to persons and damage
                        to property.
                      </p>
                      <p>
                        Policies (a), (b) and (c) include the cover required
                        under the Third Party insurance legislation
                      </p>
                    </div>
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
