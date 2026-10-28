// Skills data
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
    name: "Databases & Tools",
    category: "tools",
    proficiency: 3,
    yearsExperience: 2.5,
    description:
      "I learned to work with SQL databases through my studies and development projects. I also use Git and GitHub for version control and Visual Studio and VS Code for development.",
  },
];

// Get DOM elements
const skillsList = document.getElementById("skills-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const skillSort = document.getElementById("skill-sort");

// Store the currently selected category
let currentCategory = "all";

// Display skill cards on the page
function renderSkills(skillsToRender) {
  skillsList.innerHTML = "";

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

    // Create skill description
    const skillDescription = document.createElement("p");
    skillDescription.textContent = skill.description;

    // Add skill information to the card
    skillCard.appendChild(skillName);
    skillCard.appendChild(skillCategory);
    skillCard.appendChild(skillLevel);
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

  if (sortOption === "name") {
    updatedSkills.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "level") {
    updatedSkills.sort((a, b) => b.proficiency - a.proficiency);
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
    });

    button.classList.add("active");

    updateSkills();
  });
});

// Update skills when the sorting option changes
skillSort.addEventListener("change", () => {
  updateSkills();
});

// Display all skills when the page first loads
renderSkills(skills);