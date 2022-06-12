const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ name, id, email, link }) {
    super({ name, id, email });

    this.link = link;
    this.role = "Engineer";
  }

  getLink() {
    return this.link;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
