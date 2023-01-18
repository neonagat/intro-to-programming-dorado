const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Sergii Tarasovskyi ${thisYear}`;
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  console.log(name, email, message);

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = ` <a href=mailto:${email} > ${name} </a> wrote: ${message} `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  messageList.appendChild(newMessage);
  newMessage.appendChild(removeButton);

  messageForm.reset();
});
