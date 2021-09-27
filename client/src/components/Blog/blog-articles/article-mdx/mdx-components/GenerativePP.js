import React from "react";
import Sketch from "react-p5";

function GenerativePP() {
  const MAX_HEIGHT = 50;
  const MAX_WIDTH = 50;
  const DENSITY = 8;
  const GAP = MAX_HEIGHT / DENSITY;
  const STROKE_COLOR = "#00203F";
  const TONES_2 = [
    [5, 56, 107],
    [39, 142, 141],
    [158, 183, 167],
    [212, 224, 226],
    [248, 245, 242],
  ];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(MAX_HEIGHT, MAX_WIDTH);
    p5.stroke(STROKE_COLOR);
    p5.noLoop();
    canvasParentRef;
  };

  const draw = (p5) => {
    const drawTriangle = (pointA, pointB, pointC) => {
      let random_index = Math.floor(Math.random() * TONES_2.length);
      const [r, g, b] = TONES_2[random_index];
      p5.fill(r, g, b);
      p5.triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y);
    };
    const lines = [];
    let odd = false;
    for (let y = GAP / 2; y <= MAX_HEIGHT; y += GAP) {
      odd = !odd;
      const trait = [];
      const oddFactor = odd ? GAP / 2 : 0;
      for (let x = GAP / 4; x <= MAX_HEIGHT; x += GAP) {
        trait.push({
          x: x + (Math.random() * 0.8 - 0.4) * GAP + oddFactor,
          y: y + (Math.random() * 0.8 - 0.4) * GAP,
        });
      }
      lines.push(trait);
    }
    odd = true;
    for (let y = 0; y < lines.length - 1; y++) {
      odd = !odd;
      const dotLine = [];
      for (let i = 0; i < lines[y].length; i++) {
        dotLine.push(odd ? lines[y][i] : lines[y + 1][i]);
        dotLine.push(odd ? lines[y + 1][i] : lines[y][i]);
      }
      for (let i = 0; i < dotLine.length - 2; i++) {
        drawTriangle(dotLine[i], dotLine[i + 1], dotLine[i + 2]);
      }
    }
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}

export default GenerativePP;
