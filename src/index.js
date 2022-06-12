const Manager = require("./lib/Manager");

const test = new Manager({
  name: "name",
  id: "id",
  email: "email",
  officeNumber: "number",
});

console.log(test.getRole());
