import React, { useState, createContext, useContext, useEffect } from "react";

import moment from "moment";
import formData from "./formData";
// import DATA from "./Data.json";
const InsuranceContext = createContext();

const InsuranceContextProvider = (props) => {
  // const [data, setData] = useState(formData);
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || formData;
  });
  // const [step, setStep] = useState(1);
  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem("step");
    const initialValue = JSON.parse(saved);
    return initialValue || 1;
  });

  // 22/108824LKG
  // 22/70622LKG

  let yearN = moment().format("YY");

  const generateCertNo = () => {
    let RandomN = Math.floor(Math.random() * 1000) + yearN;
    let letter = "LKG";
    const number = yearN + "/" + RandomN + letter;
    return number;
  };

  const pushCertNo = () => {
    setData((prev) => {
      return {
        ...prev,
        certificationNum: generateCertNo(),
      };
    });
  };

  // console.log(generateCertNo());
  let todaysDate = moment().format("L");
  let futureDate1 = moment().add(1, "year").calendar();

  const getToday = () => {
    setData((prev) => {
      return {
        ...prev,
        date: todaysDate,
      };
    });
  };
  const getFutureDate = () => {
    setData((prev) => {
      return {
        ...prev,
        futureDate: futureDate1,
      };
    });
  };
  // const getFutureDate = () => futureDate;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? setData((prev) => {
          return { ...prev, [name]: checked };
        })
      : setData((prev) => {
          return { ...prev, [name]: value };
        });
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const handleFileChange = (file) => {
    if (!file) {
      setData((prev) => {
        // const scanSignature = prev.scanSignature
        return {
          ...prev,
          scanSignature: null,
        };
      });
      return;
    }

    fileToDataUri(file).then((dataUri) => {
      setData((prev) => {
        // const scanSignature = prev.scanSignature
        return {
          ...prev,
          scanSignature: dataUri,
        };
      });
    });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const forward = () => {
    // event.preventDefault();
    console.log("submit form");
    nextStep();
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // useEffect(() => {
  //   const step = JSON.parse(localStorage.getItem("step"));
  //   if (step) {
  //     setStep(step);
  //   }
  // }, []);

  return (
    <InsuranceContext.Provider
      value={{
        data,
        setData,
        step,
        nextStep,
        prevStep,
        handleChange,
        handleFileChange,
        forward,
        todaysDate,
        generateCertNo,
        getToday,
        getFutureDate,
        pushCertNo,
      }}
    >
      {props.children}
    </InsuranceContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(InsuranceContext);
};

export { InsuranceContext, InsuranceContextProvider };
