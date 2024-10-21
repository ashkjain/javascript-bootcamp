// Global Variables
const global = 
{
    currentPage: window.location.pathname
}

// Global Variables


// Higlight active link function
// Highlight
function higlightActiveLink()
{
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => 
        {
            if(link.getAttribute('href') === global.currentPage)
            {
                link.classList.add('active');
            }
        })
};
// Highlight


// Router for pages from here
// Router
function init()
{
    switch(global.currentPage)
    {
        case '/':
        case '/index.html':
            console.log("Home");
            break;
        case '/shows.html':
            console.log("Shows");
            break;
        case '/movie-details.html':
            console.log("Movie Details");
            break;
        case '/tv-details.html':
            console.log("Tv Details");
            break;
        case '/search.html':
            console.log('Search');
            break;
    }
    higlightActiveLink();
}
document.addEventListener('DOMContentLoaded', init);
// Router