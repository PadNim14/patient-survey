import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import reportWebVitals from './reportWebVitals';
import {firebaseInitial, db} from './config.js';

Survey.StylesManager.applyTheme("darkrose");

var surveyJSON = { title: "Enter New Client", description: "Use this questionnaire to enter any new clients into the database.",
pages: [{ name: "page1",
elements: [{ type: "text", name: "question1", title: "First Name", isRequired: true, requiredErrorText: "Enter first name." },
{ type: "text", name: "question10", title: "Last Name", isRequired: true, requiredErrorText: "Enter last name." },
{ type: "radiogroup", name: "question11", title: "Gender",
choices: [{ value: "item1", text: "Female" }, { value: "item2", text: "Male" }, { value: "item3", text: "Other" }, { value: "item4", text: "Prefer not to say" }] },
{ type: "text", name: "question10Other", title: "Age", isRequired: true, requiredErrorText: "Enter age"},
{ type: "text", name: "question2", title: "Phone Number", isRequired:true, requiredErrorText: "Enter phone number",
validators:
    {
    type: "regex",
    text: 'Enter a valid phone number',
    regex: "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
    }},
{ type: "text", name: "question5", title: "Emergency Contact", isRequired: true, requiredErrorText: "Enter emergency contact"},
{ type: "text", name: "question3", title: "Email Address", isRequired: true, requiredErrorText: "Enter email address",
validators: 
{
    type: "email"
} },
{ type: "text", name: "question4", title: "Street Address", isRequired: true, requiredErrorText: "Enter street address" },
{ type: "text", name: "question6", title: "Zip Code", isRequired: true, requiredErrorText: "Enter zip code.",
validators:
{
    type: "regex",
    text: "Enter valid zip code.",
    regex: "^\d{5}(?:[-\s]\d{4})?$"
} },
{ type: "comment", name: "question7", title: "Description of Ailment" },
{ type: "radiogroup", name: "question8", title: "Type of Care", choices: [{ value: "item1", text: "Frequent" }, { value: "item2", text: "Infrequent" }, { value: "item3", text: "Need-Based" }] },
{ type: "comment", name: "question9", title: "Other Important Information" }] }] }


function sendDataToServer(survey) {
    console.log("Survey results: " + JSON.stringify(survey.data["question1"]));

    //db.collection("nurses").document(nurses.nursesId).collection("patients_profiles").
    db.collection("Patient Profiles").add({
        First_Name: JSON.stringify(survey.data["question1"]),
        Last_Name: JSON.stringify(survey.data["question10"]),
        Gender: JSON.stringify(survey.data["question11"]),
        Age: JSON.stringify(survey.data["question10Other"]),
        Phone_Number: JSON.stringify(survey.data["question2"]),
        Emergency_Contact: JSON.stringify(survey.data["question5"]),
        Email: JSON.stringify(survey.data["question3"]),
        Street_Address: JSON.stringify(survey.data["question4"]),
        Zip_Code: JSON.stringify(survey.data["question6"]),
        Description_of_Ailment: JSON.stringify(survey.data["question7"]),
        Type_of_Care: JSON.stringify(survey.data["question8"]),
        Other_Important_Information: JSON.stringify(survey.data["question9"]),
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