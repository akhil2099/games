<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snake and Ladder</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    canvas {
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <h1>Snake and Ladder Game</h1>
  <canvas id="board" width="500" height="500"></canvas>
  <script>
    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");

    const gridSize = 10;
    const cellSize = 50;

    // Draw the grid
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? '#f0f0f0' : '#c0c0c0';
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
        ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }

    // Add Snakes and Ladders
    const snakes = { 16: 6, 47: 26, 49: 11 };
    const ladders = { 2: 38, 7: 14, 8: 31 };

    function drawSnakesAndLadders() {
      Object.keys(snakes).forEach(start => {
        const startX = (start - 1) % gridSize;
        const startY = Math.floor((start - 1) / gridSize);
        const endX = (snakes[start] - 1) % gridSize;
        const endY = Math.floor((snakes[start] - 1) / gridSize);
        ctx.beginPath();
        ctx.moveTo(startX * cellSize + cellSize / 2, startY * cellSize + cellSize / 2);
        ctx.lineTo(endX * cellSize + cellSize / 2, endY * cellSize + cellSize / 2);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.stroke();
      });

      Object.keys(ladders).forEach(start => {
        const startX = (start - 1) % gridSize;
        const startY = Math.floor((start - 1) / gridSize);
        const endX = (ladders[start] - 1) % gridSize;
        const endY = Math.floor((ladders[start] - 1) / gridSize);
        ctx.beginPath();
        ctx.moveTo(startX * cellSize + cellSize / 2, startY * cellSize + cellSize / 2);
        ctx.lineTo(endX * cellSize + cellSize / 2, endY * cellSize + cellSize / 2);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 5;
        ctx.stroke();
      });
    }

    drawSnakesAndLadders();
  </script>
</body>
</html>
