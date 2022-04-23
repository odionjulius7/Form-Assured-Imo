import React, { useState } from "react";
// import { Form, Button, Col, Container, Table } from "react-bootstrap";
import { useGlobalContext } from "../InsuranceContext";

export default function RadioSection() {
  const { data, nextStep, prevStep, handleChange } = useGlobalContext();
  const {
    notSoleOwnerOfVehiStateParticular,
    ifHirePurchasedStateNameOfFinancedCompany,
  } = data;

  const [errors, setError] = useState({});

  const validateForm = () => {
    const {
      cover_type,
      private_use,
      commercial_use,
      soleOwnerOfVehicle,
      notSoleOwnerOfVehiStateParticular,
      isVehicleHirePurchased,
      ifHirePurchasedStateNameOfFinancedCompany,
    } = data;

    let errors = {};
    let formIsValid = true;

    if (!cover_type) {
      formIsValid = false;
      errors["cover_type"] = "*Please enter field.";
    }

    if (!private_use) {
      formIsValid = false;
      errors["private_use"] = "*Please enter field.";
    }

    if (!commercial_use) {
      formIsValid = false;
      errors["commercial_use"] = "*Please enter field.";
    }
    setError(errors);
    return formIsValid;
  };

  const fireNextStep = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
    return;
  };

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
  // ifHirePurchasedStateNameOfFinancedCompany: ""

  return (
    <>
      <form
        id="wrapped"
        method="post"
        action="step-2.html"
        // enctype="multipart/form-data"
      >
        <input id="website" name="website" type="text" value="" />
        {/* <!-- Leave for security protection, read docs for details --> */}
        <div id="middle-wizard">
          <div className="step">
            <h2 className="section_title">Section C</h2>
            <h3 className="main_question">COVER TYPE REQUIRED</h3>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    Indicate cover required - tick ( * ) appropriate box
                  </label>
                  <div className="errorMsg">{errors["cover_type"]}</div>
                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio mr-3">
                        Comprehensive
                        <input
                          type="radio"
                          name="cover_type"
                          defaultValue="Comprehensive"
                          // checked={data.cover_type === "Comprehensive"}
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container_radio">
                        Third Party Fire & Theft
                        <input
                          type="radio"
                          name="cover_type"
                          defaultValue="Third Party Fire & Theft"
                          // checked={private_use === "Third Party Fire & Theft"}
                          onChange={handleChange}
                          className=""
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container_radio">
                        Third Party Only
                        <input
                          type="radio"
                          name="cover_type"
                          defaultValue="Third Party Only"
                          // checked={private_use === "Third Party Only"}
                          onChange={handleChange}
                          className=""
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-15" />
            <h2 className="section_title">Section D</h2>
            <h3 className="main_question"> USE OF VEHICLE(S) </h3>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    (a) Will the Vehicle be used only for private pleasure
                    purposes or travelling to and from your place of business
                    (but not used during the course of your business).
                  </label>
                  <div className="errorMsg">{errors["private_use"]}</div>
                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio">
                        Yes
                        <input
                          type="radio"
                          name="private_use"
                          defaultValue="yes"
                          // checked={data.cover_type === "yes"}
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container_radio">
                        No
                        <input
                          type="radio"
                          name="private_use"
                          defaultValue="no"
                          // checked={data.cover_type === "no"}
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-15" />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    b) Will the vehicle be used during the course of your
                    business or employment for commercial travelling or the
                    carriage of goods and samples (i.e. for business purposes).
                  </label>
                  <div className="errorMsg">{errors["commercial_use"]}</div>
                  <div className="">
                    <div className="form-group radio_input">
                      <label className="container_radio">
                        yes
                        <input
                          type="radio"
                          name="commercial_use"
                          value="yes"
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container_radio">
                        no
                        <input
                          type="radio"
                          name="commercial_use"
                          value="no"
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-15" />
            <h2 className="section_title">Section E</h2>
            <h3 className="main_question">OWNERSHIP OF VEHICLE(S)</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    a)Are you the sole owner of the vehicle(s) to be insured,
                    and are they registered in your name?
                  </label>

                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio">
                        Yes
                        <input
                          type="radio"
                          name="soleOwnerOfVehicle"
                          value="yes"
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container_radio">
                        No
                        <input
                          type="radio"
                          name="soleOwnerOfVehicle"
                          value="no"
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <input
                        type="text"
                        name="notSoleOwnerOfVehiStateParticular"
                        id="notSoleOwnerOfVehiStateParticular"
                        className="form-control"
                        placeholder=" If ‘No’ please state particulars of ownership and registration."
                        defaultValue={notSoleOwnerOfVehiStateParticular}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-15" />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    b)Are any of the vehicles being financed by a Hire Purchase
                    Agreement or other type of contract?
                  </label>

                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio mr-3">
                        Yes
                        <input
                          type="radio"
                          name="isVehicleHirePurchased"
                          value="yes"
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container_radio">
                        No
                        <input
                          type="radio"
                          name="isVehicleHirePurchased"
                          value="no"
                          className=""
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <input
                        type="text"
                        name="ifHirePurchasedStateNameOfFinancedCompany"
                        id="ifHirePurchasedStateNameOfFinancedCompany"
                        className="form-control"
                        defaultValue={ifHirePurchasedStateNameOfFinancedCompany}
                        onChange={handleChange}
                        placeholder="If ‘Yes’ state name and
                        address of finance company."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-md-6">
                
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-6">
                
                  />
                </div>
              </div> */}
              {/* <div className="col-md-6">
                
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div id="bottom-wizard">
          <button
            href="index.html"
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
      </form>
    </>
  );
}
