import * as THREE from 'three';

/**
 * LandmarkManager — Fixed distant landmarks visible from afar (Phase 31)
 * Large static structures that give the player orientation and a sense of scale.
 * Pure MeshBasicMaterial — no lighting dependency, no .emissive.
 */

// Landmark definitions: position, type, parameters
const LANDMARKS = [
  {
    id: 'ancient-tower',
    name: 'The Ashen Spire',
    position: [280, 0, 320],
    type: 'tower',
    height: 70,
    radius: 5,
    color: 0x6a6a6a,       // Gray stone
    roofColor: 0x3a3a45,   // Dark slate
  },
  {
    id: 'great-peak',
    name: 'Frosthollow Peak',
    position: [-250, 0, -380],
    type: 'mountain',
    height: 55,
    radius: 30,
    color: 0x5a5a52,       // Gray rock
    snowColor: 0xcccccc,   // Snow cap
  },
  {
    id: 'ruined-arch',
    name: 'The Shattered Gate',
    position: [-320, 0, 200],
    type: 'arch',
    height: 45,
    radius: 8,
    color: 0x7a6a55,       // Sandstone brown
    pillarColor: 0x5a4a3a, // Dark brown pillars
  },
];

export class LandmarkManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    this.landmarks = [];
    
    this._buildLandmarks();
  }
  
  _buildLandmarks() {
    for (const def of LANDMARKS) {
      let group;
      switch (def.type) {
        case 'tower': group = this._buildTower(def); break;
        case 'mountain': group = this._buildMountain(def); break;
        case 'arch': group = this._buildArch(def); break;
        default: continue;
      }
      
      // Place on terrain
      const terrainY = this.terrain
        ? this.terrain.getTerrainHeight(def.position[0], def.position[2])
        : 0;
      group.position.set(def.position[0], terrainY, def.position[2]);
      
      this.scene.add(group);
      this.landmarks.push({ def, group });
    }
    
    console.log(`[LandmarkManager] Created ${this.landmarks.length} distant landmarks`);
  }
  
  _buildTower(def) {
    const group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: def.color });
    const roofMat = new THREE.MeshBasicMaterial({ color: def.roofColor });
    
    // Main tower shaft
    const shaftGeo = new THREE.CylinderGeometry(def.radius, def.radius * 1.2, def.height, 8);
    const shaft = new THREE.Mesh(shaftGeo, mat);
    shaft.position.y = def.height / 2;
    group.add(shaft);
    
    // Crenellated top ring
    const topGeo = new THREE.CylinderGeometry(def.radius * 1.4, def.radius * 1.3, 3, 8);
    const top = new THREE.Mesh(topGeo, mat);
    top.position.y = def.height + 1.5;
    group.add(top);
    
    // Conical roof
    const roofGeo = new THREE.ConeGeometry(def.radius * 1.6, 12, 8);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = def.height + 9;
    group.add(roof);
    
    // Window slits (dark rectangles)
    const windowMat = new THREE.MeshBasicMaterial({ color: 0x1a1a1a });
    const windowGeo = new THREE.PlaneGeometry(1.2, 3);
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const win = new THREE.Mesh(windowGeo, windowMat);
      win.position.set(
        Math.sin(angle) * (def.radius + 0.1),
        def.height * 0.7,
        Math.cos(angle) * (def.radius + 0.1)
      );
      win.rotation.y = angle;
      group.add(win);
    }
    
    // Base - wider foundation
    const baseGeo = new THREE.CylinderGeometry(def.radius * 1.6, def.radius * 2, 4, 8);
    const base = new THREE.Mesh(baseGeo, mat);
    base.position.y = 2;
    group.add(base);
    
    return group;
  }
  
  _buildMountain(def) {
    const group = new THREE.Group();
    const rockMat = new THREE.MeshBasicMaterial({ color: def.color });
    const snowMat = new THREE.MeshBasicMaterial({ color: def.snowColor });
    
    // Main peak (large icosahedron, stretched vertically)
    const peakGeo = new THREE.IcosahedronGeometry(def.radius, 1);
    const peak = new THREE.Mesh(peakGeo, rockMat);
    peak.scale.set(1, def.height / def.radius, 1);
    peak.position.y = def.height * 0.4;
    group.add(peak);
    
    // Snow cap (smaller cone on top)
    const snowGeo = new THREE.ConeGeometry(def.radius * 0.5, def.height * 0.35, 7);
    const snow = new THREE.Mesh(snowGeo, snowMat);
    snow.position.y = def.height * 0.85;
    group.add(snow);
    
    // Foothills (2-3 smaller lumps around base)
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 + 0.5;
      const hillRadius = def.radius * (0.4 + Math.random() * 0.3);
      const hillHeight = def.height * (0.2 + Math.random() * 0.15);
      const hillGeo = new THREE.IcosahedronGeometry(hillRadius, 0);
      const hill = new THREE.Mesh(hillGeo, rockMat);
      hill.scale.set(1, hillHeight / hillRadius, 1);
      hill.position.set(
        Math.cos(angle) * def.radius * 0.8,
        hillHeight * 0.3,
        Math.sin(angle) * def.radius * 0.8
      );
      group.add(hill);
    }
    
    return group;
  }
  
  _buildArch(def) {
    const group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: def.color });
    const pillarMat = new THREE.MeshBasicMaterial({ color: def.pillarColor });
    
    // Left pillar
    const pillarGeo = new THREE.BoxGeometry(def.radius, def.height, def.radius * 0.8);
    const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
    leftPillar.position.set(-def.radius * 1.5, def.height / 2, 0);
    group.add(leftPillar);
    
    // Right pillar
    const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
    rightPillar.position.set(def.radius * 1.5, def.height / 2, 0);
    group.add(rightPillar);
    
    // Archway top (box spanning pillars, slightly broken)
    const archGeo = new THREE.BoxGeometry(def.radius * 4.5, 5, def.radius * 0.9);
    const arch = new THREE.Mesh(archGeo, mat);
    arch.position.set(0, def.height - 1, 0);
    arch.rotation.z = 0.03; // Slightly tilted (ruined)
    group.add(arch);
    
    // Broken chunk fallen on ground
    const debrisGeo = new THREE.BoxGeometry(def.radius * 1.5, 4, def.radius * 0.7);
    const debris = new THREE.Mesh(debrisGeo, mat);
    debris.position.set(def.radius * 0.5, 2, def.radius * 1.2);
    debris.rotation.set(0.4, 0.2, 0.6);
    group.add(debris);
    
    // Decorative line across top
    const lintelGeo = new THREE.BoxGeometry(def.radius * 4.8, 1.5, def.radius * 1.0);
    const lintel = new THREE.Mesh(lintelGeo, pillarMat);
    lintel.position.set(0, def.height + 2, 0);
    lintel.rotation.z = 0.02;
    group.add(lintel);
    
    return group;
  }
  
  dispose() {
    for (const { group } of this.landmarks) {
      this.scene.remove(group);
      group.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    this.landmarks = [];
  }
}
