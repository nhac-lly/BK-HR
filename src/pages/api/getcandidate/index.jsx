const testData = [
  {
    id: 1,
    name: "Lê Văn B",
    job: "Tester",
    address: "123 Somewhere HCMC",
    expectedSalary: "2000",
    expectedJobLevel: "Manager",
    yearOfExperience: "20",
    language: "Vietnamese, English",
  },
  {
    id: 2,
    name: "Lê Văn B",
    job: "Tester",
    address: "123 Somewhere HCMC",
    expectedSalary: "2000",
    expectedJobLevel: "Manager",
    yearOfExperience: "20",
    language: "Vietnamese, English",
  },
  {
    id: 3,
    name: "Lê Văn B",
    job: "Tester",
    address: "123 Somewhere HCMC",
    expectedSalary: "2000",
    expectedJobLevel: "Manager",
    yearOfExperience: "20",
    language: "Vietnamese, English",
  },
  {
    id: 4,
    name: "Lê Văn B",
    job: "Tester",
    address: "123 Somewhere HCMC",
    expectedSalary: "2000",
    expectedJobLevel: "Manager",
    yearOfExperience: "20",
    language: "Vietnamese, English",
  },
  {
    id: 5,
    name: "Lê Văn B",
    job: "Tester",
    address: "123 Somewhere HCMC",
    expectedSalary: "2000",
    expectedJobLevel: "Manager",
    yearOfExperience: "20",
    language: "Vietnamese, English",
  },
];
function getCandidate() {
  return testData;
}
export default function handler(req, res) {
  res.status(200).json(getCandidate());
}
