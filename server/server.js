const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let players = {};
let playerCount = 0;

wss.on('connection', (ws) => {
  if (playerCount >= 4) {
    ws.close();
    return;
  }

  const id = playerCount++;
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
  const x = 50;
  const y = 50 + id * 100;
  players[id] = { x, y, color: colors[id] };

  ws.send(JSON.stringify({ type: 'init', id, x, y, color: colors[id] }));

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    if (data.type === 'move') {
      players[data.id].x = data.x;
      players[data.id].y = data.y;
      broadcast({ type: 'update', players });
    } else if (data.type === 'win') {
      broadcast({ type: 'win', id: data.id });
      players = {};
      playerCount = 0;
    }
  });

  ws.on('close', () => {
    delete players[id];
    broadcast({ type: 'update', players });
  });
});

function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

console.log('WebSocketサーバーがポート8080で起動しました');
