import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./pdf.css";
// import CertResult from "../img/linkageCertResult.png";
import CertResult from "../img/anambra-logo.png";
import SignedLogo from "../img/signed_logo.png";
import MDSigned from "../img/MDSigned.png";

import { useGlobalContext } from "../InsuranceContext";

// IMPORT UP

export default function Confirmation() {
  const { data, futureDate, generateCertNo, todaysDate } = useGlobalContext();
  const { scanSignature, date } = data;

  console.log(futureDate);

  return (
    <div className="coverDownload">
      <div id="downloadable" className="">
        <div className="container">
          <Row>
            <div
              className="col-md-6"
              style={{
                margin: "0rem auto",
                // marginTop: "-5rem",
                // marginBottom: "-1rem",
              }}
            >
              <img
                style={{ display: "flex", justifyContent: "center" }}
                src={CertResult}
                alt="logo"
                className="logo-img2"
              />
            </div>
          </Row>
          <Row>
            <span
              className="col-md-11 pdf-span"
              style={{
                textAlign: "end",
                fontWeight: "bold",
                marginLeft: "-1rem",
              }}
            >
              W.A.X. 4
            </span>
          </Row>
          <Row>
            <h4 className="col-md-11 pdf-head4">
              MOTOR VEHICLES (THIRD PARTY INSURANCE) ACT 1945 (NIGERIA)
            </h4>
          </Row>
          <Row>
            <h1 className="col-md-11 pdf-head1" style={{ textAlign: "center" }}>
              CERTIFICATE OF INSURANCE
            </h1>
          </Row>
          <Row>
            <Col>
              <h6 className="pdf-head6">
                CERTIFICATE NO.: <span>{data.certificationNum}</span>
              </h6>
            </Col>
            <Col>
              <h6 className="pdf-head6">
                {" "}
                POLICY NO.: <span>MOPM/22/02/63676/HQR</span>{" "}
              </h6>
            </Col>
          </Row>
          <Row>
            <Row className="col-md-12 pt-2 ">
              <div className="col-md-7 mb-2">
                <h6 className="pdf-paraph1">
                  1. Index Mark and Registration No. of Vehicle:{" "}
                  <span>{data.registeration_no}</span>
                </h6>
              </div>
              <div className="col-md-5 mb-2">
                <h6 className="pdf-head5">
                  {data.make} - {data.model}
                </h6>
              </div>
            </Row>
            <Row>
              <h6 className="pdf-paraph1">
                2. Name of Policy Holder:{" "}
                <span className="">{data.full_name}</span>
              </h6>
              <h6 className="pdf-paraph1">
                3. Effective Date of Commencement of Insurance for the purposes
                of the Ordinance(s): <span className="">{data.date}</span>
              </h6>
              <h6 className="pdf-paraph1">
                4. Date of Expiry of Insurance:
                <span style={{ paddingLeft: "0.4rem" }} className="">
                  {data.futureDate}
                </span>
              </h6>
              <Row>
                <h6 className="pdf-paraph1">
                  5. Persons or Classes of Persons Entitled To Drive*
                </h6>
                <row>
                  <h6 className="pdf-paraph1" style={{ paddingLeft: "1rem" }}>
                    a. The Policy holder.
                  </h6>
                  <h6 className="pdf-paraph1" style={{ paddingLeft: "1rem" }}>
                    b. 2. Any other person who is driving on the Policyholders
                    order or with their permission.
                  </h6>
                  <h6 className="pdf-paraph1" style={{ paddingLeft: "1rem" }}>
                    Provided that the person driving is permitted in accordance
                    with the licensing or other laws or regulations to drive the
                    Motor Vehicle or has been so permitted and is not
                    disqualified by order of a Court of Law or by reason of any
                    enactment or regulation in that behalf from driving such
                    Motor Vehicle.
                  </h6>
                </row>
              </Row>
              <row>
                <h6 className="pdf-paraph1">6. Limitations As To Use*</h6>
                <Row>
                  <h6 className="pdf-paraph1" style={{ paddingLeft: "2rem" }}>
                    Use only for social, domestic and pleasure purposes and for
                    the Policyholders business
                  </h6>
                  <h6 className="pdf-paraph1" style={{ paddingLeft: "2rem" }}>
                    The Policy does not cover use for hire or reward or for
                    racing, pace-making, reliability trial, speed-testing or use
                    for any purposes in connection with the Motor Trade
                  </h6>
                </Row>
              </row>
            </Row>
          </Row>
          <Row>
            <div
              style={{
                textAlign: "center",
                margin: "0 auto",
                borderBottom: "2px solid #adb5bd",
                width: "80rem",
              }}
              // className="col-md-12"
            >
              <h3
                className="py-2 pdf-h3"
                // style={{
                //   textAlign: "center",
                // }}
              >
                [ COMPREHENSIVE ]
              </h3>
            </div>
            <h6
              className="pdf-paraph1"
              style={{ paddingLeft: "1.2rem", paddingTop: "1rem" }}
            >
              Limitations rendered inoperative by the provisions of the Motor
              Vehicle (Third Party Insurance) Ordinance Act 1945 (Nigeria),the
              Motor Vehicles (Third Party Insurance) Act 1958 (Ghana),
              <br /> the Motor Vehicles (Third Party Insurance) Ordinance Act
              1948 (Gambia), are not to be included under this heading.
            </h6>
          </Row>
          <Row>
            <h6 className="pdf-paraph1" style={{ paddingLeft: "1.2rem" }}>
              <span>We hereby Certify</span> that the Policy to which this
              Certificate relates is issued in accordance with the provisions of
              the Motor Vehicle (Third Party Insurance) Ordinance, Act 1945
              (Nigeria).
            </h6>
          </Row>
          <Row>
            <p className="" style={{ textAlign: "center" }}>
              For and on behalf of the LINKAGE ASSURANCE PLC
            </p>
          </Row>
          <Row>
            <Col className="text-left">
              <div className="signed-img">
                {/* <img
                  src={scanSignature}
                  alt="sign here"
                  className="img-fluid img-fluid-sign-1"
                /> */}
              </div>
            </Col>
            <Col>
              <div className="Sign_logo">
                <img className="img-fluid" src={SignedLogo} alt="Sign logo" />
              </div>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <div className="signed-img">
                <img
                  className="img-fluid img-fluid-sign"
                  src={MDSigned}
                  alt="managin dir"
                />
              </div>
              <p>MANAGING DIRECTOR</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <button onClick={downloadPdfFile}>Download Certificate</button> */}
    </div>
  );
}
