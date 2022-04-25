import React, { useState } from "react";
import UsingComp from "./FlutterComponent";

import { useGlobalContext } from "../InsuranceContext";

export default function Payment() {
  const { data, prevStep } = useGlobalContext();

  const backToPrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  // cover_type: "",
  // private_use: "",
  // commercial_use: "",
  // soleOwnerOfVehicle: "",
  // notSoleOwnerOfVehiStateParticular: "",
  // isVehicleHirePurchased: "",
  // ifHirePurchasedStateNameOfFinancedCompany: "",

  return (
    <>
      <div
        style={{
          background: "#fff",
          width: "100%",
          minHeight: "100vh",
          paddingTop: "0.2rem",
        }}
        className=""
      >
        <div className="container">
          <div className="col-md-12">
            <div className="row ">
              <ul className="list-group list-group-flush col-md-5">
                <li className="list-group-item">
                  <h4>Full Name: </h4>
                  {data.full_name}
                </li>
                <li className="list-group-item">
                  <h4>Residential Address: </h4>
                  {data.residential_address}
                </li>
                <li className="list-group-item">
                  <h4>Email: </h4>
                  {data.email}
                </li>
                <li className="list-group-item">
                  <h4>Website Address: </h4>
                  {data.website}
                </li>
                <li className="list-group-item">
                  <h4>Date of birth: </h4>
                  {data.date_of_birth}
                </li>
                <li className="list-group-item">
                  <h4>Occupation: </h4>
                  {data.occupation}
                </li>
                <li className="list-group-item">
                  <h4>Date of Incorporation</h4>
                  {data.date_of_incorp}
                </li>
                <li className="list-group-item">
                  <h4>Telephone Number: </h4>
                  {data.telephone_no}
                </li>
                <li className="list-group-item">
                  <h4>Business Address: </h4>
                  {data.business_address}
                </li>
                <li className="list-group-item">
                  <h4>RC No: </h4>
                  {data.RC_no}
                </li>
                <li className="list-group-item">
                  <h4>registeration_no: </h4>
                  {data.registeration_no}
                </li>
              </ul>

              <ul className="list-group list-group-flush col-md-5 ">
                <li className="list-group-item">
                  <h4>Engine no: </h4>
                  {data.engine_no}
                </li>
                <li className="list-group-item">
                  <h4>chassis no: </h4>
                  {data.chassis_no}
                </li>
                <li className="list-group-item">
                  <h4>Make: </h4>
                  {data.make}
                </li>
                <li className="list-group-item">
                  <h4>Model: </h4>
                  {data.model}
                </li>
                <li className="list-group-item">
                  <h4>Type Of Body: </h4>
                  {data.type_of_body}
                </li>
                <li className="list-group-item">
                  <h4>Year Manufacture: </h4>
                  {data.year_manufacture}
                </li>
                <li className="list-group-item">
                  <h4>Seat Capacity</h4>
                  {data.seat_capacity}
                </li>
                <li className="list-group-item">
                  <h4>Date Of Purchase: </h4>
                  {data.datae_purchase}
                </li>
                <li className="list-group-item">
                  <h4>Proposed Sum: </h4>
                  {data.proposes_sum}
                </li>
                <li className="list-group-item">
                  <h4>Cover Type: </h4>
                  {data.cover_type}
                </li>
                <li className="list-group-item">
                  <h4>Private Use Of Vehicle: </h4>
                  {data.private_use}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <button
              name="backward"
              className="backward mt-3"
              onClick={backToPrevStep}
              style={{ width: "10rem" }}
            >
              Make Changes
            </button>
            <hr className="mt-5" />

            <div className="">
              <form id="wrapped">
                <input id="website" name="website" type="text" value="" />
                <div id="middle-wizard">
                  <div className="submit step" id="end">
                    {/* <!-- <h2 className="section_title text-center">Congratulation!</h2>
                                <p className="text-center"> You have successfully Registered your ward's details</p> --> */}
                    <div className="wrapper">
                      <div className="registration-details">
                        <h4 className="registration-details-fee">
                          <span>Registration Fee:</span> ₦10,000
                        </h4>
                        <div className="bank-info">
                          <div className="bank-info_account">
                            <h4 className="bank-info_account-name">
                              Anambra Conpulsory Third Party Insurance
                            </h4>
                            <h4 className="bank-info_account-no">
                              Make Payment With FlutterWave
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p className="mb-10">
                        <b>To confirm your registration:</b>
                      </p>
                      <ul className="text-left mb-20">
                        <li>Make Payment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>

              <button
                type="submit"
                name="forward"
                className="forward mb-5"
                //   onClick={}
              >
                <UsingComp
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
