import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MultiStepForm from "./components/MultiStepForm";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div id="body-div">
        <MultiStepForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
