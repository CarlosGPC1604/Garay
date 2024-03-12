"use client";
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeJSFBX = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 1000; // Aumenta el valor z para alejar la cámara
    camera.near = 1; // Ajuste de distancia mínima de visión
    camera.far = 10000; // Ajuste de distancia máxima de visión
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x3f3f3f); // Cambia el color de fondo
    sceneRef.current.appendChild(renderer.domElement);

    const loader = new FBXLoader();
    loader.load(
      'casa.fbx',
      (fbx) => {
        scene.add(fbx);
      },
      (progress) => {
        console.log('Loading model...', (progress.loaded / progress.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Agregamos los controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Movimiento suave de la cámara
    controls.dampingFactor = 0.25; // Factor de amortiguación
    controls.enableZoom = true; // Habilitar zoom

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualiza los controles en cada cuadro de animación
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section>
      <div className='container mx-auto overflow-hidden'>
        <div
          ref={sceneRef}
        />
      </div>
    </section>
  );
};

export default ThreeJSFBX;
