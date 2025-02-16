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
