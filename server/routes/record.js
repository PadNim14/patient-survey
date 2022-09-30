const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/new_patient").post(function (req, response) {
    let db_connect = dbo.getDb();
    let patient = {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        appointment_day: req.body.appointment_day,
        contact_1: req.body.contact1,
        contact_2: req.body.contact2,
        diagnosis_one: req.body.diagnosis_1,
        diagnosis_two: req.body.diagnosis_2,
        gender_id: req.body.gender_id,
        medic: req.body.medic,
        priority: req.body.priority,
        program: req.body.program,
        race: req.body.race,
        start_date: req.body.start_date,
        zone: req.body.zone,
    };
    db_connect.collection("patients").insertOne(patient, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = recordRoutes;