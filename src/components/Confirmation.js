import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./pdf.css";

import Footer from "./Footer";
import Header from "./Header";

class Confirmation extends Component {
  downloadPdfFile = () => {
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
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      inputValues: {
        step,
        fullName,
        email,
        residentialAddress,
        city,
        state,
        zip,
        occupation,
        dateOfBirth,
        businessAddress,
        dateofIncorporation,
        rCNunmber,
        telephoneNumbers,
        website,
        carriageGN,
        cartageFOP,
        vehicleAltered,
        optTOCartageFOPVehicleAlt,
        passangerCarry,
        vehiclePublicUse,
        classOfVehicleLicence,
        nameofProposer,
        signature,
        date,
        rcNumb1,
        rcNumb2,
        rcNumb3,
        EngNumb1,
        EngNumb2,
        EngNumb3,
        chNumb1,
        chNumb2,
        chNumb3,

        firstMake,
        secondMake,
        thirdMake,

        firstModel,
        secondModel,
        thirdModel,

        firstType,
        secondType,
        thirdType,

        firstYOM,
        secondYOM,
        thirdYOM,

        firstSeatCap,
        secondSeatCap,
        thirdSeatCap,

        firstDOP,
        secondDOP,
        thirdDOP,

        firstPSI,
        secondPSI,
        thirdPSI,

        coverType,

        PrivateUse,
        commercialUse,

        personal,
        hirePurchase,
        selectedFile,
      },
    } = this.props;

    return (
      <>
        <Container
          id="downloadable"
          style={{ color: "black" }}
          className="px-5"
        >
          <Header step={step} />
          <Container className="px-3">
            <Row>
              <span className="pdf-span" style={{ textAlign: "end" }}>
                W.A.X. 4
              </span>
            </Row>
            <Row>
              <h2 className="pdf-h2" style={{ textAlign: "center" }}>
                MOTOR VEHICLES (THIRD PARTY INSURANCE) ACT 1945 (NIGERIA)
              </h2>
            </Row>
            <Row>
              <h1 className="pdf-h1" style={{ textAlign: "center" }}>
                CERTIFICATE OF INSURANCE
              </h1>
            </Row>
            <Row>
              <Col>
                <h6 className="pdf-h6">
                  CERTIFICATE NO.: <span>22/108824LKG</span>
                </h6>
              </Col>
              <Col>
                <h6 className="pdf-h6">
                  {" "}
                  POLICY NO.: <span>MOPM/22/02/63676/HQR</span>{" "}
                </h6>
              </Col>
            </Row>
            <Row>
              <Row className="pt-1">
                <Col>
                  <p className="pdf-p">
                    1. Index Mark and Registration No. of Vehicle:{" "}
                    <span className="no-span">LSD544HL</span>
                  </p>
                </Col>
                <Col>
                  <h4 className="pdf-h4" style={{ textAlign: "end" }}>
                    TOYOTA - HIGHLANDER
                  </h4>
                </Col>
              </Row>
              <Row>
                <p className="pdf-p">
                  2. Name of Policy Holder:{" "}
                  <span className="no-span">
                    LECON FINANCIAL SERVICES LIMITED
                  </span>
                </p>
                <p className="pdf-p">
                  3. Effective Date of Commencement of Insurance for the
                  purposes of the Ordinance(s):{" "}
                  <span className="no-span">April 13, 2022</span>
                </p>
                <p className="pdf-p">
                  4. Date of Expiry of Insurance:
                  <span className="no-span"> August 18, 2022</span>
                </p>
                <Row>
                  <p className="pdf-p">
                    5. Persons or Classes of Persons Entitled To Drive*
                  </p>
                  <row>
                    <p className="pdf-p space-p">a. The Policy holder.</p>
                    <p className="pdf-p space-p">
                      b. 2. Any other person who is driving on the Policyholders
                      order or with their permission.
                    </p>
                    <p className="pdf-p space-p">
                      Provided that the person driving is permitted in
                      accordance with the licensing or other laws or regulations
                      to drive the Motor Vehicle or has been so permitted and is
                      not disqualified by order of a Court of Law or by reason
                      of any enactment or regulation in that behalf from driving
                      such Motor Vehicle.
                    </p>
                  </row>
                </Row>
                <row>
                  <p className="pdf-p">6. Limitations As To Use*</p>
                  <Row>
                    <p className="pdf-p">
                      Use only for social, domestic and pleasure purposes and
                      for the Policyholders business
                    </p>
                    <p className="pdf-p">
                      The Policy does not cover use for hire or reward or for
                      racing, pace-making, reliability trial, speed-testing or
                      use for any purposes in connection with the Motor Trade
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
              <p className="pdf-p">
                Limitations rendered inoperative by the provisions of the Motor
                Vehicle (Third Party Insurance) Ordinance Act 1945 (Nigeria),the
                Motor Vehicles (Third Party Insurance) Act 1958 (Ghana), the
                Motor Vehicles (Third Party Insurance) Ordinance Act 1948
                (Gambia), are not to be included under this heading.
              </p>
            </Row>
            <Row>
              <p className="pdf-p">
                <span>We hereby Certify</span> that the Policy to which this
                Certificate relates is issued in accordance with the provisions
                of the Motor Vehicle (Third Party Insurance) Ordinance, Act 1945
                (Nigeria).
              </p>
            </Row>
            <Row>
              <p className="pdf-p" style={{ textAlign: "center" }}>
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
            <Row
              className="pt-2"
              style={{
                background: "#bc900d",
              }}
            >
              <Col>
                <p className="pdf-p">...Protection that counts</p>
              </Col>
              <Col>
                <p className="pdf-p">
                  Authorised and regulated by the National Insurance Commission.
                  RIC-026
                </p>
              </Col>
            </Row>
            <Row className="my-5">
              <p
                className="py-2 pdf-p"
                style={{
                  textAlign: "center",
                  borderTop: "2px solid #adb5bd",
                  // fontSize: "0.8rem",
                }}
              >
                Authorised and Regulated by the National Insurance Commission
                (RIC-026)Hello 1{" "}
              </p>
            </Row>
          </Container>
          <Footer step={step} />
        </Container>
        <button onClick={this.downloadPdfFile}>Download Certificate</button>
      </>
    );
  }
}

export default Confirmation;
