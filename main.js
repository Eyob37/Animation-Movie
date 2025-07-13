// Global variables

let currentMovies = [...moviesData];
let filteredMovies = [...moviesData];
let currentSort = 'name-asc';
let currentFilter = 'all';
let currentView = 'detailed';
let searchTerm = '';
let firstPrepar = "";

// Initialize the main page
document.addEventListener('DOMContentLoaded', function() {
    initializeMainPage();
});

function initializeMainPage() {
    // Setup event listeners
    setupEventListeners();
    
    // Load saved preferences
    loadPreferences();
    
    // Display movies
    displayMovies();
    
    // Update movie count
    updateMovieCount();
    
    // Hide loading spinner
    hideLoading();
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    
    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            closeMenu();
        }
    });
    
    // Menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuClick);
    });
    
    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleViewChange);
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredMovies = [...currentMovies];
    } else {
        filteredMovies = currentMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.company.toLowerCase().includes(searchTerm) ||
            movie.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayMovies();
    updateMovieCount();
}

function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

function closeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    
    menuToggle.classList.remove('active');
    menuOverlay.classList.remove('active');
}

function handleMenuClick(e) {
    const item = e.target;  
    if (item.dataset.sort) {
        localStorage.setItem('firstPrepar', "nonCustom");
        handleSort(item.dataset.sort);
    } else if (item.dataset.offset) {    
        localStorage.setItem('firstPrepar', "nonCustom")    
        let filter = JSON.parse(localStorage.getItem("movieFilter"));
       if(item.dataset.offset === 'company') {
           filter[0] = item.dataset.filter;
       }else {
           filter[1] = item.dataset.filter;
       }
       handleFilter(filter);
    }
    
    closeMenu();
}

function handleSort(sortType) {
    currentSort = sortType;
    
    switch (sortType) {
        case 'name-asc':
            currentMovies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            currentMovies.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'date-asc':
            currentMovies.sort((a, b) => a.year - b.year);
            break;
        case 'date-desc':
            currentMovies.sort((a, b) => b.year - a.year);
            break;
        case 'company':
            currentMovies.sort((a, b) => a.company.localeCompare(b.company));
            break;
    }
    
    // Re-apply search filter
    handleSearch();
    
        
    localStorage.setItem('movieSort', sortType);
}


function handleFilter(filterX) {    
    currentFilter = [...filterX];    
    if(currentFilter[0] == "all" || currentFilter[1] == "all") {        
        if(currentFilter[1]!= "all") {
           currentMovies = moviesData.filter(movie => 
               movie.category.toLowerCase() === currentFilter[1].toLowerCase()
           ); 
        }else if(currentFilter[0]!= "all"){
           currentMovies = moviesData.filter(movie => 
              movie.company.toLowerCase() === currentFilter[0].toLowerCase()
           ); 
        }else{
            currentMovies = [...moviesData]
        }
    }else {        
        currentMovies = moviesData.filter(movie => 
            movie.company.toLowerCase() === currentFilter[0].toLowerCase()
        ); 
         currentMovies = currentMovies.filter(movie => 
            movie.category.toLowerCase() === currentFilter[1].toLowerCase()
         ); 
    }
           
    // Re-apply current sort
    handleSort(currentSort);
        
    // Save preference
    localStorage.setItem('movieFilter', JSON.stringify(currentFilter));
}

function handleViewChange(e) {
    const viewType = e.target.dataset.view;
    currentView = viewType;
    
    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Update display
    displayMovies();
    
    // Save preference
    localStorage.setItem('movieView', viewType);
}

function displayMovies() {
    const container = document.getElementById('moviesGrid');
    container.innerHTML = '';
    
    // Update grid layout based on view
    if (currentView === 'compact') {
        container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    } else {
        container.style.gridTemplateColumns = '1fr';
    }
    
    filteredMovies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        container.appendChild(movieElement);
    });
}

