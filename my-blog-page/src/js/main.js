// This file contains the JavaScript code for the blog page. It includes functionality for handling user interactions, fetching blog posts, and updating the DOM.

document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Function to fetch blog posts
    const fetchBlogPosts = async () => {
        try {
            const response = await fetch('https://api.example.com/blog-posts'); // Replace with your API endpoint
            const posts = await response.json();
            displayBlogPosts(posts);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    };

    // Function to display blog posts
    const displayBlogPosts = (posts) => {
        blogPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>Published on ${new Date(post.date).toLocaleDateString()}</em></p>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    };

    // Initial fetch of blog posts
    fetchBlogPosts();
});