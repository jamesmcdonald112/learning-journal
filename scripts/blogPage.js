import blogPosts from "../blog/blogPosts.js";

/**
 * Extract post ID from URL
 */
function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

/**
 * Display the Blog Post
 */
function displayBlogPost() {
    const blogPostContainer = document.getElementById("blog-post");
    const postId = getPostIdFromUrl();

    if (!postId) {
        blogPostContainer.innerHTML = "<p>⚠ Blog post not found.</p>";
        return;
    }

    const post = blogPosts.find(p => p.id === parseInt(postId));

    if (!post) {
        blogPostContainer.innerHTML = "<p>⚠ Blog post not found.</p>";
        return;
    }

    // ✅ Insert post content dynamically
    blogPostContainer.innerHTML = `
        <header class="blog-post__header">
            <h1 class="blog-post__title">${post.title}</h1>
            <time class="blog-post__date">${post.date.toDateString()}</time>
        </header>
        <img class="blog-post__image" src="${post.image}" alt="${post.title}">
        <div class="blog-post__content">${post.content}</div>
    `;
}

// ✅ Run when page loads
document.addEventListener("DOMContentLoaded", displayBlogPost);