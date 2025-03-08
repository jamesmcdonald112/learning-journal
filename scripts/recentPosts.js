// Recent posts

import blogPosts from "../blog/blogPosts.js";

function formattedDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: "long",
        day: "numeric"
    })
}

function displayHeroPost() {
    const heroContainer = document.getElementById('hero')
    if(!heroContainer) {
        console.error("Hero container not found.")
        return
     }

    const newBlogPost = blogPosts[0];
    if(!newBlogPost) {
        console.error("New Blog Post not found")
        return
    }
  
    

    // Background Image
    heroContainer.style.setProperty('--hero-bg', `url('${newBlogPost.image}')`);

    heroContainer.innerHTML = `
    <div class="hero__content">
        <time class="hero__date">${formattedDate(newBlogPost.date)}</time>
        <h1 class="hero__title">${newBlogPost.title}</h1>
        <p class="hero__description">${newBlogPost.description}</p>
    </div>
    `
}



function displayRecentPosts(limit = 3) {
    const recentPostsContainer = document.getElementById("recent-posts-container");

    if (!recentPostsContainer) {
        console.error("❌ Recent posts container not found.");
        return;
    }

    const recentBlogPosts = blogPosts.slice(1, limit + 1);

    if (recentBlogPosts.length === 0) {
        console.warn("⚠ No recent blog posts available.");
        recentPostsContainer.innerHTML = "<p>No recent blog posts available.</p>";
        return;
    }

    recentPostsContainer.innerHTML = recentBlogPosts.map(post => `
        <article class="recent-post">
            <a href="blog.html?id=${post.id}" class="recent-post__link">
                <img class="recent-post__image" src="${post.image}" alt="${post.title}">
                <time class="recent-post-date">${formattedDate(post.date)}</time>
                <h2 class="recent-post__title">${post.title}</h2>
                <p class="recent-post__description">${post.description}</p>
            </a>
        </article>
    `).join("");
}

export {displayRecentPosts, displayHeroPost };