"use client";
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeJSFBX = () => {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 10000);
    camera.position.z = 1000;
    camera.near = 1;
    camera.far = 10000;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x3f3f3f);
    sceneRef.current.appendChild(renderer.domElement);

    const loader = new FBXLoader();
    loader.load(
      'casa.fbx',
      (fbx) => {
        fbx.position.x = -550;
        fbx.position.y = -250;
        scene.add(fbx);
      },
      (progress) => {
        console.log('Loading model...', (progress.loaded / progress.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

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
      <div className='py-[50px]'>
        <div
          ref={containerRef}
          className='scene mx-auto'
        >
          <div ref={sceneRef} />
        </div>
      </div>
    </section>
  );
};

export default ThreeJSFBX;
