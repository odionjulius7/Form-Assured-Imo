import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

class Confirmation extends Component {
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
      <Container>
        <h1>Confirm your Details</h1>
        <p>Confirm if the following details are correct.</p>
        <p>full name: {fullName}</p>
        <p>Residential Address: {residentialAddress}</p>
        <p>Business/Occupation/Trade: {occupation}</p>
        <p>Date of Birth(individual customers only): {dateOfBirth}</p>
        <p>Business Address: {businessAddress}</p>
        <p>
          Date of Incorporation (corporate customers only):{" "}
          {dateofIncorporation} RC No: {rCNunmber}
        </p>
        <p>Telephone Numbers: {telephoneNumbers}</p>
        <p>Email Address: {email}</p>
        <p>Website (corporate proposers only): {website}</p>
        <p>Registration Number: {rcNumb1}</p>
        <p>Engine Number: {EngNumb1}</p>
        <p>Chassis Number: {chNumb1}</p>
        <p>Vehicle Make: {firstMake} </p>
        <p>Vehicle Model: {firstModel}</p>
        <p>Type of Body: {firstType} </p>
        <p>Year of Manufacture: {firstYOM}</p>
        <p>Carrying or Seating Capacity: {firstSeatCap} </p>
        <p> Date of Purchase: {firstDOP} </p>
        <p>Proposed Sum Insured (N): {firstPSI}</p>

        <p>COVER TYPE: {coverType}</p>
        <p>
          Will the Vehicle be used only for private pleasure purposes or
          travelling: {PrivateUse}
        </p>
        <p>
          Will the vehicle be used during the course of your business or
          employment for commercial: {commercialUse}
        </p>
        <p>
          Are you the sole owner of the vehicle(s) to be insured: {personal}{" "}
        </p>
        <p>
          Are any of the vehicles being financed by a Hire Purchase Agreement or
          other type of contract?: {hirePurchase}{" "}
        </p>

        <p>Usage of carriage, What is their general nature? {carriageGN}</p>
        <p>
          Usage of carriage, Do you undertake cartage for other persons?{" "}
          {cartageFOP}
        </p>
        <p>Has the Vehicle been altered? {vehicleAltered}</p>
        <p>Are the Passengers carried for hire or reward: {passangerCarry}</p>
        <p>Is the Vehicle used for public service: {vehiclePublicUse}</p>
        <p>State class of vehicle licence: {classOfVehicleLicence}</p>

        <p>
          <img src={selectedFile} width="100" height="50" />
        </p>

        <div className="mt-3">
          <Button variant="secondary" onClick={this.back}>
            Back
          </Button>{" "}
          <Button onClick={() => window.localStorage.clear()} variant="primary">
            Confirm
          </Button>
        </div>
      </Container>
    );
  }
}

export default Confirmation;
