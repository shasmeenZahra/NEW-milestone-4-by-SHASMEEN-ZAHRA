// Get form elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const outputName = document.getElementById('outputName') as HTMLParagraphElement;
const outputEmail = document.getElementById('outputEmail') as HTMLParagraphElement;
const outputPhone = document.getElementById('outputPhone') as HTMLParagraphElement;
const outputSkills = document.getElementById('outputSkills') as HTMLParagraphElement;
const outputExperience = document.getElementById('outputExperience') as HTMLParagraphElement;
const saveButton = document.getElementById('saveChanges') as HTMLButtonElement;

// Listen for form submit event
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get user input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

  // Populate the resume with input values
  outputName.textContent = `Name: ${name}`;
  outputEmail.textContent = `Email: ${email}`;
  outputPhone.textContent = `Phone: ${phone}`;
  outputSkills.textContent = `Skills: ${skills}`;
  outputExperience.textContent = `Experience: ${experience}`;

  // Scroll to the resume section
  document.getElementById('resumeOutput')?.scrollIntoView({ behavior: 'smooth' });
});

// Listen for save button click event
saveButton.addEventListener('click', () => {
  // Capture edited content
  const editedName = outputName.textContent?.replace('Name: ', '') || '';
  const editedEmail = outputEmail.textContent?.replace('Email: ', '') || '';
  const editedPhone = outputPhone.textContent?.replace('Phone: ', '') || '';
  const editedSkills = outputSkills.textContent?.replace('Skills: ', '') || '';
  const editedExperience = outputExperience.textContent?.replace('Experience: ', '') || '';

  // Log or save the updated content
  console.log('Updated Resume:', {
    name: editedName,
    email: editedEmail,
    phone: editedPhone,
    skills: editedSkills,
    experience: editedExperience
  });

  alert('Resume changes saved!');
});
 
