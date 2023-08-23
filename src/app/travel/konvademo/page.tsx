"use client"
import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import {Bezier} from 'bezier-js';
import { HslColor, HsvColor, RgbColor } from 'colord/types';

function InfinityAnimation() {
  const pixiContainer = useRef<any>(null);

  useEffect(() => {
    if (pixiContainer.current) {
      const app = new PIXI.Application({ width: 1600, height: 800, backgroundColor: 0xeeeeee });

      pixiContainer.current.appendChild(app.view);

      // Adjust the view center
      app.stage.position.set(app.view.width / 2, app.view.height / 2);

      // Adjusted the bezier curves for the infinity symbol to intersect at the origin
      const leftLoop = new Bezier(-100, 0, -200, -150, -200, 150, -100, 0);
      const rightLoop = new Bezier(100, 0, 200, -150, 200, 150, 100, 0);

      // Drawing the bezier curve paths for visualization
      const drawBezierPath = (bezier: Bezier, color: any) => {
        const path = new PIXI.Graphics();
        path.lineStyle(4, color);
        path.moveTo(bezier.points[0].x, bezier.points[0].y);

        for (let t = 0; t <= 1; t += 0.01) {
          const position = bezier.get(t);
          path.lineTo(position.x, position.y);
        }

        app.stage.addChild(path);
      }

      drawBezierPath(leftLoop, 0x0000ff); // Blue color for left loop
      drawBezierPath(rightLoop, 0x00ff00); // Green color for right loop

      // Drawing circles at specified coordinates
      const drawPartialCircle = (x: number, y: number, radius: number, startAngle: number, endAngle: number, color: any) => {
        const circle = new PIXI.Graphics();
        circle.lineStyle(4, color);
        circle.arc(x, y, radius, startAngle, endAngle);
        app.stage.addChild(circle);
      }

      drawPartialCircle(-500, 0, 400, Math.acos(-180/400), Math.acos(180/400), 0xff00ff); // Left circle
      drawPartialCircle(500, 0, 400, Math.PI + Math.acos(-180/400), Math.PI + Math.acos(180/400), 0xffff00); // Right circle

      const block = new PIXI.Graphics();
      block.beginFill(0xff0000);
      block.drawRect(0, 0, 50, 50);
      block.endFill();
      app.stage.addChild(block);

      // Animation logic
      let progress = 0;
      let currentLoop = leftLoop;  // Start with the left loop

      app.ticker.add(() => {
        progress += 0.005;
        if (progress > 1) {
          progress = 0;
          currentLoop = (currentLoop === leftLoop) ? rightLoop : leftLoop;  // Switch loops
        }

        const position = currentLoop.get(progress);
        block.position.set(position.x, position.y);
      });

      return () => app.destroy();
    }
  }, []);

  return <div ref={pixiContainer} style={{ width: '1600px', height: '800px' }} />;
}

export default InfinityAnimation;