import React, { Component } from "react";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import InsuredForm from "./InsuredForm";

class MultiStepForm extends Component {
  userData;
  state = {
    step: 1,
    fullName: "",
    lastName: "",
    email: "",
    residentialAddress: "",
    city: "",
    state: "",
    zip: "",
    occupation: "",
    dateOfBirth: "",
    businessAddress: "",
    dateofIncorporation: "",
    rCNunmber: "",
    telephoneNumbers: "",
    website: "",
    rcNumb1: "",
    rcNumb2: "",
    rcNumb3: "",
    EngNumb1: "",
    EngNumb2: "",
    EngNumb3: "",
    chNumb1: "",
    chNumb2: "",
    chNumb3: "",
    firstMake: "",
    secondMake: "",
    thirdMake: "",
    firstModel: "",
    secondModel: "",
    thirdModel: "",
    firstType: "",
    secondType: "",
    thirdType: "",
    firstYOM: "",
    secondYOM: "",
    thirdYOM: "",
    firstSeatCap: "",
    secondSeatCap: "",
    thirdSeatCap: "",
    firstDOP: "",
    secondDOP: "",
    thirdDOP: "",
    firstPSI: "",
    secondPSI: "",
    thirdPSI: "",
    coverType: "",
    PrivateUse: "",
    commercialUse: "",
    personal: "",
    hirePurchase: "",
    carriageGN: "",
    cartageFOP: "",
    vehicleAltered: "",
    optTOCartageFOPVehicleAlt: "",
    passangerCarry: "",
    vehiclePublicUse: "",
    classOfVehicleLicence: "",
    nameofProposer: "",
    selectedFile: null,
    date: "",
    //
    // form validation
    errors: {},
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: value,
        })
      : this.setState({
          [name]: value,
        });
  };

  nextStep = () => {
    const { step } = this.state;

    // const isValid = this.validateForm();

    this.setState({
      step: step + 1,
    });
  };

  // handleFileChange = (event) => {
  //   this.setState({
  //     selectedFile: event.target.files[0],
  //   });
  //   console.log(this.state.selectedFile);
  // };

  fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  handleFileChange = (file) => {
    if (!file) {
      this.setState({
        selectedFile: null,
      });
      return;
    }

    this.fileToDataUri(file).then((dataUri) => {
      this.setState({
        selectedFile: dataUri,
      });
    });
  };

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        step: this.userData.step,
        fullName: this.userData.fullName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        residentialAddress: this.userData.residentialAddress,
        city: this.userData.city,
        state: this.userData.state,
        zip: this.userData.zip,
        occupation: this.userData.occupation,
        dateOfBirth: this.userData.dateOfBirth,
        businessAddress: this.userData.businessAddress,
        dateofIncorporation: this.userData.dateofIncorporation,
        rCNunmber: this.userData.rCNunmber,
        telephoneNumbers: this.userData.telephoneNumbers,
        website: this.userData.website,
        rcNumb1: this.userData.rcNumb1,
        rcNumb2: this.userData.rcNumb2,
        rcNumb3: this.userData.rcNumb3,
        EngNumb1: this.userData.EngNumb1,
        EngNumb2: this.userData.EngNumb2,
        EngNumb3: this.userData.EngNumb3,
        chNumb1: this.userData.chNumb1,
        chNumb2: this.userData.chNumb2,
        chNumb3: this.userData.chNumb3,
        firstMake: this.userData.firstMake,
        secondMake: this.userData.secondMake,
        thirdMake: this.userData.thirdMake,
        firstModel: this.userData.firstModel,
        secondModel: this.userData.secondModel,
        thirdModel: this.userData.thirdModel,
        firstType: this.userData.firstType,
        secondType: this.userData.secondType,
        thirdType: this.userData.thirdType,
        firstYOM: this.userData.firstYOM,
        secondYOM: this.userData.secondYOM,
        thirdYOM: this.userData.thirdYOM,
        firstSeatCap: this.userData.firstSeatCap,
        secondSeatCap: this.userData.secondSeatCap,
        thirdSeatCap: this.userData.thirdSeatCap,
        firstDOP: this.userData.firstDOP,
        secondDOP: this.userData.secondDOP,
        thirdDOP: this.userData.thirdDOP,
        firstPSI: this.userData.firstPSI,
        secondPSI: this.userData.secondPSI,
        thirdPSI: this.userData.thirdPSI,
        coverType: this.userData.coverType,
        PrivateUse: this.userData.PrivateUse,
        commercialUse: this.userData.commercialUse,
        personal: this.userData.personal,
        hirePurchase: this.userData.hirePurchase,
        carriageGN: this.userData.carriageGN,
        cartageFOP: this.userData.cartageFOP,
        vehicleAltered: this.userData.vehicleAltered,
        optTOCartageFOPVehicleAlt: this.userData.optTOCartageFOPVehicleAlt,
        passangerCarry: this.userData.passangerCarry,
        vehiclePublicUse: this.userData.vehiclePublicUse,
        classOfVehicleLicence: this.userData.classOfVehicleLicence,
        nameofProposer: this.userData.nameofProposer,
        selectedFile: this.userData.selectedFile,
        date: this.userData.date,
      });
    } else {
      this.setState({
        step: 1,
        fullName: "",
        lastName: "",
        email: "",
        residentialAddress: "",
        city: "",
        state: "",
        zip: "",
        occupation: "",
        dateOfBirth: "",
        businessAddress: "",
        dateofIncorporation: "",
        rCNunmber: "",
        telephoneNumbers: "",
        //
        website: "",
        rcNumb1: "",
        rcNumb2: "",
        rcNumb3: "",
        EngNumb1: "",
        EngNumb2: "",
        EngNumb3: "",
        chNumb1: "",
        chNumb2: "",
        chNumb3: "",
        firstMake: "",
        secondMake: "",
        thirdMake: "",
        firstModel: "",
        secondModel: "",
        thirdModel: "",
        firstType: "",
        secondType: "",
        thirdType: "",
        //
        firstYOM: "",
        secondYOM: "",
        thirdYOM: "",
        firstSeatCap: "",
        secondSeatCap: "",
        thirdSeatCap: "",
        firstDOP: "",
        secondDOP: "",
        thirdDOP: "",
        firstPSI: "",
        secondPSI: "",
        thirdPSI: "",
        coverType: "",
        PrivateUse: "",
        commercialUse: "",
        //
        personal: "",
        hirePurchase: "",
        carriageGN: "",
        cartageFOP: "",
        vehicleAltered: "",
        optTOCartageFOPVehicleAlt: "",
        passangerCarry: "",
        vehiclePublicUse: "",
        classOfVehicleLicence: "",
        nameofProposer: "",
        selectedFile: null,
        date: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    const {
      step,
      fullName,
      email,
      residentialAddress,
      city,
      state,
      zip,
      occupation,
      dateOfBirth,
      businessAddress,
      dateofIncorporation,
      rCNunmber,
      telephoneNumbers,
      website,
      rcNumb1,
      rcNumb2,
      rcNumb3,
      EngNumb1,
      EngNumb2,
      EngNumb3,
      chNumb1,
      chNumb2,
      chNumb3,
      firstMake,
      secondMake,
      thirdMake,
      firstModel,
      secondModel,
      thirdModel,
      firstType,
      secondType,
      thirdType,
      firstYOM,
      secondYOM,
      thirdYOM,
      firstSeatCap,
      secondSeatCap,
      thirdSeatCap,
      firstDOP,
      secondDOP,
      thirdDOP,
      firstPSI,
      secondPSI,
      thirdPSI,
      coverType,
      PrivateUse,
      commercialUse,
      personal,
      hirePurchase,
      carriageGN,
      cartageFOP,
      vehicleAltered,
      optTOCartageFOPVehicleAlt,
      passangerCarry,
      vehiclePublicUse,
      classOfVehicleLicence,
      nameofProposer,
      selectedFile,
      date,
      errors,
    } = this.state;
    // console.log(errors.fullNameLength);
    const inputValues = {
      step,
      fullName,
      email,
      residentialAddress,
      city,
      state,
      zip,
      occupation,
      dateOfBirth,
      businessAddress,
      dateofIncorporation,
      rCNunmber,
      telephoneNumbers,
      website,
      rcNumb1,
      rcNumb2,
      rcNumb3,
      EngNumb1,
      EngNumb2,
      EngNumb3,
      chNumb1,
      chNumb2,
      chNumb3,
      firstMake,
      secondMake,
      thirdMake,
      firstModel,
      secondModel,
      thirdModel,
      firstType,
      secondType,
      thirdType,
      firstYOM,
      secondYOM,
      thirdYOM,
      firstSeatCap,
      secondSeatCap,
      thirdSeatCap,
      firstDOP,
      secondDOP,
      thirdDOP,
      firstPSI,
      secondPSI,
      thirdPSI,
      firstPSI,
      secondPSI,
      thirdPSI,
      coverType,
      PrivateUse,
      commercialUse,
      personal,
      hirePurchase,
      carriageGN,
      cartageFOP,
      vehicleAltered,
      optTOCartageFOPVehicleAlt,
      passangerCarry,
      vehiclePublicUse,
      classOfVehicleLicence,
      nameofProposer,
      selectedFile,
      date,
      errors,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            inputValues={inputValues}
            errorClass={this.errorClass}
          />
        );
      case 2:
        return (
          <AddressDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            inputValues={inputValues}
          />
        );

      case 3:
        return (
          <InsuredForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleFileChange={this.handleFileChange}
            inputValues={inputValues}
          />
        );
      case 4:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputValues={inputValues}
          />
        );
      default:
    }
  }
}

export default MultiStepForm;
