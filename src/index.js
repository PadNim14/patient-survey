import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import reportWebVitals from './reportWebVitals';
import {firebaseInitial, db} from './config.js';

Survey.StylesManager.applyTheme("darkrose");

var surveyJSON = { title: "Enter New Patient", description: "Use this questionnaire to enter new patients into the database.",
pages: [{ name: "page1",
elements: [{ type: "text", name: "question1", title: "Full Name", isRequired: true, requiredErrorText: "Enter full name." },
{ type: "radiogroup", name: "question11", title: "Gender",
choices: [{ value: "Female", text: "Female" }, { value: "Male", text: "Male" }, { value: "Other", text: "Other" }, { value: "Not_preferred", text: "Prefer not to say" }] },
{ type: "text", name: "question10Other", title: "Age", isRequired: true, requiredErrorText: "Enter age"},
{type: "text", name: "question3", title: "Race", isRequired: true, requiredErrorText: "Enter race" },
{ type: "text", name: "question2", title: "Appointment Day", isRequired:true, requiredErrorText: "Enter appointment day",},
{ type: "text", name: "question5", title: "Emergency Contact 1", isRequired: true, requiredErrorText: "Enter emergency contact 1"},
{ type: "text", name: "question5Other", title: "Emergency Contact 2", isRequired: true, requiredErrorText: "Enter emergency contact 2"},
{ type: "text", name: "question4", title: "Street Address", isRequired: true, requiredErrorText: "Enter street address" },
{ type: "text", name: "question6", title: "County", isRequired: true, requiredErrorText: "Enter county" },
{ type: "number", name: "question7", title: "Priority", isRequired: true, requiredErrorText: "Enter priority" },
{ type: "text", name: "question9", title: "Program"},
{ type: "comment", name: "question10", title: "Medical History" }] }] }

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function sendDataToServer(survey) {
    console.log("Survey results: " + JSON.stringify(survey.data["question1"]));
    
    //db.collection("nurses").document(nurses.nursesId).collection("patients_profiles").
    db.collection("patients").add({
        name: survey.data["question1"],
        gender_id: survey.data["question11"],
        age: (survey.data["question10Other"]),
        appointment_day: survey.data["question2"],
        contact1: survey.data["question5"],
        contact2: survey.data["question5Other"],
        address: survey.data["question4"],
        zone: survey.data["question6"],
        coords: (getRandomInRange(40, 50, 3) + ", " + getRandomInRange(-85, -80, 2)),
        race: (survey.data["question3"]),
        program: survey.data["question9"],
        medical_history: (survey.data["question10"]),
        priority: survey.data["question7"]
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}


ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />, document.getElementById("surveyContainer"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();