// Global Variables
const global =
{
    currentPage: window.location.pathname
}

// Global Variables

// Fetch data from the TMDB API
// Fetch Function
async function fetchAPIData(endpoint) {
    const API_KEY = '96a295ed5e51ddb6255b1ba01f334994';
    const API_URL = 'https://api.themoviedb.org/3/';

    showSpinner();

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    hideSpinner();
    
    return data;
}
// Fetch Function

// Spinner that will be embedded in FetchiApi function so it runs whenever the API call has been made
// Spinner Function
function showSpinner()
{
    document.querySelector('.spinner').classList.add('show');
}
function hideSpinner()
{
    document.querySelector('.spinner').classList.remove('show');
}
// Spinner Function

// Function to receive Popular Movies using FetchAPIData function (Will be used on Main Page)
// Display Popular Movies
async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="card">
          <a href="movie-details.html?id=${movie.id}">
            ${movie.poster_path ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        </div>`
        document.querySelector('#popular-movies').appendChild(div);
    })
};
// Display Popular Movies



// Higlight active link function
// Highlight
function higlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })
};
// Highlight


// Router for pages from here
// Router
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
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