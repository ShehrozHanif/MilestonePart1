// Select the elements
const toggleSkillsButton = document.getElementById('toggle-skills-button') as HTMLButtonElement;
const skillsSection = document.querySelector('.skills') as HTMLElement;

// Event listener to toggle visibility of skills section
toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
