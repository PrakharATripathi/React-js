
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SketchPicker } from 'react-color';

const Lamp = () => {
  const mountRef = useRef(null);
  const [isLampOn, setIsLampOn] = useState(true);
  const [brightness, setBrightness] = useState(1);
  const [lampColor, setLampColor] = useState('#aaaaaa');

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500);
    mountRef.current.appendChild(renderer.domElement);

    // Lamp model
    const lampGeometry = new THREE.CylinderGeometry(1, 1, 4, 32);
    const lampMaterial = new THREE.MeshPhongMaterial({ color: lampColor });
    const lampMesh = new THREE.Mesh(lampGeometry, lampMaterial);
    scene.add(lampMesh);

    // Light
    const ambientLight = new THREE.AmbientLight(0x404040);
    const pointLight = new THREE.PointLight(0xffffff, brightness);
    pointLight.position.set(2, 3, 4);
    scene.add(ambientLight);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 8;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate lamp only if it's ON
      if (isLampOn) {
        lampMesh.rotation.x += 0.01;
        lampMesh.rotation.y += 0.01;
      }

      // Update light intensity and color
      pointLight.intensity = brightness;
      lampMaterial.color.set(lampColor);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [isLampOn, brightness, lampColor]);

  const toggleLamp = () => {
    setIsLampOn((prevIsLampOn) => !prevIsLampOn);
  };

  const handleBrightnessChange = (e) => {
    setBrightness(parseFloat(e.target.value));
  };

  const handleColorChange = (color) => {
    setLampColor(color.hex);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <div ref={mountRef}></div>
        </div>
        <div className="lg:w-1/2 p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={toggleLamp}>
            {isLampOn ? 'Turn OFF' : 'Turn ON'}
          </button>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brightnessSlider">
              Brightness:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="brightnessSlider"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={brightness}
              onChange={handleBrightnessChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
            <SketchPicker color={lampColor} onChange={handleColorChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lamp;
