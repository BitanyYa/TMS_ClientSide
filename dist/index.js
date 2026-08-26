"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
const student_model_js_1 = require("./models/student.model.js");
// 1. Structural assignment & Optional chaining
const student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: polyfill_1.Temporal.Now.instant()
};
// Safe access with nullish coalescing
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");
// 2. Testing Type Guard
function processStudent(raw) {
    if ((0, student_model_js_1.isStudent)(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
processStudent(42);
// 3. Testing Parse function
try {
    console.log((0, student_model_js_1.parseStudent)({ id: "STU-002", name: "Abebe" }));
    (0, student_model_js_1.parseStudent)({ id: 42, name: "Test" }); // Throws TypeError
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
