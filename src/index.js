// import packages
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generator = require("./utils/generator");

// declare global variables
const engineers = [];
const interns = [];

const init = async () => {
  // declare variables
  let inProgress = true;

  // ask initial questions
  const managerInfo = await inquirer.prompt(questions.getManagerQuestions());

  setManager(managerInfo);

  let continueChoice = await inquirer.prompt(questions.getContinueQuestion());

  while (inProgress) {
    if (continueChoice.continueOption == "Add a new engineer") {
      const engineerAnswers = await inquirer.prompt(
        questions.getEngineerQuestions()
      );
      addEngineer(engineerAnswers);
      continueChoice = await inquirer.prompt(questions.getContinueQuestion());
    } else if (continueChoice.continueOption == "Add a new intern") {
      const internAnswers = await inquirer.prompt(
        questions.getInternQuestions()
      );
      addIntern(internAnswers);
      continueChoice = await inquirer.prompt(questions.getContinueQuestion());
    } else {
      inProgress = false;
    }
  }
  generator.generateHTML(engineers, interns);
};

const setManager = (managerInfo) => {
  const manager = new Manager({
    name: managerInfo.managerName,
    id: managerInfo.managerId,
    email: managerInfo.managerEmail,
    officeNumber: managerInfo.officeNumber,
  });

  engineers.push(manager);
};

const addEngineer = (engineerAnswers) => {
  const engineer = new Engineer({
    name: engineerAnswers.name,
    id: engineerAnswers.id,
    email: engineerAnswers.email,
    link: engineerAnswers.github,
  });
  engineers.push(engineer);
};

const addIntern = (internAnswers) => {
  const intern = new Intern({
    name: internAnswers.name,
    id: internAnswers.id,
    email: internAnswers.email,
    school: internAnswers.school,
  });
  interns.push(intern);
};

init();
