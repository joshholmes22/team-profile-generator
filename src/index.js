const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const init = async () => {
  let inProgress = true;
  const engineers = [];
  const interns = [];

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

  const managerInfo = await inquirer.prompt(managerQuestions);

  let continueChoice = await inquirer.prompt(continueQuestion);

  while (inProgress) {
    console.log(continueChoice);
    if (continueChoice.continueOption == "Add a new engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      const engineer = new Engineer({
        name: engineerAnswers.name,
        id: engineerAnswers.id,
        email: engineerAnswers.email,
        link: engineerAnswers.github,
      });
      engineers.push(engineer);
      continueChoice = await inquirer.prompt(continueQuestion);
    } else if (continueChoice.continueOption == "Add a new intern") {
      continueChoice = await inquirer.prompt(continueQuestion);
    } else {
      inProgress = false;
    }
  }

  console.log(engineers[0].getRole());

  const manager = new Manager({
    name: managerInfo.managerName,
    id: managerInfo.managerId,
    email: managerInfo.managerEmail,
    officeNumber: managerInfo.officeNumber,
  });
};

init();
