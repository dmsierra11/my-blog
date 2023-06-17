import { categories } from "./content/sidebar.js";

// const categories = [
//     {
//         title: "Category 1",
//         link: "post.html",
//     },
//     {
//         title: "Category 2",
//         link: "post.html",
//     },
//     {
//         title: "Category 3",
//         link: "post.html",
//     },
// ];

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
Sidebar();
