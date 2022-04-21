import React, { Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

class UserDetails extends Component {
  state = {
    errors: {},
  };

  validateForm = () => {
    const { fullName, occupation, telephoneNumbers, email } =
      this.props.inputValues;
    let isValid = true;
    const errors = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (fullName === "") {
      // we use the trim to cut out any white space/ outer space
      // and at the same time it give the chance to use lenght method
      errors.fullNameLength = "Full name is requied";
      isValid = false;
    }
    // if (!userName.includes("$")) {
    //   // if it does not include $ sign den it is not valid
    //   errors.userName$ = "username must ' $ ' ";
    //   isValid = false;
    // }

    if (occupation === "") {
      // we use the trim to cut out any white space/ outer space
      // and at the same time it give the chance to use lenght method
      errors.occupationLength = "Occupation is required";
      isValid = false;
    }
    if (telephoneNumbers === "") {
      // we use the trim to cut out any white space/ outer space
      // and at the same time it give the chance to use lenght method
      errors.telephoneNumbersLength = "Occupation is required";
      isValid = false;
    }
    if (!email || regex.test(email) === false) {
      // we use the trim to cut out any white space/ outer space
      // and at the same time it give the chance to use lenght method
      errors.emailLength = "Occupation is required";
      isValid = false;
    }
    this.setState({ errors });
    return isValid; // let return valid state e.i true or false
  };

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
          <Form className="container">
            <div className="container form-content m-1">
              <p className="form_content-p">
                In completing the Proposal Form, please ensure that questions
                are answered fully and accurately and where necessary schedules
                giving further explanation are provided.
              </p>
              <div className="form_content-div">
                <h2 className="form_content-h2">
                  IMPORTANT NOTICE CONCERNING DISCLOSURE
                </h2>
                <p className="form_content-p">
                  It is your duty to disclose all material facts to
                  Underwriters. A material fact is one that is likely to
                  influence an Underwriter’s judgement and acceptance of your
                  proposal. If your proposal is a renewal of an existing policy,
                  it should also include any change in facts previously advised
                  to Underwriters. If you are in any doubt as to whether or not
                  facts are considered material, you should disclose them. “An
                  Insurance Agent who assists an applicant to complete an
                  application or proposal for insurance shall be deemed to have
                  done so as the agent of the applicant”. Please note that the
                  completion of this form is not evidence of insurance contract.
                  Linkage Assurance Plc is not on risk until full premium is
                  paid and relevant contract documents issued.
                </p>
              </div>
              <div className=" form_content-announce">
                <h2 className="form_content-h2">
                  PRIVATE CARS/COMMERCIAL VEHICLES/MOTOR CYCLES COVER
                </h2>
                <span className="form_content-p">
                  The company issues the following forms of motor insurance
                  policies:
                </span>
                <div>
                  <h4 className="form_content-h4">(a) COMPREHENSIVE</h4>
                  <span className="form_content-p">
                    Third Party liability for injury to persons and damage to
                    property. Loss of or damage to the insured vehicle by
                    accident, fire or theft, hurricane, earthquake, volcanic
                    eruption, flood or any convulsion of nature, riot, strike or
                    civil commotion.
                  </span>
                </div>
                <div>
                  <h4 className="form_content-h4">
                    (b) THIRD PARTYFIRE & THEFT
                  </h4>
                  <span className="form_content-p">
                    Third Party liability for injury to persons and damage to
                    property. Loss of or damage to the insured vehicle by fire
                    or theft
                  </span>
                </div>
                <div>
                  <h4 className="form_content-h4">(c) THIRD PARTYONLY</h4>
                  <span className="form_content-p">
                    Third Party liability for injury to persons and damage to
                    property. Policies (a), (b) and (c) include the cover
                    required under the Third Party insurance legislation.
                  </span>
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <h4>SECTION A: PERSONAL DETAILS</h4>
            </div>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formFullName"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">1:</span>{" "}
                <em>Full Name Of Proposer:</em>
              </Form.Label>
              <Form.Control
                isInvalid={
                  this.state.errors.fullNameLength &&
                  this.props.inputValues.fullName === ""
                }
                type="text"
                defaultValue={this.props.inputValues.fullName}
                name="fullName"
                required
                onChange={this.props.handleChange}
              />
              {/* <p></p> */}
            </Form.Group>

            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formResidentialAddress"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">2:</span>{" "}
                <em>Residential Address (individual customers only):</em>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.residentialAddress}
                name="residentialAddress"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formOccupation"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">3:</span>{" "}
                <em>Business/Occupation/Trade:</em>
              </Form.Label>
              <Form.Control
                isInvalid={
                  this.state.errors.occupationLength &&
                  this.props.inputValues.occupation === ""
                }
                type="email"
                defaultValue={this.props.inputValues.occupation}
                name="occupation"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formDateOfBirth"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">4:</span>{" "}
                <em>Date of Birth(individual customers only):</em>
              </Form.Label>
              <Form.Control
                type="email"
                defaultValue={this.props.inputValues.dateOfBirth}
                name="dateOfBirth"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formBusinessAddress"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">5:</span>{" "}
                <em>Business Address:</em>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.businessAddress}
                name="businessAddress"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex twoDiv"
              controlId="formDateofIncorporation"
            >
              <div className="div-incorp">
                <Form.Label className="label">
                  <span className="form-group-span">6:</span>{" "}
                  <em>Date of Incorporation (corporate customers only):</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.dateofIncorporation}
                  name="dateofIncorporation"
                  required
                  onChange={this.props.handleChange}
                />
              </div>
              <div className="div-incorp2">
                <Form.Label className="label">
                  <em>RC No.</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.rCNunmber}
                  name="rCNunmber"
                  required
                  onChange={this.props.handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formTelephoneNumbers"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">7:</span>{" "}
                <em>Telephone Numbers:</em>
              </Form.Label>
              <Form.Control
                isInvalid={
                  this.state.errors.telephoneNumbersLength &&
                  this.props.inputValues.telephoneNumbers === ""
                }
                type="text"
                defaultValue={this.props.inputValues.telephoneNumbers}
                name="telephoneNumbers"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formEmail"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">8:</span>{" "}
                <em>Email Address:</em>
              </Form.Label>
              <Form.Control
                isInvalid={this.state.errors.emailLength}
                type="text"
                defaultValue={this.props.inputValues.email}
                name="email"
                required
                onChange={this.props.handleChange}
              />
              {/* <p>{this.props.inputValues.errors.emailLength}</p> */}
            </Form.Group>
            <Form.Group
              className="container pernal-details mt-2 mb-3 d-flex"
              controlId="formWebsite"
            >
              <Form.Label className="label form-group-label">
                <span className="form-group-span">9:</span>{" "}
                <em>Website (corporate proposers only):</em>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputValues.website}
                name="website"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Button
              className="m-2 pl-2 pr-2"
              variant="primary"
              onClick={this.saveAndContinue}
            >
              Continue
            </Button>
          </Form>
        </div>
        <Footer />
      </>
    );
  }
}

export default UserDetails;
// fullName,
//       email,
//       residentialAddress,
//       city,
//       state,
//       zip,
//       occupation,
//       dateOfBirth,
//       businessAddress,
//       dateofIncorporation,
//       rCNunmber,
//       telephoneNumbers,
//       website,
