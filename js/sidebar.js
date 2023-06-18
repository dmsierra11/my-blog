import { categories } from "./content/sidebar.js";

function generateSidebar() {
  return `<div class="sidebar">
      <h3>Categories</h3>
      <ul>
        ${categories
      .map((category) => `<li>${category.title}</li>`)
      .join("")}
      </ul>
    </div>`;
}

// Function to import the sidebar HTML
function Sidebar() {
  const sidebarContainer = document.getElementById("sidebarContainer");
  const sidebarHTML = generateSidebar();
  sidebarContainer.innerHTML = sidebarHTML;
}

// Call the Sidebar function to load the sidebar
// Sidebar();

const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
  const sidebarRect = sidebar.getBoundingClientRect();
  const sidebarWidth = sidebarRect.width;
  const sidebarLeft = sidebarRect.left;

  if (sidebarLeft < 0) {
    sidebar.style.left = '0';
  } else {
    sidebar.style.left = `-${sidebarWidth}px`;
  }
});
