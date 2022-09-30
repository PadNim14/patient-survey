import './App.css';
import {Route, Routes} from "react-router-dom"
import PatientSurvey from "./components/patient_survey.js"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/patient-survey" element={<PatientSurvey />} />
      </Routes>
    </div>
  );
}

export default App;
