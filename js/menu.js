// Calculate relative path to Menu directory
function getRelativePathToMenu() {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const depth = pathParts.length - 1;
    if (depth <= 1) return './Menu/';  // If in root
    return '../'.repeat(depth - 1) + 'Menu/';
}

// Create menu HTML structure
function createMenuHTML() {
    const menuPath = getRelativePathToMenu();
    const menuStructure = `
        <div class="hamburger-menu">
            <div class="hamburger-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="menu-overlay">
            <div class="menu-content">
                <a href="${menuPath}generalinfo.htm" target="_self">General Information</a>
                <a href="${menuPath}chassis.htm" target="_self">Chassis</a>
                <a href="${menuPath}Powertrain.htm" target="_self">Powertrain</a>
                <a href="${menuPath}electrical.htm" target="_self">Electrical</a>
                <a href="${menuPath}bodyandpaint.htm" target="_self">Body & Paint</a>
                <a href="${menuPath}otherdocs.htm">Other Documents</a>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', menuStructure);
}

// Declare variables in global scope
let hamburgerButton;
let menuOverlay;

// Toggle menu function
function toggleMenu() {
    menuOverlay.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
}

// Initialize menu and setup event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createMenuHTML();
    
    // Get DOM elements after they're created
    hamburgerButton = document.querySelector('.hamburger-button');
    menuOverlay = document.querySelector('.menu-overlay');

    // Toggle menu when hamburger is clicked
    hamburgerButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (menuOverlay.classList.contains('active') && 
            !menuOverlay.contains(e.target) && 
            !hamburgerButton.contains(e.target)) {
            toggleMenu();
        }
    });

    // Prevent clicks inside menu from closing it
    menuOverlay.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
