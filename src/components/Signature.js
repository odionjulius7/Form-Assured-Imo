// import { isOpacityEffect } from "html2canvas/dist/types/render/effects";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Form, Button, Col, Container, Table } from "react-bootstrap";
import { useGlobalContext } from "../InsuranceContext";

export default function Signature() {
  const {
    step,
    data,
    nextStep,
    prevStep,
    handleChange,
    handleFileChange,
    forward,
  } = useGlobalContext();
  const { proposersName, date, scanSignature } = data;

  const [errors, setError] = useState({});

  const validateForm = () => {
    const { proposersName, scanSignature, date } = data;
    let errors = {};
    let formIsValid = true;

    if (!proposersName) {
      formIsValid = false;
      errors["proposersName"] = "*Please enter field.";
    }

    if (!scanSignature) {
      formIsValid = false;
      errors["scanSignature"] = "*Please enter field.";
    }
    if (!date) {
      formIsValid = false;
      errors["date"] = "*Please enter field.";
    }

    setError(errors);
    return formIsValid;
  };

  const fireSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      forward();
    }
    return;
  };

  const backToPrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };
  // proposersName: "",
  // scanSignature: "",
  // date:
  console.log(errors);

  return (
    <>
      <form
        id="wrapped"
        // enctype="multipart/form-data"
      >
        <input id="website" name="website" type="text" value="" />
        {/* <!-- Leave for security protection, read docs for details --> */}
        <div id="middle-wizard">
          <div className="step">
            <div className="row mt-4 mb-2">
              <h5>Declaration:</h5>
              <p>
                I/We declare that to the best of my/our knowledge and belief:
              </p>
              <p>(a) the above answers are true </p>
              <p>
                (b) all material particulars affecting the assessment of the
                risk have been disclosed{" "}
              </p>
              <p>
                (c) the vehicle(s) is/are in a sound and road-worthy condition.
              </p>
            </div>
            <div className="row mt-4 mb-2">
              <p>
                I/We agree that this proposal and declaration shall be the basis
                of the contract between me/us and the Insurers and shall be
                deemed to be incorporated in such contract.{" "}
              </p>
            </div>
            <div className="row mt-4 mb-3">
              <h5>Signed by Proposer</h5>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label className="form-group-label">Proposer's name</label>
                  <input
                    type="text"
                    name="proposersName"
                    id="proposersName"
                    className="form-control"
                    placeholder="Name of proposer"
                    defaultValue={proposersName}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">{errors["proposersName"]}</div>
                </div>
              </div>
            </div>
            {/* <!-- <div className="row"> </div> --> */}
            {/* <div className="row"></div> */}
            <hr className="mt-7" />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">
                    Proposer’s Signature:
                  </label>
                  <div className="fileupload add_bottom_20">
                    <input
                      type="file"
                      name="scanSignature"
                      accept=".jpg,.png"
                      className=""
                      onChange={(event) =>
                        handleFileChange(event.target.files[0] || null)
                      }
                    />
                    <div className="errorMsg">{errors["scanSignature"]}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Date;</label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="form-control"
                    placeholder="Date"
                    defaultValue={date}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">{errors["date"]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom-wizard">
          <button name="backward" className="backward" onClick={backToPrevStep}>
            Prev
          </button>
          <Link to="/payment">
            <button
              type="submit"
              name="forward"
              className="forward"
              // onClick={fireSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
      {/* <img
        style={{
          width: "20rem",
          height: "auto",
        }}
        src={scanSignature}
        alt="image"
      /> */}
    </>
  );
}
