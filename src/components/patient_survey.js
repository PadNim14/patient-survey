import React, { useState } from "react";
import { useNavigate } from "react-router";
import "survey-react/survey.css";
import * as Survey from "survey-react";

export default function PatientSurvey() {
    var surveyJSON = {
        title: "Enter New Patient", description: "Use this questionnaire to enter new patients into the database.",
        pages: [{
            name: "page1",
            elements: [{ type: "text", name: "question1", title: "Full Name", isRequired: true, requiredErrorText: "Enter full name." },
            {
                type: "radiogroup", name: "question11", title: "Gender",
                choices: [{ value: "Female", text: "Female" }, { value: "Male", text: "Male" }, { value: "Other", text: "Other" }, { value: "Not_preferred", text: "Prefer not to say" }]
            },
            { type: "text", inputType: "number", name: "question10Other", title: "Age", isRequired: true, requiredErrorText: "Enter age" },
            { type: "text", name: "question3", title: "Race", isRequired: true, requiredErrorText: "Enter race" },
            { type: "text", name: "question2", title: "Appointment Day", isRequired: true, requiredErrorText: "Enter appointment day", },
            { type: "text", name: "question12", title: "Assigned Paramedic", isRequired: true, requiredErrorText: "Enter assigned paramedic day", },
            { type: "text", name: "question5", title: "Emergency Contact 1", isRequired: true, requiredErrorText: "Enter emergency contact 1" },
            { type: "text", name: "question5Other", title: "Emergency Contact 2", isRequired: true, requiredErrorText: "Enter emergency contact 2" },
            { type: "text", name: "question4", title: "Street Address", isRequired: true, requiredErrorText: "Enter street address" },
            { type: "text", name: "question6", title: "Zone", isRequired: true, requiredErrorText: "Enter county" },
            { type: "text", name: "question9", title: "Program", isRequired: true, requiredErrorText: "Enter hospital program" },
            { type: "text", name: "question13", title: "Primary Diagnosis", isRequired: true, requiredErrorText: "Enter primary diagnosis" },
            { type: "comment", name: "question10", title: "Additional Diagnoses", isRequired: true, requiredErrorText: "Enter additional diagnoses" }]
        }]
    }
    
    async function onSubmit(survey) {
        const date = new Date();
        const today = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    
        const newPatient = {
            name: String(survey.data["question1"]),
            gender_id: String(survey.data["question11"]),
            age: String(survey.data["question10Other"]),
            appointment_day: String(survey.data["question2"]),
            medic: String(survey.data["question12"]),
            contact1: String(survey.data["question5"]),
            contact2: String(survey.data["question5Other"]),
            address: String(survey.data["question4"]),
            zone: String(survey.data["question6"]),
            race: String(survey.data["question3"]),
            program: String(survey.data["question9"]),
            diagnosis_1: String(survey.data["question13"]),
            diagnosis_2: String(survey.data["question10"]),
            priority: 4,
            start_date: String(today),
        };
    
        await fetch("http://localhost:5000/new_patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPatient),
        }).then(() => {
            console.log('created new patient!')
        })
            .catch(error => {
                window.alert(error);
                return;
            });
    }

    return (<Survey.Survey json={surveyJSON} onComplete={onSubmit} />)
}

