const skills = [
  {
    id: 1,
    name: "HTML & CSS",
    category: "frontend",
    proficiency: 4,
    yearsExperience: 2,
    description:
      "I learned HTML and CSS through web development courses and practical projects. I use them to create structured, responsive and accessible web pages, including this portfolio.",
  },
  {
    id: 2,
    name: "JavaScript",
    category: "frontend",
    proficiency: 3,
    yearsExperience: 2,
    description:
      "I learned the basics of JavaScript during my YH studies and am currently developing my skills through a university web development course. I use it to add interaction to web pages.",
  },
  {
    id: 3,
    name: "C# & .NET",
    category: "backend",
    proficiency: 4,
    yearsExperience: 3,
    description:
      "I learned C# and .NET during my two-year system development programme. I have used them to develop backend applications and APIs in both school and personal projects.",
  },
  {
    id: 4,
    name: "Python",
    category: "backend",
    proficiency: 3,
    yearsExperience: 1,
    description:
      "I used Python during my internship to work with Odoo backend development and custom modules. I also used Python with FastAPI in my graduation project.",
  },
  {
    id: 5,
    name: "Java",
    category: "backend",
    proficiency: 2,
    yearsExperience: 0.5,
    description:
      "I am currently developing my Java skills through a university programming course. I use it to practise object-oriented programming and problem solving.",
  },
  {
    id: 6,
    name: "SQL & Databases",
    category: "database",
    proficiency: 3,
    yearsExperience: 1.5,
    description:
      "I learned SQL through my studies and development projects. I use relational databases to store, query and manage application data.",
  },
  {
    id: 7,
    name: "Git & GitHub",
    category: "tools",
    proficiency: 4,
    yearsExperience: 2.5,
    description:
      "I use Git and GitHub for version control in school and personal projects. I use commits and repositories to manage changes during development.",
  },
  {
    id: 8,
    name: "VS & VS Code",
    category: "tools",
    proficiency: 4,
    yearsExperience: 3,
    description:
      "I use Visual Studio and VS Code as my main development environments for C#, JavaScript and other programming projects.",
  },
];

// Get DOM elements
const skillsList = document.getElementById("skills-list");
const skillsCount = document.getElementById("skills-count");
const filterButtons = document.querySelectorAll(".filter-btn");
const skillSort = document.getElementById("skill-sort");

// Store the currently selected category
let currentCategory = "all";

// Display skill cards on the page
function renderSkills(skillsToRender) {
  skillsList.innerHTML = "";

  // Update the skills count
  skillsCount.textContent = `Showing ${skillsToRender.length} of ${skills.length} skills`; 

  skillsToRender.forEach((skill) => {
    const skillCard = document.createElement("article");
    skillCard.classList.add("skill-card");

    // Create skill name
    const skillName = document.createElement("h3");
    skillName.textContent = skill.name;

    // Create skill category
    const skillCategory = document.createElement("p");
    skillCategory.classList.add("skill-category");
    skillCategory.textContent = skill.category;

    // Create skill level
    const skillLevel = document.createElement("div");
    skillLevel.classList.add("skill-level");

    const levelText = document.createElement("span");
    levelText.textContent = `Level: ${skill.proficiency}/5`;

    // Create visual star indicator
    const levelIndicator = document.createElement("span");
    levelIndicator.classList.add("level-indicator");

    for (let i = 1; i <= 5; i++) {
      const levelStar = document.createElement("span");
      levelStar.classList.add("level-star");

      if (i <= skill.proficiency) {
        levelStar.textContent = "★";
      } else {
        levelStar.textContent = "☆";
      }

      levelIndicator.appendChild(levelStar);
    }

    skillLevel.appendChild(levelText);
    skillLevel.appendChild(levelIndicator);

    // Create skill years of experience
    const skillExperience = document.createElement("p");
    skillExperience.classList.add("skill-experience");
    skillExperience.textContent = `Experience: ${skill.yearsExperience} years`;

    // Create skill description
    const skillDescription = document.createElement("p");
    skillDescription.textContent = skill.description;

    // Add skill information to the card
    skillCard.appendChild(skillName);
    skillCard.appendChild(skillCategory);
    skillCard.appendChild(skillLevel);
    skillCard.appendChild(skillExperience);
    skillCard.appendChild(skillDescription);

    // Add the completed card to the skills list
    skillsList.appendChild(skillCard);
  });
}

// Apply the selected filter and sort option
function updateSkills() {
  // Create a copy of the original skills array
  let updatedSkills = [...skills];

  // Filter by category
  if (currentCategory !== "all") {
    updatedSkills = updatedSkills.filter(
      (skill) => skill.category === currentCategory,
    );
  }

  // Sort the filtered skills
  const sortOption = skillSort.value;

  if (sortOption === "proficiency") {
    updatedSkills.sort((a, b) => b.proficiency - a.proficiency);
  } else if (sortOption === "experience") {
    updatedSkills.sort((a, b) => b.yearsExperience - a.yearsExperience);
  } else if (sortOption === "name") { 
    updatedSkills.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderSkills(updatedSkills);
}

// Filter skills when a category button is clicked
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;

    // Update the active filter button
    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    updateSkills();
  });
});

// Update skills when the sorting option changes
skillSort.addEventListener("change", () => {
  updateSkills();
});

// Display all skills when the page first loads
renderSkills(skills);