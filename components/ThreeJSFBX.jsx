
"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const ThreeJSFBX = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x3f3f3f); // Cambiar color de fondo a #3f3f3f
    sceneRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true;
    controls.enablePan = false;
    controls.update();

    camera.position.z = 1000; // Cambiar la posición Z

    const loader = new FBXLoader();
    loader.load(
      'casa.fbx',
      function (object) {
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        console.error('Error loading FBX:', error);
      }
    );

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderScene();
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderScene();
    };

    window.addEventListener('resize', handleResize);

    renderScene();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeJSFBX;