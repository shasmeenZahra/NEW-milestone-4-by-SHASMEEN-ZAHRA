// Get form elements
var resumeForm = document.getElementById('resumeForm');
var outputName = document.getElementById('outputName');
var outputEmail = document.getElementById('outputEmail');
var outputPhone = document.getElementById('outputPhone');
var outputSkills = document.getElementById('outputSkills');
var outputExperience = document.getElementById('outputExperience');
var saveButton = document.getElementById('saveChanges');
// Listen for form submit event
resumeForm.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Populate the resume with input values
    outputName.textContent = "Name: ".concat(name);
    outputEmail.textContent = "Email: ".concat(email);
    outputPhone.textContent = "Phone: ".concat(phone);
    outputSkills.textContent = "Skills: ".concat(skills);
    outputExperience.textContent = "Experience: ".concat(experience);
    // Scroll to the resume section
    (_a = document.getElementById('resumeOutput')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
});
// Listen for save button click event
saveButton.addEventListener('click', function () {
    var _a;
    // Capture edited content
    var editedName = ((_a = outputName.textContent) === null || _a === void 0 ? void 0 : _a.replace('Name: ', '')) || '';
});
