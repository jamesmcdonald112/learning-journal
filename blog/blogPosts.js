// Blog Posts

const blogPosts = [
    {
        title: "Understanding Responsive Design",
        date: new Date("2025-03-04"),
        description: "How to make websites look great on all devices.",
        image: "/images/responsive-design.jpg",
        content: `
            <p>Responsive design ensures that websites work on different screen sizes.</p>
            <p>The key techniques include using fluid layouts, flexible images, and CSS media queries.</p>
            <h3>Key Takeaways:</h3>
            <ul>
                <li>Use percentages and 'em' units instead of fixed widths.</li>
                <li>Apply media queries to adjust styles for different screen sizes.</li>
                <li>Test responsiveness using browser developer tools.</li>
            </ul>
        `
    },
    {
        title: "CSS Grid: The Future of Layouts",
        date: new Date("2025-02-07"),
        description: "How CSS Grid simplifies complex layouts.",
        image: "/images/grid.jpg",
        content: `
            <p>CSS Grid is a powerful tool for building two-dimensional layouts.</p>
            <h3>Grid Basics:</h3>
            <ul>
                <li>Define a grid container using <code>display: grid;</code>.</li>
                <li>Create rows and columns with <code>grid-template-columns</code> and <code>grid-template-rows</code>.</li>
                <li>Use <code>grid-gap</code> to add spacing between items.</li>
            </ul>
        `
    },
    {
        title: "Flexbox: Aligning Elements with Ease",
        date: new Date("2025-01-05"),
        description: "How Flexbox makes it easier to align content.",
        image: "/images/flexbox.jpg",
        content: `
            <p>CSS Flexbox allows for efficient alignment of elements along a one-dimensional axis.</p>
            <h3>Important Concepts:</h3>
            <ul>
                <li><code>display: flex;</code> turns an element into a flex container.</li>
                <li><code>justify-content</code> aligns items horizontally.</li>
                <li><code>align-items</code> controls vertical alignment.</li>
            </ul>
        `
    },
    {
        title: "Media Queries: Making Websites Adaptive",
        date: new Date("2024-12-02"),
        description: "The power of media queries in responsive design.",
        image: "/images/media-queries.jpg",
        content: `
            <p>Media queries help apply different styles based on screen size.</p>
            <h3>Common Breakpoints:</h3>
            <ul>
                <li><code>@media (max-width: 768px)</code> for tablets.</li>
                <li><code>@media (max-width: 480px)</code> for mobile phones.</li>
            </ul>
        `
    },
    {
        title: "The Power of CSS Variables",
        date: new Date("2025-02-20"),
        description: "How CSS variables can improve your workflow.",
        image: "/images/css-variables.jpg",
        content: `
            <p>CSS variables (also called custom properties) allow you to store values in reusable variables.</p>
            <h3>Key Benefits:</h3>
            <ul>
                <li>Improve maintainability and readability.</li>
                <li>Enable dynamic theming.</li>
                <li>Work well with JavaScript for live updates.</li>
            </ul>
        `
    },
    {
        title: "Improving Website Performance with Lazy Loading",
        date: new Date("2025-02-10"),
        description: "Why lazy loading is essential for a fast website.",
        image: "/images/lazy-loading.jpg",
        content: `
            <p>Lazy loading defers the loading of non-critical resources until they are needed.</p>
            <h3>How to Implement:</h3>
            <ul>
                <li>Use the <code>loading="lazy"</code> attribute for images.</li>
                <li>Load scripts dynamically only when required.</li>
                <li>Optimize resource loading using intersection observers.</li>
            </ul>
        `
    },
    {
        title: "JavaScript ES6+ Features You Should Know",
        date: new Date("2025-01-25"),
        description: "Modern JavaScript features that make coding easier.",
        image: "/images/es6-features.jpg",
        content: `
            <p>ES6+ introduced several improvements to JavaScript that enhance productivity.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Arrow functions for concise syntax.</li>
                <li>Destructuring for easier data access.</li>
                <li>Promises and async/await for better asynchronous handling.</li>
            </ul>
        `
    },
    {
        title: "Dark Mode: Implementing a Theme Toggle",
        date: new Date("2025-01-15"),
        description: "How to add dark mode to your website with CSS and JavaScript.",
        image: "/images/dark-mode.jpg",
        content: `
            <p>Dark mode is a popular UI feature that reduces eye strain.</p>
            <h3>Implementation Steps:</h3>
            <ul>
                <li>Use CSS variables to define light and dark themes.</li>
                <li>Toggle themes with JavaScript.</li>
                <li>Save user preference in local storage.</li>
            </ul>
        `
    },
    {
        title: "Semantic HTML: Why It Matters",
        date: new Date("2024-12-18"),
        description: "Improve accessibility and SEO with semantic HTML.",
        image: "/images/semantic-html.jpg",
        content: `
            <p>Using semantic HTML elements improves both user experience and search engine ranking.</p>
            <h3>Best Practices:</h3>
            <ul>
                <li>Use <code>&lt;article&gt;</code> for blog posts.</li>
                <li>Use <code>&lt;nav&gt;</code> for navigation menus.</li>
                <li>Use <code>&lt;section&gt;</code> to group related content.</li>
            </ul>
        `
    },
    {
        title: "Building a Responsive Navigation Bar",
        date: new Date("2024-11-30"),
        description: "How to create a fully responsive navbar with CSS and JavaScript.",
        image: "/images/responsive-navbar.jpg",
        content: `
            <p>A responsive navbar adapts to different screen sizes and provides a smooth user experience.</p>
            <h3>Key Techniques:</h3>
            <ul>
                <li>Use Flexbox or Grid for layout.</li>
                <li>Hide/show menu items based on screen size.</li>
                <li>Add a hamburger menu for mobile users.</li>
            </ul>
        `
    }
];

// Sort by newest first
blogPosts.sort((a, b) => b.date - a.date);

// Assign unique IDs dynamically
blogPosts.forEach((post, index) => {
    post.id = index;
});

export default blogPosts;