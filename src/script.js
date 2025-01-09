// script.js

function toggleAccordion(container) {
    document.querySelectorAll('.question-container').forEach(container => {
        const toggleBtn = container.querySelector('.toggle-btn'); // Find the toggle button in the container
        const answer = container.querySelector('.answer'); // Find the answer section in the container

        toggleBtn.addEventListener('click', () => {
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true'; // Check if the toggle button is expanded
            toggleBtn.setAttribute('aria-expanded', !isExpanded); // Update the aria-expanded attribute
            container.classList.toggle('active'); // Add/remove the active class to/from the container

            if (!isExpanded) {
                // Expand the answer section by setting its maxHeight to its scrollHeight
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // Collapse the answer section by setting its maxHeight to null
                answer.style.maxHeight = null;
            }
        });
    });
}

toggleAccordion(document.querySelector('.question-container'));
