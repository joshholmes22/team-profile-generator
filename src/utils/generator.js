// generate cards for user inputs
const generateManagerCard = (manager) => {
  return `          <div class="card">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text"><strong>Name: </strong>${manager.getName()}</p>
      <p class="card-text"><strong>ID: </strong>${manager.getId()}</p>
      <p class="card-text"><strong>Email: </strong><a class="link" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    </div>
  </div>`;
};

const generateEngineerCard = (engineers) => {
  engineers.shift();
  return engineers
    .map((engineer) => {
      return `          <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text"><strong>Name: </strong>${engineer.getName()}</p>
        <p class="card-text"><strong>ID: </strong>${engineer.getId()}</p>
        <p class="card-text"><strong>Email: </strong><a class="link" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p class="card-text"><strong>Github: </strong><a class="link" href="https://www.github.com/${engineer.getLink()}" target="_blank">${engineer.getLink()}</a></p>
      </div>
    </div>`;
    })
    .join("");
};

const generateInternCard = (interns) => {
  return interns
    .map((intern) => {
      return `            <div class="card">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text"><strong>Name: </strong>${intern.getName()}</p>
        <p class="card-text"><strong>ID: </strong>${intern.getId()}</p>
        <p class="card-text"><strong>Email: </strong><a class="link" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p class="card-text"><strong>School: </strong>${intern.getSchool()}</p>
      </div>
    </div>`;
    })
    .join("");
};

// generate HTML file
const generateHTML = (engineers, interns) => {
  const manager = engineers[0];
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${manager.getTeamName()} Members</title>
      <!-- bootstrap stylesheet -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <!-- google fonts styles -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet">
      <!-- fontawesome styles -->
      <script src="https://kit.fontawesome.com/8907a964e1.js" crossorigin="anonymous"></script>
      
      <!-- author stylesheet -->
      <link rel="stylesheet" href="./assets/css/styles.css"/>
  </head>
  <body>
      
      <header class="header">
          <h1 class="page-title">
              ${manager.getTeamName()} Profile
          </h1>
          <h2 class="page-description">Office Number: ${manager.getOfficeNumber()}</h2>
      </header>
  
      <main class="main">
          <div class="accordion accordion-flush accordion-text" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Manager
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">${generateManagerCard(
                    manager
                  )}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Engineers
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">${generateEngineerCard(
                    engineers
                  )}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Interns
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    ${generateInternCard(interns)}
                  </div>
                </div>
              </div>
            </div>
      </main>
  
  
  
  
      <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" 
          crossorigin="anonymous">
      </script>
  </body>
  </html>`;
};

module.exports = { generateHTML };
