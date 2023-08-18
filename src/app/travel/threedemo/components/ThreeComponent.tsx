/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-08-18 13:23:11
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-18 13:42:46
 */
// components/ThreeComponent.js

"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const width = containerRef.current?.clientWidth;
    console.log("🚀 ~ file: ThreeComponent.tsx:21 ~ useEffect ~ width:", width)
    const height = containerRef.current?.clientHeight;
    console.log("🚀 ~ file: ThreeComponent.tsx:23 ~ useEffect ~ height:", height)
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    containerRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    
    // Here we'll listen for a generic 'resize' event to cater for any kind of changes
    // that may cause the parent container to resize (e.g., window resize, CSS changes, etc.)
    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default ThreeComponent;
