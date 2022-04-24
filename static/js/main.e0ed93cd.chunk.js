(this["webpackJsonppatient-survey"]=this["webpackJsonppatient-survey"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);n(25);var i=n(29),r=n.n(i),a=(n(37),n.p,n(38),n(16));n(40);var o=n(30),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},u=n(32),d=(n(44),u.a.initializeApp({apiKey:"AIzaSyDKq7ac8s-ZlpDmlShbqgPAOzio-zKA-3I",authDomain:"hit-with-database.firebaseapp.com",projectId:"hit-with-database",storageBucket:"hit-with-database.appspot.com",messagingSenderId:"674336402509",appId:"1:674336402509:web:4527992724f50c76aa8004",measurementId:"G-PPKFSB0ML3"}).firestore());o.StylesManager.applyTheme("darkrose");r.a.render(Object(a.jsx)(o.Survey,{json:{title:"Enter New Patient",description:"Use this questionnaire to enter new patients into the database.",pages:[{name:"page1",elements:[{type:"text",name:"question1",title:"Full Name",isRequired:!0,requiredErrorText:"Enter full name."},{type:"radiogroup",name:"question11",title:"Gender",choices:[{value:"item1",text:"Female"},{value:"item2",text:"Male"},{value:"item3",text:"Other"},{value:"item4",text:"Prefer not to say"}]},{type:"text",name:"question10Other",title:"Age",isRequired:!0,requiredErrorText:"Enter age"},{type:"text",name:"question2",title:"Phone Number",isRequired:!0,requiredErrorText:"Enter phone number",validators:{type:"regex",text:"Enter a valid phone number",regex:"^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"}},{type:"text",name:"question5",title:"Emergency Contact 1",isRequired:!0,requiredErrorText:"Enter emergency contact 1"},{type:"text",name:"question5Other",title:"Emergency Contact 2",isRequired:!0,requiredErrorText:"Enter emergency contact 2"},{type:"text",name:"question4",title:"Street Address",isRequired:!0,requiredErrorText:"Enter street address"},{type:"text",name:"question6",title:"County",isRequired:!0,requiredErrorText:"Enter county"},{type:"text",name:"question7",title:"Primary Diagonsis"},{type:"text",name:"question8",title:"Secondary Diagonsis"},{type:"radiogroup",name:"question9",title:"Type of Care",choices:[{value:"item1",text:"Frequent"},{value:"item2",text:"Infrequent"},{value:"item3",text:"Need-Based"}]},{type:"comment",name:"question10",title:"Other Important Information"}]}]},onComplete:function(e){console.log("Survey results: "+JSON.stringify(e.data.question1)),d.collection("Patient Profiles").add({Name:JSON.stringify(e.data.question1),Gender:JSON.stringify(e.data.question11),Age:JSON.stringify(e.data.question10Other),Phone_Number:JSON.stringify(e.data.question2),Emergency_Contact1:JSON.stringify(e.data.question5),Emergency_Contact2:JSON.stringify(e.data.question5Other),Street_Address:JSON.stringify(e.data.question4),County:JSON.stringify(e.data.question6),Primary_Diagnonsis:JSON.stringify(e.data.question7),Secondary_Diagnonsis:JSON.stringify(e.data.question8),Type_of_Care:JSON.stringify(e.data.question8),Other_Important_Information:JSON.stringify(e.data.question9)}).then((function(){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))}}),document.getElementById("surveyContainer")),s()}},[[43,1,2]]]);
//# sourceMappingURL=main.e0ed93cd.chunk.js.map