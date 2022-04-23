import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./pdf.css";
import CertResult from "../img/linkageCertResult.png";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Confirmation() {
  const downloadPdfFile = () => {
    const input = document.getElementById("downloadable");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`linkageInsurance.pdf`);
    });
    localStorage.clear();
  };

  return (
    <div className="coverDownload">
      <div id="downloadable" className="">
        <div className="container">
          <Row>
            <div
              className="col-md-6"
              style={{
                margin: "0 auto",
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
                marginLeft: "-2rem",
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
                CERTIFICATE NO.: <span>22/108824LKG</span>
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
                  <span>LSD544HL</span>
                </h6>
              </div>
              <div className="col-md-5 mb-2">
                <h6 className="pdf-head5">TOYOTA - HIGHLANDER</h6>
              </div>
            </Row>
            <Row>
              <p className="pdf-p">
                2. Name of Policy Holder:{" "}
                <span className="no-span">
                  LECON FINANCIAL SERVICES LIMITED
                </span>
              </p>
              <p className="pdf-p">
                3. Effective Date of Commencement of Insurance for the purposes
                of the Ordinance(s):{" "}
                <span className="no-span">April 13, 2022</span>
              </p>
              <p className="pdf-p">
                4. Date of Expiry of Insurance:
                <span className="no-span"> August 18, 2022</span>
              </p>
              <Row>
                <p className="">
                  5. Persons or Classes of Persons Entitled To Drive*
                </p>
                <row>
                  <p className="">a. The Policy holder.</p>
                  <p className="">
                    b. 2. Any other person who is driving on the Policyholders
                    order or with their permission.
                  </p>
                  <p className="">
                    Provided that the person driving is permitted in accordance
                    with the licensing or other laws or regulations to drive the
                    Motor Vehicle or has been so permitted and is not
                    disqualified by order of a Court of Law or by reason of any
                    enactment or regulation in that behalf from driving such
                    Motor Vehicle.
                  </p>
                </row>
              </Row>
              <row>
                <p className="">6. Limitations As To Use*</p>
                <Row>
                  <p className="">
                    Use only for social, domestic and pleasure purposes and for
                    the Policyholders business
                  </p>
                  <p className="">
                    The Policy does not cover use for hire or reward or for
                    racing, pace-making, reliability trial, speed-testing or use
                    for any purposes in connection with the Motor Trade
                  </p>
                </Row>
              </row>
            </Row>
          </Row>
          <Row>
            <h3
              className="py-2 pdf-h3"
              style={{
                textAlign: "center",
                borderBottom: "2px solid #adb5bd",
              }}
            >
              [ COMPREHENSIVE ]
            </h3>
            <p className="">
              Limitations rendered inoperative by the provisions of the Motor
              Vehicle (Third Party Insurance) Ordinance Act 1945 (Nigeria),the
              Motor Vehicles (Third Party Insurance) Act 1958 (Ghana), the Motor
              Vehicles (Third Party Insurance) Ordinance Act 1948 (Gambia), are
              not to be included under this heading.
            </p>
          </Row>
          <Row>
            <p className="">
              <span>We hereby Certify</span> that the Policy to which this
              Certificate relates is issued in accordance with the provisions of
              the Motor Vehicle (Third Party Insurance) Ordinance, Act 1945
              (Nigeria).
            </p>
          </Row>
          <Row>
            <p className="" style={{ textAlign: "center" }}>
              For and on behalf of the LINKAGE ASSURANCE PLC
            </p>
          </Row>
          <Row>
            <Col className="text-left">IMAGE</Col>
            <Col>IMage</Col>
            <Col style={{ textAlign: "center" }}>
              <p>IMAGE</p>
              <p>MANAGING DIRECTOR</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <button onClick={downloadPdfFile}>Download Certificate</button> */}
      <div style={{ margin: "0 auto" }} className="col-md-2">
        <div className="row">
          <button
            type="submit"
            name="forward"
            className="forward"
            onClick={downloadPdfFile}
          >
            Download Result
          </button>
        </div>
      </div>
    </div>
  );
}
