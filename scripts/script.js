import { displayHeroPost } from "./recentPosts.js";

// script

document.addEventListener("DOMContentLoaded", () => {

    fetch("./components/header.html")
        .then(response => response.text())
        .then(data => document.querySelector("header").innerHTML = data);

    fetch("./components/footer.html")
        .then(response => response.text())
        .then(data => document.querySelector("footer").innerHTML = data);

        displayHeroPost()
});