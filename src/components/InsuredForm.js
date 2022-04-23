import React from "react";
// import { Form, Button, Col, Container, Table } from "react-bootstrap";
import { useGlobalContext } from "../InsuranceContext";

export default function InsuredForm() {
  const { data, nextStep, prevStep, handleChange } = useGlobalContext();
  const {
    general_nature_of_goods_carried,
    State_class_of_vehicle_licence,
    ifAlterdAndUndertakeCartageGiveDetails,
  } = data;

  const fireNextStep = () => {
    nextStep();
  };

  const backToPrevStep = () => {
    prevStep();
  };

  // general_nature_of_goods_carried: "",
  // do_u_undertake_cartage_for_people: "",
  // has_the_vehicle_been_altered: "",
  // ifAlterdAndUndertakeCartageGiveDetails
  // isItUsedToCarryPeopleForReward: "",
  // isTheVehicleUsedForPublicService: "",
  // State_class_of_vehicle_licence

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
            <h2 className="section_title">Section F:</h2>
            <h3 className="main_question">USE OF THE VEHICLE(S)</h3>
            <div className="row mb-3">
              <h5>If used for Carriage of goods</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <div className="col-md-8">
                    <div className="form-group">
                      <input
                        type="text"
                        name="general_nature_of_goods_carried"
                        id="general_nature_of_goods_carried"
                        className="form-control"
                        placeholder="(a) What is their general nature"
                        defaultValue={general_nature_of_goods_carried}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-7" />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>(b) Do you undertake cartage for other persons?</label>
                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio">
                        Yes
                        <input
                          type="radio"
                          name="do_u_undertake_cartage_for_people"
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
                          name="do_u_undertake_cartage_for_people"
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
            <hr className="mt-7" />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    (c) Has the Vehicle been altered or adapted to carry a load
                    heavier than that stated in the Maker's published
                    specification.
                  </label>
                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio mr-3">
                        Yes
                        <input
                          type="radio"
                          name="has_the_vehicle_been_altered"
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
                          name="has_the_vehicle_been_altered"
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
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    name="ifAlterdAndUndertakeCartageGiveDetails"
                    id="ifAlterdAndUndertakeCartageGiveDetails"
                    className="form-control"
                    placeholder="If answer to b) or c) is ‘Yes’, please give details. "
                    defaultValue={ifAlterdAndUndertakeCartageGiveDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-7" />
            <div className="row mt-4 mb-2">
              <h5>If used for Carrying Passengers </h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>
                    (a) Are the Passengers carried for hire or reward{" "}
                  </label>
                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio">
                        Yes
                        <input
                          type="radio"
                          name="isItUsedToCarryPeopleForReward"
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
                          name="isItUsedToCarryPeopleForReward"
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
            <hr className="mt-7" />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group float-radio">
                  <label>(b) Is the Vehicle used for public service</label>
                  <div className="col-md-8">
                    <div className="form-group radio_input">
                      <label className="container_radio">
                        Yes
                        <input
                          type="radio"
                          name="isTheVehicleUsedForPublicService"
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
                          name="isTheVehicleUsedForPublicService"
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
            {/* <hr className="mt-7" /> */}
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    name="State_class_of_vehicle_licence"
                    id="State_class_of_vehicle_licence"
                    className="form-control"
                    placeholder="(c) State class of vehicle licence "
                    defaultValue={State_class_of_vehicle_licence}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* <!-- <div c>
                                </div> --> */}
            {/* <div className="row">
              <div className="col-md-6">
      
              </div>
            </div> */}
            <hr className="mt-7" />
            {/* <div className="row">
              
              </div>
            </div> */}
          </div>
        </div>
        <div id="bottom-wizard">
          <button name="backward" className="backward" onClick={backToPrevStep}>
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

// carriageGN,
//     cartageFOP,
//     vehicleAltered
// ,
//     optTOCartageFOPVehicleAlt,
//
//     passangerCarry,
//
//     vehiclePublicUse,
//
//     classOfVehicleLicence,
//
//     nameofProposer,
//
//     signature,
//     date,
