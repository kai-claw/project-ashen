import * as THREE from 'three';

/**
 * TextureFactory — Phase 36
 * Procedural canvas-generated textures for world surfaces.
 * Follows same CanvasTexture pattern used in DayNightLighting, TerrainGenerator, etc.
 */
export class TextureFactory {
  
  /**
   * Stone brick texture for castle walls.
   * Brick rows with mortar lines, per-brick color variation, noise grain.
   */
  static createStoneBrickTexture(width = 256, height = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Base fill (mortar color — visible in gaps)
    ctx.fillStyle = '#5A4A35';
    ctx.fillRect(0, 0, width, height);
    
    const brickW = 40;
    const brickH = 20;
    const mortar = 2;
    const baseR = 0x8B, baseG = 0x73, baseB = 0x55;
    
    let row = 0;
    for (let y = 0; y < height; y += brickH + mortar) {
      const offset = (row % 2 === 1) ? brickW / 2 : 0;
      for (let x = -brickW; x < width + brickW; x += brickW + mortar) {
        const bx = x + offset;
        // Per-brick color variation ±15
        const vr = baseR + Math.floor((Math.random() - 0.5) * 30);
        const vg = baseG + Math.floor((Math.random() - 0.5) * 30);
        const vb = baseB + Math.floor((Math.random() - 0.5) * 30);
        ctx.fillStyle = `rgb(${vr},${vg},${vb})`;
        ctx.fillRect(bx, y, brickW, brickH);
        
        // Subtle stone grain noise dots
        for (let d = 0; d < 12; d++) {
          const dx = bx + Math.random() * brickW;
          const dy = y + Math.random() * brickH;
          const nv = Math.floor(Math.random() * 20) - 10;
          ctx.fillStyle = `rgb(${vr + nv},${vg + nv},${vb + nv})`;
          ctx.fillRect(dx, dy, 1 + Math.random() * 2, 1 + Math.random() * 2);
        }
      }
      row++;
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }
  
  /**
   * Cobblestone texture for castle courtyard floor.
   * Irregular rounded rectangles packed on stone base.
   */
  static createCobblestoneTexture(width = 256, height = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Gap color
    ctx.fillStyle = '#6B5B4E';
    ctx.fillRect(0, 0, width, height);
    
    const baseR = 0x9B, baseG = 0x8B, baseB = 0x6E;
    const cobbleCount = 70;
    
    // Pack cobbles in a jittered grid
    const cols = 8, rows = 9;
    const cellW = width / cols, cellH = height / rows;
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c * cellW + cellW * 0.5 + (Math.random() - 0.5) * cellW * 0.3;
        const cy = r * cellH + cellH * 0.5 + (Math.random() - 0.5) * cellH * 0.3;
        const cw = cellW * (0.6 + Math.random() * 0.3);
        const ch = cellH * (0.6 + Math.random() * 0.3);
        
        // Per-cobble color variation ±20
        const vr = baseR + Math.floor((Math.random() - 0.5) * 40);
        const vg = baseG + Math.floor((Math.random() - 0.5) * 40);
        const vb = baseB + Math.floor((Math.random() - 0.5) * 40);
        
        ctx.fillStyle = `rgb(${vr},${vg},${vb})`;
        ctx.beginPath();
        // Rounded rect approximation via ellipse
        ctx.ellipse(cx, cy, cw / 2, ch / 2, Math.random() * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight edge (top-left lighter)
        ctx.strokeStyle = `rgba(255,255,255,0.08)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx - 1, cy - 1, cw / 2 - 1, ch / 2 - 1, Math.random() * 0.3, -0.5, 1.0);
        ctx.stroke();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    return texture;
  }
  
  /**
   * Wood plank texture for village building walls.
   * Vertical planks with grain lines and dark gaps.
   */
  static createWoodPlankTexture(width = 256, height = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Dark gap base
    ctx.fillStyle = '#4A3A0A';
    ctx.fillRect(0, 0, width, height);
    
    const gapWidth = 2;
    let x = 0;
    
    while (x < width) {
      const plankW = 35 + Math.floor(Math.random() * 16); // 35-50px
      // Base plank color with variation
      const baseR = 0x8B + Math.floor((Math.random() - 0.5) * 30);
      const baseG = 0x69 + Math.floor((Math.random() - 0.5) * 20);
      const baseB = 0x14 + Math.floor((Math.random() - 0.5) * 14);
      
      ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
      ctx.fillRect(x, 0, plankW, height);
      
      // Wood grain lines (horizontal, thin, dark)
      const grainSpacing = 3 + Math.random() * 3;
      for (let gy = 0; gy < height; gy += grainSpacing) {
        const darkness = Math.floor(Math.random() * 25);
        ctx.fillStyle = `rgba(${baseR - 20 - darkness},${baseG - 15 - darkness},${baseB - 5},0.6)`;
        // Slight curve to grain
        const curve = Math.sin(gy * 0.02 + x * 0.1) * 2;
        ctx.fillRect(x + curve, gy, plankW - Math.abs(curve), 1);
      }
      
      // Occasional knot
      if (Math.random() > 0.6) {
        const kx = x + plankW * 0.3 + Math.random() * plankW * 0.4;
        const ky = Math.random() * height;
        ctx.fillStyle = `rgb(${baseR - 30},${baseG - 20},${baseB})`;
        ctx.beginPath();
        ctx.ellipse(kx, ky, 4 + Math.random() * 3, 3 + Math.random() * 2, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      
      x += plankW + gapWidth;
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }
  
  /**
   * Ground noise texture overlay for terrain detail.
   * Subtle per-pixel noise that multiplies with vertex colors.
   */
  static createGroundNoiseTexture(width = 256, height = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Neutral mid-tone base — when multiplied with vertex colors, values near 0.5
    // won't shift colors much. We use a bright base since MeshBasicMaterial map
    // multiplies color channels: rgb(200,200,200) ≈ 0.78 factor.
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Base ~200 with ±25 noise → range 175-225 → factor 0.69-0.88
      const noise = Math.floor((Math.random() - 0.5) * 50);
      data[i]     = 200 + noise;                          // R
      data[i + 1] = 200 + Math.floor(noise * 0.8);       // G (slightly less variation)
      data[i + 2] = 200 + Math.floor(noise * 0.6);       // B (least variation → warm bias)
      data[i + 3] = 255;                                  // A
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);
    return texture;
  }
}
