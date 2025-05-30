const students = [
  {
    id: 1,
    name: "Devika",
    scores: { math: 92, english: 81, science: 78 }
  },
  {
    id: 2,
    name: "Devi",
    scores: { math: 58, english: 76, science: 64 }
  },
  {
    id: 3,
    name: "Devu",
    scores: { math: 84, english: 89, science: 93 }
  },
  {
    id: 4,
    name: "Evika",
    scores: { math: 45, english: 52, science: 61 }
  }
];

// List All Students' Names
const studentsName = students.map((s)=> s.name);
console.log(studentsName);

// ✅ 2. Filter Passed Students (Average >= 70)
const passedStudents = students.filter(s => {
  const scores = Object.values(s.scores);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return avg >= 70;
});
console.log("Passed Students:", passedStudents);

// ✅ 3. Add a New Student
const newStudent = {
  id: 5,
  name: "Anika",
  scores: { math: 88, english: 92, science: 85 }
};
const updatedStudents = [...students, newStudent];
console.log("With New Student:", updatedStudents);

// ✅ 4. Destructure Name and Math Score from First Student
const { name, scores: { math } } = students[0];
console.log(`First Student's Name: ${name}, Math Score: ${math}`);

// ✅ 5. Sort Students by Average Score (High to Low)
const sortedByAverage = [...updatedStudents].sort((a, b) => {
  const avgA = Object.values(a.scores).reduce((acc, score) => acc + score, 0) / 3;
  const avgB = Object.values(b.scores).reduce((acc, score) => acc + score, 0) / 3;
  return avgB - avgA;
});
console.log("Sorted by Average Score:", sortedByAverage);

// ✅ 6. Log Each Subject and Score for Each Student
updatedStudents.forEach(student => {
  console.log(`Scores for ${student.name}:`);
  for (let subject in student.scores) {
    console.log(`  ${subject}: ${student.scores[subject]}`);
  }
});

