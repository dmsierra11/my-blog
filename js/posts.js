import { blogPosts } from "./content/posts.js";

// Function to generate blog post HTML
function generateBlogPostHTML(post) {
    return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <a href="${post.link}">Read More</a>
      </div>
    `;
}

// Loop through blogPosts array and generate HTML for each post
const postContainer = document.getElementById("postContainer");
blogPosts.forEach((post) => {
    const postHTML = generateBlogPostHTML(post);
    postContainer.innerHTML += postHTML;
});
