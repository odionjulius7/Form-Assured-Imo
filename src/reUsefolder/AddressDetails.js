// state = {
//     errors: {},
//   };
//   validateForm = () => {
//     const {
//       rcNumb1,
//       EngNumb1,
//       firstMake,
//       firstModel,
//       firstYOM,
//       firstSeatCap,
//       firstDOP,
//       firstPSI,
//       coverType,
//     } = this.props.inputValues;
//     let isValid = true;
//     const errors = {};

//     if (coverType === "") {
//       errors.coverTypeLength = "field is required *";
//       isValid = false;
//     }

//     if (rcNumb1 === "") {
//       errors.rcNumb1Length = "field is required";
//       isValid = false;
//     }
//     if (EngNumb1 === "") {
//       errors.EngNumb1Length = "Field is required";
//       isValid = false;
//     }
//     // // if (!userName.includes("$")) {
//     //   // if it does not include $ sign den it is not valid
//     //   errors.userName$ = "username must ' $ ' ";
//     //   isValid = false;
//     // }

//     if (firstMake === "") {
//       errors.firstMakeLength = "field is required";
//       isValid = false;
//     }
//     if (firstModel === "") {
//       errors.firstModelLength = "field is required";
//       isValid = false;
//     }
//     if (firstYOM === "") {
//       errors.firstYOMLength = "field is required";
//       isValid = false;
//     }
//     if (firstSeatCap === "") {
//       errors.firstSeatCapLength = "field is required";
//       isValid = false;
//     }
//     if (firstDOP === "") {
//       errors.firstDOPLength = "field is required";
//       isValid = false;
//     }
//     if (firstPSI === "") {
//       errors.firstPSILength = "field is required";
//       isValid = false;
//     }

//     this.setState({ errors });
//     return isValid; // let return valid state e.i true or false
//   };

//   back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   saveAndContinue = (e) => {
//     e.preventDefault();
//     const isValid = this.validateForm();

