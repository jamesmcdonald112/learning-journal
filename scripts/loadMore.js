import { displayRecentPosts } from "./recentPosts.js";
import blogPosts from "../blog/blogPosts.js";

let currentLimit = window.innerWidth >=768 ? 6 : 3
let allPostsLoaded = false 


function handleViewMoreClick() {
    const viewMoreBtn = document.getElementById("view-more-btn");

    if (!viewMoreBtn) {
        console.error("View More button not found.");
        return;
    }

    viewMoreBtn.addEventListener("click", () => {
        if (!allPostsLoaded) {
            displayRecentPosts(blogPosts.length - 1);
            allPostsLoaded = true;
            viewMoreBtn.style.display = "none";
        }
    });
}

function handleResizeUpdate() {
    window.addEventListener("resize", () => {
        let newLimit = window.innerWidth >= 768 ? 6 : 3
        if(newLimit !== currentLimit) {
            currentLimit = newLimit
            displayRecentPosts(currentLimit)
        }
    })
}

export{ handleViewMoreClick, handleResizeUpdate}