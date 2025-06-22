2D Multiplayer Race Game
A simple 2D multiplayer racing game built with p5.js and WebSocket. Up to 4 players can compete to reach the finish line first using arrow keys to move.
Prerequisites

Node.js installed
A modern web browser

Installation

Clone the repository:git clone https://github.com/your-username/multiplayer-race-game.git
cd multiplayer-race-game


Install dependencies:npm install


Start the WebSocket server:npm start


Serve the client/index.html file using a local HTTP server (e.g., http-server):npx http-server


Open your browser and navigate to http://localhost:8080/client/index.html.

How to Play

Use the arrow keys to move your square.
Reach the red finish line on the right side of the screen to win.
Up to 4 players can join the game on the same network.

Notes

The server runs on ws://localhost:8080 by default.
Ensure the WebSocket server is running before opening index.html.
For hosting online, deploy the server to a platform like Render and update the WebSocket URL in index.html.

License
MIT
