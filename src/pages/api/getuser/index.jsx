const testData = [
  { id: 1, email: "test@test.com", admin: true, active: true },
  { id: 2, email: "test@test.com", admin: true, active: true },
  { id: 3, email: "test@test.com", admin: true, active: true },
  { id: 4, email: "test@test.com", admin: true, active: true },
  { id: 5, email: "test@test.com", admin: true, active: true },
];
function getUser() {
  return testData;
}
export default function handler(req, res) {
  res.status(200).json(getUser());
}
