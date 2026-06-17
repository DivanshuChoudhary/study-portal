// =========================
// SECTION SWITCHING SYSTEM
// =========================
function show(sectionId) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");

  // Update header title
  const title = document.getElementById("title");
  title.innerText =
    sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

// =========================
// THEME TOGGLE (DARK / LIGHT)
// =========================
function toggleTheme() {
  document.body.classList.toggle("light");
}

// =========================
// TASK SYSTEM (ADD + DELETE)
// =========================
function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();

  if (value === "") return;

  const task = document.createElement("div");
  task.className = "item";

  task.innerHTML = `
    <span>${value}</span>
    <span onclick="this.parentElement.remove()">❌</span>
  `;

  document.getElementById("taskList").appendChild(task);

  input.value = "";
}

// =========================
// NOTES SYSTEM (ADD + DELETE)
// =========================
function addNote() {
  const input = document.getElementById("noteInput");
  const value = input.value.trim();

  if (value === "") return;

  const note = document.createElement("div");
  note.className = "item";

  note.innerHTML = `
    <span>${value}</span>
    <span onclick="this.parentElement.remove()">❌</span>
  `;

  document.getElementById("noteList").appendChild(note);

  input.value = "";
}

// =========================
// OPTIONAL: ENTER KEY SUPPORT
// =========================

// Add task on Enter
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const taskInput = document.getElementById("taskInput");
    const noteInput = document.getElementById("noteInput");

    if (document.activeElement === taskInput) {
      addTask();
    }

    if (document.activeElement === noteInput) {
      addNote();
    }
  }
});

// =========================
// INITIAL UI SETUP (OPTIONAL)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Study Portal Loaded 🚀");
});