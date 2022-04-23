import React from "react";

import { useGlobalContext } from "../InsuranceContext";

export default function UserDetails() {
  const { data, nextStep, handleChange } = useGlobalContext();

  const fireNextStep = () => {
    nextStep();
  };

  return (
    <>
      <form
        id="wrapped"
        method="post"
        action="step-4.html"
        // enctype="multipart/form-data"
      >
        <input id="website" name="website" type="text" value="" />
        <div id="middle-wizard">
          <div className="step">
            <h2 className="section_title">Section A</h2>
            <h3 className="main_question">PERSONAL DETAILS</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Full Name of Proposer"
                    defaultValue={data.full_name}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
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
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Business/Occupation/Trade"
                    id="occupation"
                    className="form-control"
                    defaultValue={data.occupation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
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
                  <input
                    type="text"
                    name="telephone_no"
                    id="telephone_no"
                    placeholder="Telephone Numbers"
                    className="form-control"
                    defaultValue={data.telephone_no}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="form-control"
                    defaultValue={data.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
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
