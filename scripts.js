function toggleVisibility(sectionId) {
    const sections = document.querySelectorAll('.toggle-section');
    sections.forEach(section => {
        section.classList.remove('show');
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('show');
    }
}

// Show the career section on load. An empty landing page asks a visitor to
// work for the content, and most will not.
document.addEventListener('DOMContentLoaded', () => {
    toggleVisibility('career');
});
