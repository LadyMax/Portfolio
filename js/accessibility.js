// Display setting controls
const textSizeButtons = document.querySelectorAll('.text-size-btn');
const contrastToggle = document.getElementById('contrast-toggle');

// Current display settings
let currentTextSize = 'medium';
let currentContrast = 'normal';

// Apply the current display settings
function applySettings() {
  document.documentElement.classList.remove("text-small", "text-medium", "text-large", "high-contrast");
  document.documentElement.classList.add(`text-${currentTextSize}`);

  if (currentContrast === 'high') {
   document.documentElement.classList.add('high-contrast');
  }

  textSizeButtons.forEach(button => {
   const isActive = button.dataset.textsize === currentTextSize;

   button.classList.toggle('active', isActive);
   button.setAttribute('aria-pressed', isActive);
  });

  const isHighContrast = currentContrast === "high";
  contrastToggle.classList.toggle("active", isHighContrast);
  contrastToggle.setAttribute("aria-pressed", isHighContrast);
}

// change text size when a button is clicked
textSizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentTextSize = button.dataset.textsize;
    applySettings(); // Update the current display settings 
  });
});

// toggle high contrast mode
contrastToggle.addEventListener('click', () => {
   if (currentContrast === 'normal') {
     currentContrast = 'high';
   } else {
     currentContrast = 'normal';
   }

   applySettings(); // Update the current display settings
});

// apply the default settings when the page loads
applySettings();