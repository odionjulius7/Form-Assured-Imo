import React, { Component } from "react";
// import { Form, Button, Col, Container, Table } from "react-bootstrap";
import { useGlobalContext } from "../InsuranceContext";

export default function AddressDetails() {
  const { data, nextStep, prevStep, handleChange } = useGlobalContext();

  const fireNextStep = () => {
    nextStep();
  };

  const backToPrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  // registeration_no: "",
  // engine_no: "",
  // chassis_no: "",
  // make: "",
  // model: ""
  // type_of_body: "",
  // year_manufacture: "",
  // seat_capacity: "",
  // datae_purchase: "",

  // proposes_sum: ""

  return (
    <>
      <form id="wrapped" method="post" action="step-3.html">
        <input id="website" name="website" type="text" value="" />
        {/* <!-- Leave for security protection, read docs for details --> */}
        <div id="middle-wizard">
          <div className="step">
            <h2 className="section_title">Section B:</h2>
            <h3 className="main_question">
              {" "}
              PARTICULARS OF VEHICLE(S) TO BE INSURED
            </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="registeration_no"
                    id="registeration_no"
                    placeholder="Registration Number"
                    className="form-control"
                    defaultValue={data.registeration_no}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="engine_no"
                    id="engine_no"
                    placeholder="Engine Number"
                    className="form-control"
                    defaultValue={data.engine_no}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="chassis_no"
                    id="chassis_no"
                    placeholder="Chassis Number"
                    className="form-control"
                    defaultValue={data.chassis_no}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-15" />
            <div className="row">
              <div className="col-md-6">
                {/* <label>Do you have any allergies?</label> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="make"
                    id="make"
                    placeholder="Make"
                    className="form-control"
                    defaultValue={data.make}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-15" />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="model"
                    id="model"
                    placeholder="Model"
                    className="form-control"
                    defaultValue={data.model}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="type_of_body"
                    id="type_of_body"
                    placeholder="Type of Body"
                    className="form-control"
                    defaultValue={data.type_of_body}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {/* <label>Name of Sponsor</label> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="year_manufacture"
                    id="year_manufacture"
                    placeholder="Year of Manufacture"
                    className="form-control"
                    defaultValue={data.year_manufacture}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* <label>Address of Sponsor</label> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="seat_capacity"
                    id="seat_capacity"
                    placeholder=" Carrying or Seating Capacity"
                    className="form-control"
                    defaultValue={data.seat_capacity}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* <label>Address of Sponsor</label> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="datae_purchase"
                    id="datae_purchase"
                    placeholder="Date of Purchase"
                    className="form-control"
                    defaultValue={data.datae_purchase}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* <label>Address of Sponsor</label> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="proposes_sum"
                    id="proposes_sum"
                    placeholder="Proposed Sum Insured (N)"
                    className="form-control"
                    defaultValue={data.proposes_sum}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /step--> */}
        </div>
        {/* <!-- /middle-wizard --> */}
        <div id="bottom-wizard">
          <button
            href="#"
            name="backward"
            className="backward"
            onClick={backToPrevStep}
          >
            Prev
          </button>
          <button
            type="submit"
            name="forward"
            className="forward"
            onClick={fireNextStep}
          >
            Next
          </button>
        </div>
        {/* <!-- /bottom-wizard --> */}
      </form>
    </>
  );
}
