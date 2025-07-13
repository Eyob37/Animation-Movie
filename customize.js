// Global variables for customization
let customMovies = [...moviesData];
let filteredCustomMovies = [...moviesData];
let draggedElement = null;
let draggedIndex = -1;
let customOrder = [];
let firstPrepar = "sort";

// Initialize the customization page
document.addEventListener('DOMContentLoaded', function() {
    initializeCustomization();
});

function initializeCustomization() {
    // Load saved custom order
    loadCustomOrder();
    
    // Setup event listeners
    setupCustomizationEventListeners();
    
    // Display movies
    displayCustomizableMovies();
}

function setupCustomizationEventListeners() {
    // Category filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            setActiveFilter(this, 'category');
            filterByCategory(this.dataset.category);
        });
    });

    // Company filters
    const companyButtons = document.querySelectorAll('.company-btn');
    companyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            setActiveFilter(this, 'company');
            filterByCompany(this.dataset.company);
        });
    });

    // Action buttons
    document.getElementById('resetOrder').addEventListener('click', resetOrder);
    document.getElementById('saveCustomOrder').addEventListener('click', saveCustomOrder);
    document.getElementById('randomizeOrder').addEventListener('click', randomizeOrder);
    document.getElementById('applyChanges').addEventListener('click', applyChanges);
}

function setActiveFilter(clickedBtn, type) {
    const buttons = type === 'category' ? 
        document.querySelectorAll('.filter-btn') : 
        document.querySelectorAll('.company-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
}

function filterByCategory(category) {
    if (category === 'all') {
        filteredCustomMovies = [...customMovies];
    } else {
        filteredCustomMovies = customMovies.filter(movie => 
            movie.category.toLowerCase() === category.toLowerCase()
        );
    }
    displayCustomizableMovies();
}

function filterByCompany(company) {
    if (company === 'all') {
        filteredCustomMovies = [...customMovies];
    } else {
        filteredCustomMovies = customMovies.filter(movie => 
            movie.company.toLowerCase() === company.toLowerCase()
        );
    }
    displayCustomizableMovies();
}

function displayCustomizableMovies() {
    const container = document.getElementById('sortableMovies');
    container.innerHTML = '';

    filteredCustomMovies.forEach((movie, index) => {
        const movieElement = createSortableMovieElement(movie, index);
        container.appendChild(movieElement);
    });

    // Initialize new drag and drop system
    initializeDragAndDrop();
}

function createSortableMovieElement(movie, index) {
    const element = document.createElement('div');
    element.className = 'sortable-item';
    element.dataset.movieId = movie.id;
    element.dataset.index = index;
    
    element.innerHTML = `
        <div class="sortable-movie-content">
            <div class="movie-handle" data-handle="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="9" cy="5" r="1"/>
                    <circle cx="15" cy="5" r="1"/>
                    <circle cx="9" cy="12" r="1"/>
                    <circle cx="15" cy="12" r="1"/>
                    <circle cx="9" cy="19" r="1"/>
                    <circle cx="15" cy="19" r="1"/>
                </svg>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-category">${movie.category}</span>
                    <span class="movie-company">${movie.company}</span>
                </div>
            </div>
            <div class="movie-order">#${index + 1}</div>
            <div class="move-buttons">
                <button class="move-btn move-up" data-direction="up" title="Move Up">↑</button>
                <button class="move-btn move-down" data-direction="down" title="Move Down">↓</button>
            </div>
        </div>
    `;

    return element
}

function initializeDragAndDrop() {
    const container = document.getElementById('sortableMovies');
    const items = container.querySelectorAll('.sortable-item');
    
    // Add button-based movement
    items.forEach((item, index) => {
        const upBtn = item.querySelector('.move-up');
        const downBtn = item.querySelector('.move-down');
        
        upBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            moveItem(index, index - 1);
        });
        
        downBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            moveItem(index, index + 1);
        });
        
        // Disable buttons at boundaries
        if (index === 0) upBtn.disabled = true;
        if (index === items.length - 1) downBtn.disabled = true;
    });

    // Modern drag and drop implementation
    let draggedItem = null;
    let placeholder = null;

    items.forEach(item => {
        // Make items draggable
        item.draggable = true;
        
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            draggedIndex = parseInt(item.dataset.index);
            
            // Create placeholder
            placeholder = document.createElement('div');
            placeholder.className = 'drag-placeholder';
            placeholder.innerHTML = '<div class="placeholder-content">Drop here</div>';
            
            // Style the dragged item
            setTimeout(() => {
                item.classList.add('dragging');
            }, 0);
            
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', item.outerHTML);
        });

        item.addEventListener('dragend', (e) => {
            item.classList.remove('dragging');
            if (placeholder && placeholder.parentNode) {
                placeholder.parentNode.removeChild(placeholder);
            }
            
            // Clean up all drag states
            items.forEach(i => {
                i.classList.remove('drag-over', 'drag-above', 'drag-below');
            });
            
            draggedItem = null;
            placeholder = null;
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            if (draggedItem && item !== draggedItem) {
                const rect = item.getBoundingClientRect();
                const midpoint = rect.top + rect.height / 2;
                const isAbove = e.clientY < midpoint;
                
                // Remove existing classes
                item.classList.remove('drag-above', 'drag-below');
                
                // Add appropriate class
                if (isAbove) {
                    item.classList.add('drag-above');
                    if (placeholder && item.parentNode) {
                        item.parentNode.insertBefore(placeholder, item);
                    }
                } else {
                    item.classList.add('drag-below');
                    if (placeholder && item.parentNode) {
                        item.parentNode.insertBefore(placeholder, item.nextSibling);
                    }
                }
            }
        });

        item.addEventListener('dragleave', (e) => {
            // Only remove classes if we're actually leaving the item
            if (!item.contains(e.relatedTarget)) {
                item.classList.remove('drag-above', 'drag-below');
            }
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            
            if (draggedItem && item !== draggedItem) {
                const draggedIdx = parseInt(draggedItem.dataset.index);
                const targetIdx = parseInt(item.dataset.index);
                
                const rect = item.getBoundingClientRect();
                const midpoint = rect.top + rect.height / 2;
                const isAbove = e.clientY < midpoint;
                
                let newIndex = targetIdx;
                if (!isAbove) {
                    newIndex = targetIdx + 1;
                }
                
                // Adjust for the removal of the dragged item
                if (draggedIdx < newIndex) {
                    newIndex--;
                }
                
                moveItem(draggedIdx, newIndex);
            }
            
            // Clean up
            item.classList.remove('drag-above', 'drag-below');
        });
    });
}

