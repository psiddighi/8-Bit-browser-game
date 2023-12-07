// Initialize game state
let player = { x: 0, y: 0, dx: 0, dy: 0, onGround: false };
let map = generateMap(); // Function to generate the game map
let enemies = generateEnemies(); // Function to generate enemies
let items = generateItems(); // Function to generate items

// Draw the initial game state
drawGameState();

// Game loop
function gameLoop() {
    // Handle player input
    window.addEventListener('keydown', function(e) {
        handlePlayerInput(e); // Function to handle player input
    });

    // Update game state
    updateGameState();

    // Redraw the game state
    drawGameState();

    // Repeat
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();