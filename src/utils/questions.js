const getManagerQuestions = () => {
  const managerQuestions = [
    {
      type: "input",
      message: "Please enter the team name",
      name: "teamName",
    },
    {
      type: "input",
      message: "Please enter the Manager's name",
      name: "managerName",
    },
    {
      type: "input",
      message: "Please enter the Manager's ID",
      name: "managerId",
    },
    {
      type: "input",
      message: "Please enter the Manager's email address",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Please enter the team's office number",
      name: "officeNumber",
    },
  ];
  return managerQuestions;
};

const getContinueQuestion = () => {
  const continueQuestion = [
    {
      type: "list",
      message: "What would you like to do?",
      name: "continueOption",
      choices: [
        "Add a new engineer",
        "Add a new intern",
        "Finished building team",
      ],
    },
  ];
  return continueQuestion;
};

const getEngineerQuestions = () => {
  const engineerQuestions = [
    {
      type: "input",
      message: "Please enter the Engineer's name",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter the Engineer's ID",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter the Engineer's email address",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the Engineer's GitHub username",
      name: "github",
    },
  ];
  return engineerQuestions;
};

const getInternQuestions = () => {
  const internQuestions = [
    {
      type: "input",
      message: "Please enter the Intern's name",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter the Intern's ID",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter the Intern's email address",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the Intern's school",
      name: "school",
    },
  ];
  return internQuestions;
};

module.exports = {
  getManagerQuestions,
  getContinueQuestion,
  getEngineerQuestions,
  getInternQuestions,
};
