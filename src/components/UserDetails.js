import React, { useState } from "react";

import { useGlobalContext } from "../InsuranceContext";

export default function UserDetails() {
  const { data, nextStep, handleChange, setData } = useGlobalContext();
  const [errors, setError] = useState({});

  const validateForm = () => {
    const {
      full_name,
      residential_address,
      occupation,
      date_of_birth,
      business_address,
      date_of_incorp,
      RC_no,
      telephone_no,
      email,
      website,
    } = data;
    let errors = {};
    let formIsValid = true;

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!full_name || !full_name.match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["full_name"] = "*Please enter your full name.";
    }

    if (!email && !regex.test(email)) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (!telephone_no && !telephone_no.match(/^[0-9]{10}$/)) {
      formIsValid = false;
      errors["telephone_no"] = "*Please enter your phone number.";
    }

    if (!occupation) {
      formIsValid = false;
      errors["occupation"] = "*Please enter your field.";
    }

    // if (!residential_address) {
    //   formIsValid = false;
    //   errors["residential_address"] = "*Please enter your username.";
    // }

    // if (!website) {
    //   formIsValid = false;
    //   errors["website"] = "*Please enter your username.";
    // }

    // if (!date_of_birth) {
    //   formIsValid = false;
    //   errors["date_of_birth"] = "*Please enter your date of birth.";
    // }

    // if (!business_address) {
    //   formIsValid = false;
    //   errors["business_address"] = "*Please enter your business address.";
    // }

    // if (!date_of_incorp) {
    //   formIsValid = false;
    //   errors["date_of_incorp"] = "*Please enter your field.";
    // }
    // if (!RC_no) {
    //   formIsValid = false;
    //   errors["RC_no"] = "*Please enter your field.";
    // }
    // if (!fields["password"]) {
    //   formIsValid = false;
    //   errors["password"] = "*Please enter your password.";
    // }

    setError(errors);
    return formIsValid;
  };

  console.log(errors);

  const fireNextStep = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
    return;
  };

  return (
    <>
      <form id="wrapped">
        <input id="website" name="website" type="text" value="" />
        <div id="middle-wizard">
          <div className="step">
            <h2 className="section_title">Section A</h2>
            <h3 className="main_question">PERSONAL DETAILS</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Full Name of Proposer"
                    defaultValue={data.full_name}
                    className="form-control"
                    onChange={handleChange}
                  />
                  <div className="errorMsg">{errors["full_name"]}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    name="residential_address"
                    placeholder="Residential Address (individual only)"
                    id="residential_address"
                    className="form-control"
                    defaultValue={data.residential_address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">
                    Business/Occupation/Trade
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Business/Occupation/Trade"
                    id="occupation"
                    className="form-control"
                    defaultValue={data.occupation}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">{errors["occupation"]}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Date Of Birth</label>
                  <input
                    type="text"
                    name="date_of_birth"
                    id="date_of_birth"
                    placeholder="Date of Birth(individual only)"
                    className="form-control"
                    defaultValue={data.date_of_birth}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Business Address</label>
                  <input
                    type="text"
                    name="business_address"
                    id="business_address"
                    placeholder="Business Address"
                    className="form-control"
                    defaultValue={data.business_address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">
                    Date Of Incorporation
                  </label>
                  <input
                    type="text"
                    name="date_of_incorp"
                    id="date_of_incorp"
                    defaultValue={data.date_of_incorp}
                    placeholder="Date of Incorporation (corporate only)"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">RC No:</label>
                  <input
                    type="text"
                    name="RC_no"
                    id="RC_no"
                    defaultValue={data.RC_no}
                    placeholder="RC No (corporate only)"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Telephone No:</label>
                  <input
                    type="text"
                    name="telephone_no"
                    id="telephone_no"
                    placeholder="Telephone Numbers"
                    className="form-control"
                    defaultValue={data.telephone_no}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">{errors["telephone_no"]}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="form-control"
                    defaultValue={data.email}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">{errors["email"]}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-group-label">Website</label>
                  <input
                    type="text"
                    name="website"
                    // id="website"
                    placeholder="Website (corporate)"
                    className="form-control"
                    defaultValue={data.website}
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
          {/* <a href="step-2.html" name="backward" className="backward">
            Prev
          </a> */}
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
