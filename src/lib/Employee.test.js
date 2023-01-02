const Employee = require("./Employee");

const employeeTest = new Employee({
  name: "Bob",
  id: "1",
  email: "bob@email.com",
});

describe("Employee", () => {
  it("should return 'Bob' when getName is called", () => {
    const expected = "Bob";
    const actual = employeeTest.getName();

    expect(actual).toEqual(expected);
  });

  it("should return '1' when getId is called", () => {
    const expected = "1";
    const actual = employeeTest.getId();

    expect(actual).toEqual(expected);
  });

  it("should return 'bob@email.com' when getEmail is called", () => {
    const expected = "bob@email.com";
    const actual = employeeTest.getEmail();

    expect(actual).toEqual(expected);
  });
});
