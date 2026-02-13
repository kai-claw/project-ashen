import * as THREE from 'three';

export class World {
  constructor(scene) {
    this.scene = scene;
    this._createFloor();
    this._createLighting();
    this._createEnvironment();
  }

  _createFloor() {
    // Main floor
    const floorGeo = new THREE.PlaneGeometry(60, 60, 30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a20,
      roughness: 0.9,
      metalness: 0.1,
    });

    // Add some vertex displacement for rough terrain feel
    const pos = floorGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getY(i); // PlaneGeometry Y is world Z before rotation
      pos.setZ(i, (Math.sin(x * 0.5) * Math.cos(z * 0.5) * 0.15));
    }
    floorGeo.computeVertexNormals();

    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Grid overlay for spatial reference
    const gridHelper = new THREE.GridHelper(60, 30, 0x222233, 0x151520);
    gridHelper.position.y = 0.01;
    this.scene.add(gridHelper);
  }

  _createLighting() {
    // Ambient - very dim, moody
    const ambient = new THREE.AmbientLight(0x1a1a2e, 0.4);
    this.scene.add(ambient);

    // Main directional - moonlight feel
    const dirLight = new THREE.DirectionalLight(0x8888bb, 0.6);
    dirLight.position.set(-10, 15, -10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    this.scene.add(dirLight);

    // Accent point lights - scattered around for atmosphere
    const lights = [
      { pos: [5, 3, -8], color: 0xff4422, intensity: 1.5 },
      { pos: [-8, 2, -15], color: 0x2244ff, intensity: 1.0 },
      { pos: [0, 4, -20], color: 0x44ff44, intensity: 0.5 },
    ];

    lights.forEach(({ pos, color, intensity }) => {
      const light = new THREE.PointLight(color, intensity, 15);
      light.position.set(...pos);
      this.scene.add(light);

      // Visible emitter
      const emitterGeo = new THREE.SphereGeometry(0.1, 8, 8);
      const emitterMat = new THREE.MeshBasicMaterial({ color });
      const emitter = new THREE.Mesh(emitterGeo, emitterMat);
      emitter.position.copy(light.position);
      this.scene.add(emitter);
    });
  }

  _createEnvironment() {
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a30,
      roughness: 0.85,
      metalness: 0.1,
    });

    // Pillars - cathedral ruins
    const pillarPositions = [
      [-8, -8], [8, -8], [-8, -20], [8, -20],
      [-4, -14], [4, -14],
    ];

    pillarPositions.forEach(([x, z]) => {
      const pillarGeo = new THREE.CylinderGeometry(0.5, 0.6, 5 + Math.random() * 2, 8);
      const pillar = new THREE.Mesh(pillarGeo, stoneMat);
      pillar.position.set(x, 2.5, z);
      pillar.castShadow = true;
      pillar.receiveShadow = true;
      this.scene.add(pillar);
    });

    // Walls / ruins
    const wallConfigs = [
      { pos: [-12, 2, -14], size: [1, 4, 20] },
      { pos: [12, 2, -14], size: [1, 4, 20] },
      { pos: [0, 2, -25], size: [24, 4, 1] },
    ];

    wallConfigs.forEach(({ pos, size }) => {
      const wallGeo = new THREE.BoxGeometry(...size);
      const wall = new THREE.Mesh(wallGeo, stoneMat);
      wall.position.set(...pos);
      wall.castShadow = true;
      wall.receiveShadow = true;
      this.scene.add(wall);
    });

    // Scattered debris
    for (let i = 0; i < 20; i++) {
      const size = 0.2 + Math.random() * 0.5;
      const debrisGeo = new THREE.BoxGeometry(size, size * 0.5, size);
      const debris = new THREE.Mesh(debrisGeo, stoneMat);
      debris.position.set(
        (Math.random() - 0.5) * 20,
        size * 0.25,
        -Math.random() * 20
      );
      debris.rotation.y = Math.random() * Math.PI;
      debris.castShadow = true;
      this.scene.add(debris);
    }

    // Checkpoint bonfire
    this._createBonfire(new THREE.Vector3(0, 0, 5));
  }

  _createBonfire(position) {
    const group = new THREE.Group();
    group.position.copy(position);

    // Stone base
    const baseGeo = new THREE.CylinderGeometry(0.4, 0.5, 0.3, 8);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.15;
    group.add(base);

    // Fire light
    const fireLight = new THREE.PointLight(0xff6622, 2, 8);
    fireLight.position.y = 0.8;
    group.add(fireLight);

    // Animated fire particles (simple)
    const particleCount = 30;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 1] = Math.random() * 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;

      const t = Math.random();
      colors[i * 3] = 1;
      colors[i * 3 + 1] = 0.3 + t * 0.4;
      colors[i * 3 + 2] = t * 0.1;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Animate fire
    const animate = () => {
      requestAnimationFrame(animate);
      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let y = posAttr.getY(i) + 0.02;
        if (y > 1.5) {
          y = 0;
          posAttr.setX(i, (Math.random() - 0.5) * 0.3);
          posAttr.setZ(i, (Math.random() - 0.5) * 0.3);
        }
        posAttr.setY(i, y);
        posAttr.setX(i, posAttr.getX(i) + (Math.random() - 0.5) * 0.005);
      }
      posAttr.needsUpdate = true;

      // Flicker light
      fireLight.intensity = 1.5 + Math.sin(Date.now() * 0.01) * 0.5 + Math.random() * 0.3;
    };
    animate();

    this.scene.add(group);
  }
}
