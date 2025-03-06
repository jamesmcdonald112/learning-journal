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
    }
];

// Sort by newest first
blogPosts.sort((a, b) => b.date - a.date);

// Assign unique IDs dynamically
blogPosts.forEach((post, index) => {
    post.id = index;
});

export default blogPosts;