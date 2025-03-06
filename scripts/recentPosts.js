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
        return;
     }

    const newBlogPost = blogPosts[0];
  
    

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



function displayRecentPosts() {
    return 
}

export {displayRecentPosts, displayHeroPost };