function moveItem(fromIndex, toIndex) {
    // Validate indices
    if (fromIndex < 0 || fromIndex >= filteredCustomMovies.length ||
        toIndex < 0 || toIndex >= filteredCustomMovies.length ||
        fromIndex === toIndex) {
        return;
    }
    
    // Move item in array
    const movedMovie = filteredCustomMovies.splice(fromIndex, 1)[0];
    filteredCustomMovies.splice(toIndex, 0, movedMovie);
    
    // Update the main custom movies array
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const activeCompany = document.querySelector('.company-btn.active').dataset.company;
    
    if (activeCategory === 'all' && activeCompany === 'all') {
        customMovies = [...filteredCustomMovies];
    } else {
        // Update positions in the main array for filtered items
        customMovies = customMovies.filter(movie => 
            !filteredCustomMovies.find(fm => fm.id === movie.id)
        );
        
        // Insert filtered movies at the beginning (or maintain their relative positions)
        filteredCustomMovies.forEach((movie, index) => {
            customMovies.splice(index, 0, movie);
        });
    }
    
    // Re-display movies
    displayCustomizableMovies();
    
    // Show success message
    showNotification('Movies reordered successfully!', 'success');
}

function resetOrder() {
    customMovies = [...moviesData];
    filteredCustomMovies = [...moviesData];
    localStorage.setItem('firstPrepar', "custom");
    displayCustomizableMovies();
    
    showNotification('Order reset to default', 'success');
}

