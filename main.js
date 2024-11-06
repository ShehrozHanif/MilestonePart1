// Select the elements
var toggleSkillsButton = document.getElementById('toggle-skills-button');
var skillsSection = document.querySelector('.skills');
// Event listener to toggle visibility of skills section
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});