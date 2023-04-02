// Include the Matter.js library at the beginning of your app.js file
import { Engine, Render, World, Bodies, Body, Mouse, MouseConstraint } from 'https://cdn.skypack.dev/matter-js';

document.addEventListener('DOMContentLoaded', () => {
  const { WebApp } = window.Telegram;

  // Web App is ready to be displayed
  WebApp.ready();

  // Create game engine and canvas renderer
  const engine = Engine.create();
  const canvas = document.getElementById('gameCanvas');
  const context = canvas.getContext('2d');
  const render = {
    canvas,
    context,
    engine,
  };

  // Create game objects
  const ground = Bodies.rectangle(400, 590, 810, 20, { isStatic: true });
  const bird = Bodies.circle(150, 300, 20);
  const block1 = Bodies.rectangle(600, 550, 50, 50);
  const block2 = Bodies.rectangle(650, 550, 50, 50);
  const block3 = Bodies.rectangle(625, 500, 100, 20);

  // Add objects to the world
  World.add(engine.world, [ground, bird, block1, block2, block3]);

  // Mouse control
  const mouse = Mouse.create(canvas);
  const mouseConstraint = MouseConstraint.create(engine, { mouse });
  World.add(engine.world, mouseConstraint);

  // Game loop
  const gameLoop = () => {
    Engine.update(engine, 1000 / 60);
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw game objects
    drawRectangle(ground, context);
    drawCircle(bird, context);
    drawRectangle(block1, context);
    drawRectangle(block2, context);
    drawRectangle(block3, context);

    requestAnimationFrame(gameLoop);
  };

  gameLoop();

  function drawRectangle(body, ctx) {
    const { position, angle, vertices } = body;
    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(vertices[0].x - position.x, vertices[0].y - position.y);
    for (let i = 1; i < vertices.length; i++) {
      ctx.lineTo(vertices[i].x - position.x, vertices[i].y - position.y);
    }
    ctx.closePath();
    ctx.fillStyle = '#888';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.restore();
  }

  function drawCircle(body, ctx) {
    const { position, angle, circleRadius } = body;
    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f00';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.restore();
  }
});
