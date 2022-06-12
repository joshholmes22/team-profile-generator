const Engineer = require("./Engineer");

const engineerTest = new Engineer({
  name: "Kate",
  id: "4",
  email: "kate@email.com",
  school: "https://github.com/kate",
});

describe("Engineer", () => {
  it("should return 'Kate' when getName is called", () => {
    const expected = "Kate";
    const actual = engineerTest.getName();

    expect(actual).toEqual(expected);
  });

  it("should return '4' when getId is called", () => {
    const expected = "4";
    const actual = engineerTest.getId();

    expect(actual).toEqual(expected);
  });

  it("should return 'kate@email.com' when getEmail is called", () => {
    const expected = "kate@email.com";
    const actual = engineerTest.getEmail();

    expect(actual).toEqual(expected);
  });

  it("should return 'Engineer' when getRole is called", () => {
    const expected = "Engineer";
    const actual = engineerTest.getRole();

    expect(actual).toEqual(expected);
  });

  it("should return 'https://github.com/kate' when getLink is called", () => {
    const expected = "https://github.com/kate";
    const actual = engineerTest.getLink();

    expect(actual).toEqual(expected);
  });
});
