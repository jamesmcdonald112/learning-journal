import { displayHeroPost, displayRecentPosts } from "./recentPosts.js";
import { handleViewMoreClick, handleResizeUpdate } from "./loadMore.js";


document.addEventListener("DOMContentLoaded", () => {

    fetch("./components/header.html")
        .then(response => response.text())
        .then(data => document.querySelector("header").innerHTML = data);

    fetch("./components/footer.html")
        .then(response => response.text())
        .then(data => document.querySelector("footer").innerHTML = data);

        displayHeroPost()
        displayRecentPosts()

        handleViewMoreClick()
        handleResizeUpdate()
});

