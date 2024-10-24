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

// This function will show the movie details which is available on the other page by redirecting
// Display Movie Details
async function displayMovieDetails()
{
  const movieId = window.location.search.split('=')[1];
  const movie = await fetchAPIData(`movie/${movieId}`);

  // Overlay for Background Image
  displayBackdropImage('movie', movie.backdrop_path);

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="details-top">
          <div>
          ${movie.poster_path ? `<img
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
        />` : `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${movie.title}"
      />`}
            
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
              ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $ ${addCommasToNumber(movie.budget)}</li>
            <li><span class="text-secondary">Revenue:</span> $ ${addCommasToNumber(movie.revenue)}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} Minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies.map((company) => `<span>${company.name}</span>`).join(', ')}</div>
        </div>`;

        document.querySelector('#movie-details').appendChild(div);
}
// Display Movie Details

// This function will be used to add backdrop image on both Movies and Tv Show details pages
// Display Backdrop Image
function displayBackdropImage(type, imagePath)
{
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${imagePath})`;

  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'fixed';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.2';

  if(type === 'movie')
  {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  }
  else
  {
    document.querySelector('#show-details').appendChild(overlayDiv);
  };
};
// Display Backdrop Image


// This function will add commas to the number that are shown in the details page for budget and revenue
// Add Commas to Number
function addCommasToNumber(number)
{
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// Add Commas to Number


// Function to receive Popular Tv Shows using FetchAPIData function (Will be used on Main Page)
// Display Popular TV Shows
async function displayPopularShows() {
    const { results } = await fetchAPIData('tv/popular');
    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="card">
          <a href="movie-details.html?id=${show.id}">
            ${show.poster_path ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${show.first_air_date}</small>
            </p>
          </div>
        </div>`
        document.querySelector('#popular-shows').appendChild(div);
    })
};
// Display Popular TV Shows


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
            displayPopularShows();
            console.log("Shows");
            break;
        case '/movie-details.html':
            displayMovieDetails();
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