// Display setting controls
const textSizeButtons = document.querySelectorAll('.text-size-btn');

// Current display settings
let currentTextSize = 'medium';

// Apply the current display settings
function applySettings() {
  document.documentElement.classList.remove("text-small", "text-medium", "text-large");
  document.documentElement.classList.add(`text-${currentTextSize}`);

  textSizeButtons.forEach(button => {
   const isActive = button.dataset.size === currentTextSize;

   button.classList.toggle('active', isActive);
   button.setAttribute('aria-pressed', isActive);
  });
}

// change text size when a button is clicked
textSizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentTextSize = button.dataset.textsize;
    applySettings(); // Update the current display settings 
  });
});

// apply the default settings when the page loads
applySettings();