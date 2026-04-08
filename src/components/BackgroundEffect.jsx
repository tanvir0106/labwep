import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // PARAMETERS
    const gridX = 100;
    const gridZ = 100;
    const separation = 1.3;
    const count = gridX * gridZ;

    // PARTICLES GEOMETRY
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    let i = 0;
    for (let ix = 0; ix < gridX; ix++) {
        for (let iz = 0; iz < gridZ; iz++) {
            // Center the grid:
            const x = ix * separation - (gridX * separation) / 2;
            const z = iz * separation - (gridZ * separation) / 2;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = 0; // Y will be animated in render loop
            positions[i * 3 + 2] = z;

            // Initial generic color
            colors[i * 3] = 0.2; 
            colors[i * 3 + 1] = 0.5; 
            colors[i * 3 + 2] = 1.0; 

            scales[i] = 1;
            i++;
        }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // CUSTOM SHADER MATERIAL FOR HIGH PERFORMANCE & DYNAMIC STYLING
    const material = new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(0xffffff) },
        },
        vertexShader: `
            attribute float scale;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = scale * (32.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                // Create a circular glowing soft particle
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;
                gl_FragColor = vec4(vColor, 0.8 * (0.5 - dist) * 2.0);
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, material);
    scene.add(particles);

    // MOUSE TRACKING FOR PARALLAX
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ANIMATION VARIABLES
    let countTime = 0;

    // ANIMATE RENDER LOOP
    const animate = () => {
        requestAnimationFrame(animate);

        countTime += 0.04; // Speed of the wave

        // Parallax effect on camera
        targetX = mouseX * 0.02;
        targetY = mouseY * 0.02;
        
        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (-targetY + 16 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        // Math manipulation for wavy grid positions and colors
        const positionsArr = particlesGeometry.attributes.position.array;
        const scalesArr = particlesGeometry.attributes.scale.array;
        const colorsArr = particlesGeometry.attributes.color.array;
        
        let j = 0;
        let c = 0;
        
        for (let ix = 0; ix < gridX; ix++) {
            for (let iz = 0; iz < gridZ; iz++) {
                
                // Wave math utilizing sine and cosine
                const wave1 = Math.sin((ix + countTime) * 0.3) * 1.5;
                const wave2 = Math.cos((iz + countTime) * 0.3) * 1.5;
                const height = wave1 + wave2;

                positionsArr[j + 1] = height; // Set Y value
                
                // Particles at the peaks are larger
                scalesArr[c] = (height + 3) * 1.2;

                // Color gradients based on height
                // Lows are deep blue/purple, peaks shift towards bright cyan
                colorsArr[j] = 0.3 + (height * 0.15);     // Red
                colorsArr[j + 1] = 0.4 + (height * 0.25); // Green
                colorsArr[j + 2] = 0.9 + (height * 0.1);  // Blue stays rich

                j += 3;
                c++;
            }
        }
        
        particlesGeometry.attributes.position.needsUpdate = true;
        particlesGeometry.attributes.scale.needsUpdate = true;
        particlesGeometry.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
    };

    animate();

    // HANDLER FOR RESIZING
    const handleResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (containerRef.current && renderer.domElement) {
            containerRef.current.removeChild(renderer.domElement);
        }
        particlesGeometry.dispose();
        material.dispose();
        renderer.dispose();
    };
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"
    />
  );
};

export default BackgroundEffect;
