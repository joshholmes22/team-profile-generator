const Intern = require("./Intern");

const internTest = new Intern({
  name: "Anna",
  id: "3",
  email: "anna@email.com",
  school: "Birmingham University",
});

describe("Intern", () => {
  it("should return 'Anna' when getName is called", () => {
    const expected = "Anna";
    const actual = internTest.getName();

    expect(actual).toEqual(expected);
  });

  it("should return '3' when getId is called", () => {
    const expected = "3";
    const actual = internTest.getId();

    expect(actual).toEqual(expected);
  });

  it("should return 'anna@email.com' when getEmail is called", () => {
    const expected = "anna@email.com";
    const actual = internTest.getEmail();

    expect(actual).toEqual(expected);
  });

  it("should return 'Intern' when getRole is called", () => {
    const expected = "Intern";
    const actual = internTest.getRole();

    expect(actual).toEqual(expected);
  });

  it("should return 'Birmingham University' when getSchool is called", () => {
    const expected = "Birmingham University";
    const actual = internTest.getSchool();

    expect(actual).toEqual(expected);
  });
});
