const darkModeCheckbox = document.getElementById('darkModeCheckbox');
const body = document.body;

darkModeCheckbox.addEventListener('change', () => {
	body.classList.toggle('dark-mode');
});