//     if (isValid) {
//       this.props.nextStep();
//     }
//   };
//   render() {
//     return (
//       <>
//         <div id="body-div">
//           <Container>
//             <Form>
//               <div>
//                 <h4 style={{ textAlign: "center" }}>
//                   SECTION B: PARTICULARS OF VEHICLE(S) TO BE INSURED
//                 </h4>
//               </div>
//               {/* TABLE */}
//               <Table bordered>
//                 <thead>
//                   <tr>
//                     <th className="table-h">&nbsp;</th>
//                     <th className="table-c">1</th>
//                     <th className="table-c">2</th>
//                     <th className="table-c">3</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="table-h">(a) Registration Number</td>
//                     <td>
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.rcNumb1Length &&
//                           this.props.inputValues.rcNumb1 === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.rcNumb1}
//                         name="rcNumb1"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.rcNumb2}
//                         name="rcNumb2"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td>
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.rcNumb3}
//                         name="rcNumb3"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(b) Engine Number</td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.EngNumb1Length &&
//                           this.props.inputValues.EngNumb1 === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.EngNumb1}
//                         name="EngNumb1"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.EngNumb2}
//                         name="EngNumb2"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.EngNumb3}
//                         name="EngNumb3"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(c) Chassis Number </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.chNumb1}
//                         name="chNumb1"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.chNumb2}
//                         name="chNumb2"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.chNumb3}
//                         name="chNumb3"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(d) Make</td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.firstMakeLength &&
//                           this.props.inputValues.firstMake === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.firstMake}
//                         name="firstMake"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondMake}
//                         name="secondMake"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdMake}
//                         name="thirdMake"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(e) Model </td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.firstModelLength &&
//                           this.props.inputValues.firstModel === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.firstModel}
//                         name="firstModel"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondModel}
//                         name="secondModel"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdModel}
//                         name="thirdModel"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(f) Type of Body </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.firstType}
//                         name="firstType"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondType}
//                         name="secondType"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdType}
//                         name="thirdType"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(g) Year of Manufacture </td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.firstYOMLength &&
//                           this.props.inputValues.firstYOM === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.firstYOM}
//                         name="firstYOM"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondYOM}
//                         name="secondYOM"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdYOM}
//                         name="thirdYOM"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">
//                       (h) Carrying or Seating Capacity{" "}
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.firstSeatCapLength &&
//                           this.props.inputValues.firstSeatCap === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.firstSeatCap}
//                         name="firstSeatCap"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondSeatCap}
//                         name="secondSeatCap"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdSeatCap}
//                         name="thirdSeatCap"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(i) Date of Purchase </td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.firstDOPLength &&
//                           this.props.inputValues.firstDOP === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.firstDOP}
//                         name="firstDOP"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondDOP}
//                         name="secondDOP"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdDOP}
//                         name="thirdDOP"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="table-h">(j) Proposed Sum Insured (N) </td>
//                     <td className="table-c">
//                       <Form.Control
//                         isInvalid={
//                           this.state.errors.firstPSILength &&
//                           this.props.inputValues.firstPSI === ""
//                         }
//                         type="text"
//                         defaultValue={this.props.inputValues.firstPSI}
//                         name="firstPSI"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.secondPSI}
//                         name="secondPSI"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                     <td className="table-c">
//                       <Form.Control
//                         type="text"
//                         defaultValue={this.props.inputValues.thirdPSI}
//                         name="thirdPSI"
//                         required
//                         onChange={this.props.handleChange}
//                       />
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <p>
//                 (Please use a separate sheet if more than three vehicles are to
//                 be insured)
//               </p>
//               &nbsp;
//               <h4 style={{ textAlign: "center" }}>
//                 SECTION C: COVER TYPE REQUIRED
//               </h4>
//               <Table bordered>
//                 <tbody>
//                   <tr>
//                     <td style={{ textAlign: "center" }}>
//                       Indicate cover required - tick ( * ) appropriate box{" "}
//                       <br />
//                       <em style={{ fontSize: "0.9rem", color: "red" }}>
//                         {this.state.errors.coverTypeLength}
//                       </em>
//                     </td>
//                     <td className="">
//                       <Form.Group
//                         className="mb-3 d-flex justify-content-start"
//                         controlId="formAddress"
//                       >
//                         <Form.Label style={{ marginRight: "2rem" }}>
//                           Comprehensive
//                         </Form.Label>
//                         <Form.Check
//                           name="coverType"
//                           type="radio"
//                           value="Comprehensive"
//                           // checked={this.props.coverType === "Comprehensive"}
//                           aria-label="radio 1"
//                           onChange={this.props.handleChange}
//                         />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3 d-flex justify-content-start"
//                         controlId="formAddress"
//                       >
//                         <Form.Label style={{ marginRight: "2rem" }}>
//                           Third Party Fire
//                           <br /> & Theft
//                         </Form.Label>
//                         <Form.Check
//                           name="coverType"
//                           type="radio"
//                           value="Third Party Fire and Theft"
//                           // checked={
//                           //   this.props.coverType === "Third Party Fire and Theft"
//                           //     ? true
//                           //     : false
//                           // }
//                           aria-label="radio 1"
//                           onChange={this.props.handleChange}
//                         />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3 d-flex justify-content-start"
//                         controlId="formAddress"
//                       >
//                         <Form.Label
//                           style={{ marginRight: "2rem" }}
//                           className=""
//                         >
//                           Third Party Only
//                         </Form.Label>
//                         <Form.Check
//                           name="coverType"
//                           type="radio"
//                           value="Third Party Only"
//                           // checked={this.props.coverType === "Third Party Only"}
//                           aria-label="radio 1"
//                           onChange={this.props.handleChange}
//                         />
//                       </Form.Group>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <span>&nbsp;</span>
//               <h4 style={{ textAlign: "center" }}>
//                 SECTION D: USE OF VEHICLE(S)
//               </h4>
//               <Table bordered>
//                 <tbody>
//                   <tr>
//                     <td
//                       className="first-tr-edit"
//                       style={{ paddingLeft: "3rem" }}
//                     >
//                       <p
//                         className="first-p-edit"
//                         style={{ paddingBottom: "2rem" }}
//                       >
//                         (a) Will the Vehicle be used only for private pleasure
//                         purposes or travelling to and from
//                         <br /> your place of business (but not used during the
//                         course of your business).
//                       </p>
//                       <p>
//                         b) Will the vehicle be used during the course of your
//                         business or employment for commercial
//                         <br /> travelling or the carriage of goods and samples
//                         (i.e. for business purposes).
//                       </p>
//                     </td>
//                     <td className="">
//                       <div className="first-radio-btn d-flex mt-2">
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label style={{ marginRight: "2rem" }}>
//                             Yes
//                           </Form.Label>
//                           <Form.Check
//                             name="PrivateUse"
//                             type="radio"
//                             value="yes"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label
//                             style={{ marginRight: "2rem" }}
//                             className=""
//                           >
//                             No
//                           </Form.Label>
//                           <Form.Check
//                             name="PrivateUse"
//                             type="radio"
//                             value="no"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                       </div>
//                       <div className="first-radio-btn first-btn-edit d-flex mt-5 pt-2">
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label style={{ marginRight: "2rem" }}>
//                             Yes
//                           </Form.Label>
//                           <Form.Check
//                             name="commercialUse"
//                             type="radio"
//                             value="yes"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label
//                             style={{ marginRight: "2rem" }}
//                             className=""
//                           >
//                             No
//                           </Form.Label>
//                           <Form.Check
//                             name="commercialUse"
//                             type="radio"
//                             value="no"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <span>&nbsp;</span>
//               <h4 style={{ textAlign: "center" }}>
//                 SECTION E: OWNERSHIP OF VEHICLE(S)
//               </h4>
//               <Table bordered>
//                 <tbody>
//                   <tr>
//                     <td
//                       className="first-tr-edit"
//                       style={{ paddingLeft: "3rem" }}
//                     >
//                       <p style={{ paddingBottom: "2rem" }}>
//                         a) Are you the sole owner of the vehicle(s) to be
//                         insured, and are they registered in your name? <br />
//                         If ‘No’ please state particulars of ownership and
//                         registration.
//                       </p>
//                       <p>
//                         b) Are any of the vehicles being financed by a Hire
//                         Purchase Agreement or other type of contract?
//                         <br /> If ‘Yes’ state name and address of finance
//                         company.
//                       </p>
//                     </td>
//                     <td className="">
//                       <div className="first-radio-btn d-flex mt-2">
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label style={{ marginRight: "2rem" }}>
//                             Yes
//                           </Form.Label>
//                           <Form.Check
//                             name="personal"
//                             type="radio"
//                             value="yes"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label
//                             style={{ marginRight: "2rem" }}
//                             className=""
//                           >
//                             No
//                           </Form.Label>
//                           <Form.Check
//                             name="personal"
//                             type="radio"
//                             value="no"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                       </div>
//                       <div className="first-radio-btn first-btn-edit d-flex mt-5 pt-2">
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label style={{ marginRight: "2rem" }}>
//                             Yes
//                           </Form.Label>
//                           <Form.Check
//                             name="hirePurchase"
//                             type="radio"
//                             value="no"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-2 d-flex "
//                           controlId="formAddress"
//                         >
//                           <Form.Label
//                             style={{ marginRight: "2rem" }}
//                             className=""
//                           >
//                             No
//                           </Form.Label>
//                           <Form.Check
//                             name="hirePurchase"
//                             type="radio"
//                             value="no"
//                             // checked={this.props.coverType === "Comprehensive"}
//                             aria-label="radio 1"
//                             onChange={this.props.handleChange}
//                           />
//                         </Form.Group>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               {/* Tabble End */}
//               <Button
//                 className="back-btn"
//                 variant="secondary"
//                 onClick={this.back}
//               >
//                 Back
//               </Button>{" "}
//               <Button variant="primary" onClick={this.saveAndContinue}>
//                 continue
//               </Button>
//             </Form>
//           </Container>
//         </div>
//       </>
//     );
//   }
// }

// export default AddressDetails;

// rcNumb1,
// rcNumb2,
// rcNumb3,
// EngNumb1,
// EngNumb2,
// EngNumb3,
// chNumb1,
// chNumb2,
// chNumb3,
//
// firstMake,
// secondMake,
// thirdMake,
//
// firstModel,
// secondModel,
// thirdModel,
//
// firstType,
// secondType,
// thirdType,
//
// firstYOM,
// secondYOM,
// thirdYOM,
//
// firstSeatCap,
// secondSeatCap,
// thirdSeatCap,
//
// firstDOP,
// secondDOP,
// thirdDOP,
//
// firstPSI,
// secondPSI,
// thirdPSI,
//
// firstPSI,
// secondPSI,
// thirdPSI,
//
// coverType,
//
// PrivateUse,
// commercialUse,
//
// personal,
// hirePurchase,
