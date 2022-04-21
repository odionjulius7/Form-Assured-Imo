import React, { Component } from "react";
import { Form, Button, Col, Container, Table } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

class InsuredForm extends Component {
  state = {
    errors: {},
  };
  validateForm = () => {
    const { nameofProposer, date, selectedFile } = this.props.inputValues;
    let isValid = true;
    const errors = {};

    if (nameofProposer === "") {
      errors.nameofProposerLength = "field is required *";
      isValid = false;
    }
    if (date === "") {
      errors.dateLength = "field is required *";
      isValid = false;
    }
    if (selectedFile === null) {
      errors.selectedFileLength = "field is required *";
      isValid = false;
    }

    // // if (!userName.includes("$")) {
    //   // if it does not include $ sign den it is not valid
    //   errors.userName$ = "username must ' $ ' ";
    //   isValid = false;
    // }

    this.setState({ errors });
    return isValid;
  };

  //
  back = (e) => {
    e.preventDefault();

    this.props.prevStep();
  };

  saveAndContinue = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      this.props.nextStep();
    }
  };

  render() {
    return (
      <>
        <Header />
        <div id="body-div">
          <Form className="container mt-5 mb-4">
            <h2 style={{ textAlign: "center" }}>
              SECTION F: USE OF THE VEHICLE(S)
            </h2>
            {/* TABLE */}
            <Table bordered className="t-border">
              <tbody className="bod-width">
                <tr>
                  <td className="tr-width pb-4" colSpan={2}>
                    If used for Carriage of goods
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    (a) What is their general nature
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={this.props.inputValues.carriageGN}
                      name="carriageGN"
                      required
                      onChange={this.props.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    (b) Do you undertake cartage for other persons?
                  </td>
                  <td>
                    <div className="first-radio-btn d-flex mt-2">
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label style={{ marginRight: "2rem" }}>
                          Yes
                        </Form.Label>
                        <Form.Check
                          name="cartageFOP"
                          type="radio"
                          value="yes"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label
                          style={{ marginRight: "2rem" }}
                          className=""
                        >
                          No
                        </Form.Label>
                        <Form.Check
                          name="cartageFOP"
                          type="radio"
                          value="no"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    (c) Has the Vehicle been altered or adapted to carry a load
                    heavier than that stated in the Maker's published
                    specification
                  </td>
                  <td>
                    <div className="first-radio-btn d-flex mt-2">
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label style={{ marginRight: "2rem" }}>
                          Yes
                        </Form.Label>
                        <Form.Check
                          name="vehicleAltered"
                          type="radio"
                          value="yes"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label
                          style={{ marginRight: "2rem" }}
                          className=""
                        >
                          No
                        </Form.Label>
                        <Form.Check
                          name="vehicleAltered"
                          type="radio"
                          value="no"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    If answer to b) or c) is ‘Yes’, please give details.
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      defaultValue={
                        this.props.inputValues.optTOCartageFOPVehicleAlt
                      }
                      name="optTOCartageFOPVehicleAlt"
                      required
                      onChange={this.props.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tr-width pt-5" colSpan={2}>
                    If used for Carrying Passengers
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    (a) Are the Passengers carried for hire or reward
                  </td>
                  <td>
                    <div className="first-radio-btn d-flex mt-2">
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label style={{ marginRight: "2rem" }}>
                          Yes
                        </Form.Label>
                        <Form.Check
                          name="passangerCarry"
                          type="radio"
                          value="yes"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label
                          style={{ marginRight: "2rem" }}
                          className=""
                        >
                          No
                        </Form.Label>
                        <Form.Check
                          name="passangerCarry"
                          type="radio"
                          value="no"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    (b) Is the Vehicle used for public service
                  </td>
                  <td>
                    <div className="first-radio-btn d-flex mt-2">
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label style={{ marginRight: "2rem" }}>
                          Yes
                        </Form.Label>
                        <Form.Check
                          name="vehiclePublicUse"
                          type="radio"
                          value="yes"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-2 d-flex "
                        controlId="formAddress"
                      >
                        <Form.Label
                          style={{ marginRight: "2rem" }}
                          className=""
                        >
                          No
                        </Form.Label>
                        <Form.Check
                          name="vehiclePublicUse"
                          type="radio"
                          value="no"
                          // checked={this.props.coverType === "Comprehensive"}
                          aria-label="radio 1"
                          onChange={this.props.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="tr-width" colSpan={2}>
                    (c) State class of vehicle licence
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      defaultValue={
                        this.props.inputValues.classOfVehicleLicence
                      }
                      name="classOfVehicleLicence"
                      required
                      onChange={this.props.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* TABLE */}
            {/* new SECTION */}
            <section>
              <p className="mt-4 mb-3">
                NB. Please read the following declaration very carefully and
                read again the questions and answers especially if not completed
                in your
                <br />
                own hand, before signing the form.{" "}
              </p>

              <div className="section-content mt-2 mb-4">
                <h5>Declaration</h5>
                <p>
                  I/We declare that to the best of my/our knowledge and belief:
                </p>
                <p>(a) the above answers are true </p>
                <p>
                  (b) all material particulars affecting the assessment of the
                  risk have been disclosed{" "}
                </p>
                <p>
                  (c) the vehicle(s) is/are in a sound and road-worthy
                  condition.{" "}
                </p>
              </div>
              <div className="section-form mb-5">
                <p>
                  I/We agree that this proposal and declaration shall be the
                  basis of the contract between me/us and the Insurers and shall
                  be deemed to be incorporated in such contract.{" "}
                </p>
                <h5>Signed by Proposer</h5>
                <Form.Group
                  style={{
                    width: "60%",
                    alignItems: "center",
                  }}
                  className="container mt-2 mb-3 d-flex"
                  controlId="formWebsite"
                >
                  <Form.Label className="label pb-3">
                    <span className="form-group-span">&nbsp;</span>{" "}
                    <em>Name:</em>
                  </Form.Label>
                  <Form.Control
                    isInvalid={
                      this.state.errors.nameofProposerLength &&
                      this.props.inputValues.nameofProposer === ""
                    }
                    type="text"
                    defaultValue={this.props.inputValues.nameofProposer}
                    name="nameofProposer"
                    required
                    onChange={this.props.handleChange}
                  />
                </Form.Group>
                <div className="container div-file d-flex">
                  <Form.Group
                    style={{
                      width: "30%",
                      alignItems: "center",
                    }}
                    className="container div-file-pic mt-2 mb-3 d-flex"
                    controlId="formSignature"
                  >
                    <Form.Label className="label">
                      <span className="form-group-span">&nbsp;</span>{" "}
                      <em>Proposer’s Signature:</em>
                    </Form.Label>
                    <Form.Control
                      isInvalid={
                        this.state.errors.selectedFileLength &&
                        this.props.inputValues.selectedFile === null
                      }
                      required
                      // onChange={this.props.handleChange}
                      type="file"
                      // size="sm"
                      onChange={(event) =>
                        this.props.handleFileChange(
                          event.target.files[0] || null
                        )
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    style={{
                      width: "40%",
                      alignItems: "center",
                    }}
                    className="container date-div mt-2 mb-3 d-flex"
                    controlId="formDate"
                  >
                    <Form.Label className="label pb-3">
                      <span className="form-group-span">&nbsp;</span>{" "}
                      <em>Date:</em>
                    </Form.Label>
                    <Form.Control
                      isInvalid={
                        this.state.errors.dateLength &&
                        this.props.inputValues.date === ""
                      }
                      type="text"
                      defaultValue={this.props.inputValues.date}
                      name="date"
                      required
                      onChange={this.props.handleChange}
                    />
                  </Form.Group>
                </div>
              </div>
            </section>
            <Button
              className="back-btn"
              variant="secondary"
              onClick={this.back}
            >
              Back
            </Button>{" "}
            <Button variant="primary" onClick={this.saveAndContinue}>
              continue
            </Button>
          </Form>
        </div>
        <Footer />
      </>
    );
  }
}

export default InsuredForm;

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
