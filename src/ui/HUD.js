export class HUD {
  constructor(gameManager) {
    this.gm = gameManager;
    this.healthBar = document.getElementById('health-bar');
    this.staminaBar = document.getElementById('stamina-bar');
    this.postureBar = document.getElementById('posture-bar');
    this.remnantLabel = document.getElementById('remnant');
  }

  update() {
    if (this.healthBar) {
      this.healthBar.style.width = `${(this.gm.health / this.gm.maxHealth) * 100}%`;
    }
    if (this.staminaBar) {
      this.staminaBar.style.width = `${(this.gm.stamina / this.gm.maxStamina) * 100}%`;
    }
    if (this.postureBar) {
      this.postureBar.style.width = `${(this.gm.posture / this.gm.maxPosture) * 100}%`;
    }
    if (this.remnantLabel) {
      this.remnantLabel.textContent = `Remnant: ${this.gm.remnant}`;
    }
  }
}
