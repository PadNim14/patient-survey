import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import reportWebVitals from './reportWebVitals';
import {MongoClient, url} from './config.js';


Survey.StylesManager.applyTheme("darkrose");

var surveyJSON = { title: "Enter New Patient", description: "Use this questionnaire to enter new patients into the database.",
pages: [{ name: "page1",
elements: [{ type: "text", name: "question1", title: "Full Name", isRequired: true, requiredErrorText: "Enter full name." },
{ type: "radiogroup", name: "question11", title: "Gender",
choices: [{ value: "Female", text: "Female" }, { value: "Male", text: "Male" }, { value: "Other", text: "Other" }, { value: "Not_preferred", text: "Prefer not to say" }] },
{ type: "text", inputType: "number", name: "question10Other", title: "Age", isRequired: true, requiredErrorText: "Enter age"},
{ type: "text", name: "question3", title: "Race", isRequired: true, requiredErrorText: "Enter race" },
{ type: "text", name: "question2", title: "Appointment Day", isRequired:true, requiredErrorText: "Enter appointment day",},
{ type: "text", name: "question12", title: "Assigned Paramedic", isRequired:true, requiredErrorText: "Enter assigned paramedic day",},
{ type: "text", name: "question5", title: "Emergency Contact 1", isRequired: true, requiredErrorText: "Enter emergency contact 1"},
{ type: "text", name: "question5Other", title: "Emergency Contact 2", isRequired: true, requiredErrorText: "Enter emergency contact 2"},
{ type: "text", name: "question4", title: "Street Address", isRequired: true, requiredErrorText: "Enter street address" },
{ type: "text", name: "question6", title: "Zone", isRequired: true, requiredErrorText: "Enter county" },
{ type: "text", name: "question9", title: "Program", isRequired: true, requiredErrorText: "Enter hospital program"},
{ type: "text", name: "question13", title: "Primary Diagnosis", isRequired: true, requiredErrorText: "Enter primary diagnosis" },
{ type: "comment", name: "question10", title: "Additional Diagnoses", isRequired: true, requiredErrorText: "Enter additional diagnoses" }] }] }


function sendDataToServer(survey) {
    console.log("Survey results: " + JSON.stringify(survey.data["question1"]));

    const date = new Date();
    const today = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    // db.collection("patients").add({
    //     name: survey.data["question1"],
    //     gender_id: survey.data["question11"],
    //     age: (survey.data["question10Other"]),
    //     appointment_day: survey.data["question2"],
    //     medic: survey.data["question12"],
    //     contact1: survey.data["question5"],
    //     contact2: survey.data["question5Other"],
    //     address: survey.data["question4"],
    //     zone: survey.data["question6"],
    //     race: (survey.data["question3"]),
    //     program: survey.data["question9"],
    //     diagnosis_1: survey.data["question13"],
    //     diagnosis_2: (survey.data["question10"]),
    //     priority: 4,
    //     start_date: today
    // })
    //MongoDB Translation ===================================== ===================================== ===================================== =====================================

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("hit-with-database");
      var myobj = {
        "name": String(survey.data["question1"]),
        "gender_id": String(survey.data["question11"]),
        "age": String(survey.data["question10Other"]),
        "appointment_day": String(survey.data["question2"]),
        "medic": String(survey.data["question12"]),
        "contact1": String(survey.data["question5"]),
        "contact2": String(survey.data["question5Other"]),
        "address": String(survey.data["question4"]),
        "zone": String(survey.data["question6"]),
        "race": String(survey.data["question3"]),
        "program": String(survey.data["question9"]),
        "diagnosis_1": String(survey.data["question13"]),
        "diagnosis_2": String(survey.data["question10"]),
        "priority": 4,
        "start_date": String(today)
      };
      dbo.collection("patients").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    })
    // .then(() => {
    //     console.log("Document successfully written!");
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ", error);
    // });
}


ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />, document.getElementById("surveyContainer"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