function createMovieElement(movie) {
    const details = document.createElement('details');
    details.className = 'movie-card';
    
    const summary = document.createElement('summary');
    summary.className = 'movie-summary';
    
    summary.innerHTML = `
        <div>
            <div class="movie-title">${movie.title}</div>
            <div class="movie-year">${movie.year}</div>
        </div>
        <div class="expand-icon">▼</div>
    `;
    
    const detailsContent = document.createElement('div');
    detailsContent.className = 'movie-details';
    
    // Create optimized image element
    const img = document.createElement('img');
    img.className = 'movie-poster lazy';
    img.alt = `${movie.title} poster`;
    img.loading = 'lazy';
    
    // Use a small placeholder first
    img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=';
    img.dataset.src = movie.image;
    
    detailsContent.innerHTML = `
        <div class="movie-info">
            <div class="info-item">
                <div class="info-label">Movie Name</div>
                <div class="info-value">${movie.title}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Release Date</div>
                <div class="info-value">${movie.year}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Category</div>
                <div class="info-value">
                    <span class="category-tag">${movie.category}</span>
                </div>
            </div>
            <div class="info-item">
                <div class="info-label">Production Company</div>
                <div class="info-value">
                    <span class="company-tag">${movie.company}</span>
                </div>
            </div>
            ${movie.series ? `
                <div class="info-item">
                    <div class="info-label">Series</div>
                    <div class="info-value">${movie.series}</div>
                </div>
            ` : ''}
            <div class="info-item">
                <div class="info-label">Movie Poster</div>
                <div class="info-value movie-poster-container"></div>
            </div>
        </div>
    `;
    
    // Append the image to its container
    const posterContainer = detailsContent.querySelector('.movie-poster-container');
    posterContainer.appendChild(img);
    
    // Add click handler ONLY to the poster container
    posterContainer.onclick = () => {
        showMovieModal(movie);
    };
    
    details.appendChild(summary);
    details.appendChild(detailsContent);
    
    return details;
}

function showMovieModal(movie) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'movie-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2>${movie.title} (${movie.year})</h2>
            </div>
            <div class="modal-body">
                <img src="${movie.image}" alt="${movie.title}" class="modal-poster">
                <div class="modal-details">
                    <p><strong>Category:</strong> ${movie.category}</p>
                    <p><strong>Company:</strong> ${movie.company}</p>
                    ${movie.series ? `<p><strong>Series:</strong> ${movie.series}</p>` : ''}
                </div>
            </div>
        </div>
    `;

    // Add to DOM
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal handlers
    modal.querySelector('.close-modal').onclick = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    };

    // Close on ESC key
    document.addEventListener('keydown', function escClose(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', escClose);
        }
    });
}

// Intersection Observer for lazy loading
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                    
                    lazyImage.onload = function() {
                        lazyImage.style.opacity = 1;
                    };
                    lazyImage.style.transition = "opacity 0.3s";
                    lazyImage.style.opacity = 0;
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});


function updateMovieCount() {
    const countElement = document.getElementById('movieCount');
    countElement.textContent = filteredMovies.length;
}

function hideLoading() {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
}

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'false');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
    }
}

function loadPreferences() {
    // Load dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Load sort preference
    const savedSort = localStorage.getItem('movieSort');
    if (savedSort) {
        handleSort(savedSort);
    }
    
    // Load filter preference
    // Read the raw string; fall back to empty string if null

    let savedFilterl = localStorage.getItem("movieFilter");    
    let savedFilter = JSON.parse(savedFilterl);
    
    if (savedFilter) {
        handleFilter(savedFilter);
    }
    
    // Load view preference
    const savedView = localStorage.getItem('movieView');
    if (savedView) {
        currentView = savedView;
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === savedView) {
                btn.classList.add('active');
            }
        });
    }
    
    firstPrepar = localStorage.getItem('firstPrepar');
    console.log(firstPrepar);
    if(savedSort && firstPrepar == "nonCustom") {
        localStorage.setItem('firstPrepar', "nonCustom");
        return;
    }
    // Load custom order from customize page
    const customOrder = localStorage.getItem('customMovieOrder');
    if (customOrder) {
        const orderIds = JSON.parse(customOrder);
        const orderedMovies = [];
        
        orderIds.forEach(id => {
            const movie = moviesData.find(m => m.id === id);
            if (movie) {
                orderedMovies.push(movie);
            }
        });
        
        // Add any movies that weren't in the saved order
        
        // Update the data arrays
        currentMovies = orderedMovies;
        filteredMovies = [...orderedMovies];
        
        displayMovies();
    }
    
}

// Add smooth scrolling for mobile
document.addEventListener('touchstart', function() {}, { passive: true });
