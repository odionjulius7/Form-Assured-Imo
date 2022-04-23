import React, { useState } from "react";
import UsingComp from "./FlutterComponent";

import { useGlobalContext } from "../InsuranceContext";

export default function Payment() {
  const { data } = useGlobalContext();

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
          paddingTop: "5rem",
        }}
        className=""
      >
        <div className="container">
          <div className="col-md-12">
            <div className="row ">
              <ul class="list-group list-group-flush col-md-5">
                <li class="list-group-item">
                  <h4>Full Name: </h4>
                  {data.full_name}
                </li>
                <li class="list-group-item">
                  <h4>Residential Address: </h4>
                  {data.residential_address}
                </li>
                <li class="list-group-item">
                  <h4>Email: </h4>
                  {data.email}
                </li>
                <li class="list-group-item">
                  <h4>Website Address: </h4>
                  {data.website}
                </li>
                <li class="list-group-item">
                  <h4>Date of birth: </h4>
                  {data.date_of_birth}
                </li>
                <li class="list-group-item">
                  <h4>Occupation: </h4>
                  {data.occupation}
                </li>
                <li class="list-group-item">
                  <h4>Date of Incorporation</h4>
                  {data.date_of_incorp}
                </li>
                <li class="list-group-item">
                  <h4>Telephone Number: </h4>
                  {data.telephone_no}
                </li>
                <li class="list-group-item">
                  <h4>Business Address: </h4>
                  {data.business_address}
                </li>
                <li class="list-group-item">
                  <h4>RC No: </h4>
                  {data.RC_no}
                </li>
                <li class="list-group-item">
                  <h4>registeration_no: </h4>
                  {data.registeration_no}
                </li>
              </ul>

              <ul class="list-group list-group-flush col-md-5 ">
                <li class="list-group-item">
                  <h4>Engine no: </h4>
                  {data.engine_no}
                </li>
                <li class="list-group-item">
                  <h4>chassis no: </h4>
                  {data.chassis_no}
                </li>
                <li class="list-group-item">
                  <h4>Make: </h4>
                  {data.make}
                </li>
                <li class="list-group-item">
                  <h4>Model: </h4>
                  {data.model}
                </li>
                <li class="list-group-item">
                  <h4>Type Of Body: </h4>
                  {data.type_of_body}
                </li>
                <li class="list-group-item">
                  <h4>Year Manufacture: </h4>
                  {data.year_manufacture}
                </li>
                <li class="list-group-item">
                  <h4>Seat Capacity</h4>
                  {data.seat_capacity}
                </li>
                <li class="list-group-item">
                  <h4>Date Of Purchase: </h4>
                  {data.datae_purchase}
                </li>
                <li class="list-group-item">
                  <h4>Proposed Sum: </h4>
                  {data.proposes_sum}
                </li>
                <li class="list-group-item">
                  <h4>Cover Type: </h4>
                  {data.cover_type}
                </li>
                <li class="list-group-item">
                  <h4>Private Use Of Vehicle: </h4>
                  {data.private_use}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="pt-5 mt-5">
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
