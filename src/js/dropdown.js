// dropdown.js
let dropdown = document.getElementById('dropdown');
let dropdownContent = document.querySelector('.dropdown-content');
let expandImg = document.getElementById('expand');

dropdown.addEventListener('click', function () {
	dropdownContent.classList.toggle('show');
	expandImg.classList.toggle('rotate');
});

// Add an event listener to the document to close the dropdown when clicking outside
document.addEventListener('click', function (event) {
	if (!dropdown.contains(event.target)) {
		dropdownContent.classList.remove('show');
		expandImg.classList.remove('rotate');
	}
});
