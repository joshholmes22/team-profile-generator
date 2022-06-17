const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const init = async () => {
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

  const managerInfo = await inquirer.prompt(managerQuestions);

  console.log(managerInfo);
};

init();
