import * as THREE from 'three';

export class CameraController {
  constructor(camera, target, inputManager) {
    this.camera = camera;
    this.target = target;
    this.input = inputManager;

    this.distance = 6;
    this.minDistance = 3;
    this.maxDistance = 12;
    this.height = 2.5;
    this.sensitivity = 0.002;

    this.yaw = 0;
    this.pitch = 0.3;
    this.minPitch = -0.5;
    this.maxPitch = 1.2;

    this.smoothing = 8;
    this.currentPos = new THREE.Vector3();
    this.lockOnTarget = null;
  }

  update(delta) {
    // Mouse look
    const mouseDelta = this.input.getMouseDelta();
    this.yaw -= mouseDelta.x * this.sensitivity;
    this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch + mouseDelta.y * this.sensitivity));

    // Calculate desired position
    const targetPos = this.target.position.clone();
    targetPos.y += this.height;

    let offsetX, offsetY, offsetZ;

    if (this.lockOnTarget) {
      // Lock-on camera: keep enemy in view
      const toEnemy = new THREE.Vector3().subVectors(this.lockOnTarget.position, targetPos);
      toEnemy.y = 0;
      const angle = Math.atan2(toEnemy.x, toEnemy.z);
      offsetX = Math.sin(angle + Math.PI) * this.distance;
      offsetZ = Math.cos(angle + Math.PI) * this.distance;
      offsetY = this.distance * Math.sin(this.pitch);
    } else {
      offsetX = Math.sin(this.yaw) * this.distance * Math.cos(this.pitch);
      offsetZ = Math.cos(this.yaw) * this.distance * Math.cos(this.pitch);
      offsetY = this.distance * Math.sin(this.pitch);
    }

    const desiredPos = new THREE.Vector3(
      targetPos.x + offsetX,
      targetPos.y + offsetY,
      targetPos.z + offsetZ
    );

    // Smooth follow
    this.currentPos.lerp(desiredPos, this.smoothing * delta);
    this.camera.position.copy(this.currentPos);

    // Look at target
    const lookTarget = targetPos.clone();
    if (this.lockOnTarget) {
      lookTarget.lerpVectors(targetPos, this.lockOnTarget.position, 0.3);
      lookTarget.y += 1;
    }
    this.camera.lookAt(lookTarget);
  }

  setLockOnTarget(target) {
    this.lockOnTarget = target;
  }

  getForwardDirection() {
    return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).normalize();
  }

  getRightDirection() {
    return new THREE.Vector3(-Math.cos(this.yaw), 0, Math.sin(this.yaw)).normalize();
  }
}
