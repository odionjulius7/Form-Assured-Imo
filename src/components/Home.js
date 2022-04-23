import React from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Logo from "../img/anambra-logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body-wrapper">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <div className="content-wrapper">
            <div className="header">
              <img src={Logo} alt="logo" className="header-logo" />
              <h1 className="header-title mb-3">
                Anambra State Government Compulsory 3rd Party Motor Insurance
              </h1>
              <p>
                It is your duty to disclose all material facts to Underwriters.
              </p>
              <p>
                A material fact is one that is likely to influence an
                Underwriter’s judgement and acceptance of your proposal. If your
                proposal is a renewal of an existing policy, it should also
                include any change in facts previously advised to Underwriters.
                If you are in any doubt as to whether or not facts are
                considered material, you should disclose them.
              </p>
              <p>
                "An Insurance Agent who assists an applicant to complete an
                application or proposal for insurance shall be deemed to have
                done so as the agent of the applicant".
              </p>
              <p>
                Please note that the completion of this form is not evidence of
                insurance contract. Linkage Assurance Plc is not on risk until
                full premium is paid and relevant contract documents issued.
              </p>

              <Link
                to="/motorinsurance"
                className="btn btn-primary btn-lg mt-70 mx-auto"
              >
                Start your Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
