const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const init = async () => {
  let inProgress = true;

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

  const managerInfo = await inquirer.prompt(managerQuestions);

  let continueChoice = await inquirer.prompt(continueQuestion);

  while (inProgress) {
    console.log(continueChoice);
    if (continueChoice.continueOption == "Add a new engineer") {
      continueChoice = await inquirer.prompt(continueQuestion);
    } else if (continueChoice.continueOption == "Add a new intern") {
      continueChoice = await inquirer.prompt(continueQuestion);
    } else {
      inProgress = false;
    }
  }

  const manager = new Manager({
    name: managerInfo.managerName,
    id: managerInfo.managerId,
    email: managerInfo.managerEmail,
    officeNumber: managerInfo.officeNumber,
  });
};

init();