function saveCustomOrder() {
    customOrder = filteredCustomMovies.map(movie => movie.id);
    localStorage.setItem('customMovieOrder', JSON.stringify(customOrder));
    
    localStorage.setItem('firstPrepar', "custom");
    showNotification('Custom order saved successfully!', 'success');
}

function loadCustomOrder() {
    const saved = localStorage.getItem('customMovieOrder');
    if (saved) {
        customOrder = JSON.parse(saved);
        
        const orderedMovies = [];
        customOrder.forEach(id => {
            const movie = moviesData.find(m => m.id === id);
            if (movie) {
                orderedMovies.push(movie);
            }
        });
        
        moviesData.forEach(movie => {
            if (!orderedMovies.find(m => m.id === movie.id)) {
                orderedMovies.push(movie);
            }
        });
        
        customMovies = orderedMovies;
        filteredCustomMovies = [...orderedMovies];
    }
}

function randomizeOrder() {
    for (let i = customMovies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [customMovies[i], customMovies[j]] = [customMovies[j], customMovies[i]];
    }
    
    filteredCustomMovies = [...customMovies];
    displayCustomizableMovies();
    
    showNotification('Movies randomized!', 'success');
}

function applyChanges() {
    saveCustomOrder();
    window.location.href = 'main.html';
}

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add enhanced CSS for the new drag system
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .sortable-movie-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
    }
    
    .movie-handle {
        cursor: grab;
        color: var(--text-secondary);
        padding: 0.5rem;
        user-select: none;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .movie-handle:hover {
        color: var(--primary-color);
    }
    
    .movie-handle:active {
        cursor: grabbing;
    }
    
    .movie-info {
        flex: 1;
    }
    
    .movie-title {
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
    }
    
    .movie-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        flex-wrap: wrap;
    }
    
    .movie-order {
        font-weight: 600;
        color: var(--primary-color);
        font-size: 1.1rem;
        min-width: 40px;
        text-align: center;
    }
    
    .move-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    
    .move-btn {
        width: 30px;
        height: 30px;
        border: 1px solid var(--border-color);
        background: var(--bg-primary);
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        color: var(--text-secondary);
        transition: all 0.3s ease;
    }
    
    .move-btn:hover:not(:disabled) {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
    
    .move-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
    
    .sortable-item {
        transition: all 0.3s ease;
        border: 2px solid transparent;
        user-select: none;
        position: relative;
    }
    
    .sortable-item:hover {
        box-shadow: var(--shadow-medium);
        border-color: var(--border-color);
    }
    
    .sortable-item.dragging {
        opacity: 0.5;
        transform: scale(1.02);
        box-shadow: var(--shadow-heavy);
        border-color: var(--primary-color);
        z-index: 1000;
        background: var(--bg-primary);
    }
    
    .sortable-item.drag-above::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
        z-index: 10;
    }
    
    .sortable-item.drag-below::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
        z-index: 10;
    }
    
    .drag-placeholder {
        height: 60px;
        margin: 0.5rem 0;
        border: 2px dashed var(--primary-color);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(99, 102, 241, 0.1);
        animation: pulse 1s ease-in-out infinite;
    }    
    
   .placeholder.content{
       color: var(--primary-color);
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 0.6;
        }
        50% {
            opacity: 1;
        }
    }
    
    #sortableMovies {
        min-height: 200px;
        position: relative;
    }
    
    /* Mobile optimizations */
    @media (max-width: 768px) {
        .movie-handle {
            padding: 1rem 0.5rem;
        }
        
        .sortable-item {
            margin-bottom: 0.5rem;
            padding: 1.5rem 1rem;
        }
        
        .movie-meta {
            flex-direction: column;
            gap: 0.25rem;
        }
        
        .move-buttons {
            flex-direction: row;
            gap: 0.5rem;
        }
        
        .move-btn {
            width: 35px;
            height: 35px;
            font-size: 1rem;
        }
    }
    
    /* Touch device specific styles */
    @media (pointer: coarse) {
        .sortable-item {
            padding: 1.5rem 1rem;
        }
        
        .movie-handle {
            padding: 1rem;
        }
        
        .move-btn {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
        }
    }
`;
document.head.appendChild(style);