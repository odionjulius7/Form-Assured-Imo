import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Step1 from "./components/Step1";
import MotorInsurance from "./components/MotorInsurance";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    // <<<<<<< HEAD
    //     <div>
    //       {/* <Header /> */}

    //       <MultiStepForm />

    //       {/* <Footer /> */}
    //     </div>
    // =======
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Step1" element={<Step1 />} />
        <Route exact path="motorinsurance" element={<MotorInsurance />} />
      </Routes>
    </BrowserRouter>

    // >>>>>>> 916f2d0f173dd9366257b6318397addb78bd8f05
  );
}

export default App;
