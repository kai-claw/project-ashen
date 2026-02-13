# Project Ashen — Game Design Document

> A souls-like action RPG where death isn't failure — it's research.

## Core Concept

You're an alchemist-knight experimenting on yourself. Every death teaches your body something new. Die to fire, learn fire resistance. Die to a boss, unlock their moveset.

**Tagline:** *You're not losing when you die. You're taking notes.*

---

## Core Pillars

### 1. Combat that punishes spam, rewards reads
- Stamina-based attacks, dodges, blocks
- Enemy tells are learnable but not trivial
- Posture/stagger system (Sekiro influence) — aggression has a place

### 2. Death = Progression mechanic
- Each death banks "Remnant" — essence of what killed you
- Spend Remnant to gain resistances, unlock counters to specific enemy types
- Intentional deaths to study enemies = extra Remnant

### 3. Build diversity through Alchemical Infusions
- No classes — you *become* your build through infusions
- Three tracks: Bone, Blood, Stone
- Depth 1-5 per track, max 10 total depth
- Tradeoffs everywhere (stone skin = more poise, less dodge i-frames)

### 4. Atmosphere > lore dumps
- Environmental storytelling, cryptic NPCs
- The world is a failed experiment. You're iteration #???

---

## Infusion System

### Three Tracks

| Track | Source | Effect | Tradeoff |
|-------|--------|--------|----------|
| **Bone** | Skeletal enemies, beasts | Weapons, claws, armor spurs | Humanity loss (NPC hostility) |
| **Blood** | Corrupted knights, vampiric | Lifesteal, caustic attacks, rage states | Health volatility |
| **Stone** | Golems, earth elementals | Poise, resistances, ground control | Mobility penalty |

### Depth Unlocks (Bone Track Example)

| Depth | Unlock | Effect |
|-------|--------|--------|
| 1 | Bone Blade | Arm transforms into sword, scales with kills |
| 2 | Marrow Armor | Ribs externalize, +poise when low health |
| 3 | Predator Sense | See enemy health, detect ambushes |
| 4 | Harvest | Kills restore health, increase Remnant drop |
| 5 | Apex Form | Full transformation, unique moveset, NPCs flee |

### Example Builds

- **Glass Cannon:** Blood 5, Bone 3, Stone 0 — Massive damage, lifesteal, but paper thin
- **Juggernaut:** Stone 5, Bone 2, Blood 0 — Trades a tank, slow but unkillable
- **Balanced Hunter:** Bone 3, Blood 3, Stone 2 — Jack of all trades

---

## Combat System

### Weapon Classes (6 total)

| Class | Speed | Range | Stamina | Signature |
|-------|-------|-------|---------|-----------|
| **Straight Sword** | Fast | Medium | Low | Reliable, combo-friendly |
| **Greathammer** | Slow | Medium | High | Stagger king, charged attacks |
| **Spear** | Medium | Long | Medium | Poke, kite, safe spacing |
| **Twin Daggers** | Very Fast | Short | Very Low | Bleed buildup, dodge-cancels |
| **Greatshield** | Slow | Short | High | Block-counter focused, bash attacks |
| **Bone Weapons** | Varies | Varies | Scales | Living weapons, evolve with infusion |

### Stamina Economy

- **Max stamina:** 100 base, modified by equipment weight
- **Regen:** 20/sec, halted for 0.5s after any action
- **Costs:**
  - Light attack: 15
  - Heavy attack: 30
  - Dodge: 20
  - Block (per hit): 10-40 based on attack weight

### Posture System

Enemies have a **Posture Bar** alongside health.
- Aggressive attacks fill their posture
- If posture breaks → **Critical Strike** opportunity
- Posture recovers when they're not being pressured

---

## Technical Specs

- **Engine:** Godot 4.x
- **Target platforms:** PC (Windows, Linux, Mac)
- **Art style:** Stylized dark fantasy (low-poly with strong lighting)
- **Camera:** Third-person, lock-on system

---

## MVP Scope (4-6 weeks)

### Phase 1: Foundation (Week 1-2)
- [ ] Player controller with stamina
- [ ] Basic attack combo (3-hit)
- [ ] Dodge with i-frames
- [ ] Lock-on camera

### Phase 2: Combat (Week 2-3)
- [ ] Enemy AI state machine
- [ ] Hit detection and damage system
- [ ] Posture system
- [ ] Death and respawn

### Phase 3: Progression (Week 3-4)
- [ ] Remnant collection
- [ ] Crucible UI (infusion menu)
- [ ] Bone track implementation (depths 1-3)

### Phase 4: Content (Week 4-5)
- [ ] Cathedral level blockout
- [ ] 3 enemy variants
- [ ] Boss: The Failed Experiment

### Phase 5: Polish (Week 5-6)
- [ ] Lighting pass
- [ ] Sound design
- [ ] UI/UX polish

---

## Deferred (Post-MVP)

- Full 3 infusion tracks
- All 6 weapon types
- Multiplayer (invasions, co-op)
- Full world/level design
- Story/NPCs beyond minimal
