const Manager = require("./Manager");

const managerTest = new Manager({
  name: "Dave",
  id: "2",
  email: "dave@email.com",
  officeNumber: "10",
});

describe("Manager", () => {
  it("should return 'Dave' when getName is called", () => {
    const expected = "Dave";
    const actual = managerTest.getName();

    expect(actual).toEqual(expected);
  });

  it("should return '2' when getId is called", () => {
    const expected = "2";
    const actual = managerTest.getId();

    expect(actual).toEqual(expected);
  });

  it("should return 'dave@email.com' when getEmail is called", () => {
    const expected = "dave@email.com";
    const actual = managerTest.getEmail();

    expect(actual).toEqual(expected);
  });

  it("should return 'Manager' when getRole is called", () => {
    const expected = "Manager";
    const actual = managerTest.getRole();

    expect(actual).toEqual(expected);
  });

  it("should return '10' when getOfficeNumber is called", () => {
    const expected = "10";
    const actual = managerTest.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
