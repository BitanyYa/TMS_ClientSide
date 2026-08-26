import { Temporal } from "@js-temporal/polyfill";
import { Student, isStudent, parseStudent } from "./models/student.model.js";

// 1. Structural assignment & Optional chaining
const student: Student = {
  id: "STU-001",
  name: "Hana Tadesse",
  enrollmentDate: Temporal.Now.instant()
};

// Safe access with nullish coalescing
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");

// 2. Testing Type Guard
function processStudent(raw: unknown) {
  if (isStudent(raw)) {
    const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
    console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
  } else {
    console.error("Invalid student data received");
  }
}

processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
processStudent(42);

// 3. Testing Parse function
try {
  console.log(parseStudent({ id: "STU-002", name: "Abebe" }));
  parseStudent({ id: 42, name: "Test" }); // Throws TypeError
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}