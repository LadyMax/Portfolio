// Skills data
const skills = [
  {
    name: "HTML & CSS",
    category: "frontend",
    level: 4,
    description:
      "I learned HTML and CSS through web development courses and practical projects. I use them to create structured, responsive and accessible web pages, including this portfolio.",
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: 3,
    description:
      "I learned the basics of JavaScript during my YH studies and am currently developing my skills through a university web development course. I use it to add interaction to web pages.",
  },
  {
    name: "C# & .NET",
    category: "backend",
    level: 4,
    description:
      "I learned C# and .NET during my two-year system development programme. I have used them to develop backend applications and APIs in both school and personal projects.",
  },
  {
    name: "Databases & Tools",
    category: "tools",
    level: 3,
    description:
      "I learned to work with SQL databases through my studies and development projects. I also use Git and GitHub for version control and Visual Studio and VS Code for development.",
  },
];

// Get the container where skill cards will be displayed
const skillsList = document.getElementById("skills-list");

// display skill cards on the page
function renderSkills(skillsToRender) {
   skillsList.innerHTML = "";

   skillsToRender.forEach((skill) => {
      const skillCard = document.createElement("article");
      skillCard.classList.add("skill-card");

      const skillName = document.createElement("h3");
      skillName.textContent = skill.name;

      const skillDescription = document.createElement("p");
      skillDescription.textContent = skill.description;

      skillCard.appendChild(skillName);
      skillCard.appendChild(skillDescription);

      skillsList.appendChild(skillCard);
   })
}

renderSkills(skills);