import { Engine, Render, World, Bodies, Mouse, MouseConstraint } from 'https://cdn.skypack.dev/matter-js';

document.addEventListener('DOMContentLoaded', () => {
  const { WebApp } = window.Telegram;

  // Web App is ready to be displayed
  WebApp.ready();

  // Create game engine and canvas renderer
  const engine = Engine.create();
  const canvas = document.getElementById('gameCanvas');
  const render = Render.create({
    canvas,
    engine,
    options: {
      width: canvas.width,
      height: canvas.height,
      wireframes: false,
      background: '#f0f0f0',
    },
  });

  // Create game objects
  const ground = Bodies.rectangle(400, 590, 810, 20, { isStatic: true, render: { fillStyle: '#888' } });
  const bird = Bodies.circle(150, 300, 20, { render: { fillStyle: '#f00' } });
  const block1 = Bodies.rectangle(600, 550, 50, 50, { render: { fillStyle: '#888' } });
  const block2 = Bodies.rectangle(650, 550, 50, 50, { render: { fillStyle: '#888' } });
  const block3 = Bodies.rectangle(625, 500, 100, 20, { render: { fillStyle: '#888' } });

  // Add objects to the world
  World.add(engine.world, [ground, bird, block1, block2, block3]);

  // Mouse control
  const mouse = Mouse.create(canvas);
  const mouseConstraint = MouseConstraint.create(engine, { mouse });
  World.add(engine.world, mouseConstraint);

  // Game loop
  const gameLoop = () => {
    Engine.update(engine, 1000 / 60);
    Render.world(render);
    requestAnimationFrame(gameLoop);
  };

  gameLoop();
});
