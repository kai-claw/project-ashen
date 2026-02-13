# The Crypt — Level Design Document

> *Beneath the fallen cathedral lies something older. Something that remembers.*

## Overview

The Crypt is a sprawling underground area accessed from the cathedral main hall. It features tight corridors, burial alcoves, and larger ritual chambers — a stark contrast to the open cathedral above. Designed for tense exploration with ambush opportunities and rewarding secrets.

**Atmosphere:** Oppressive darkness with distant echoes. Faint blue-green bioluminescence from fungal growth on ancient bones. Dripping water. Cold.

---

## ASCII Layout (Top-Down View)

```
                    CATHEDRAL FLOOR (ABOVE)
                           |
                    [STAIR ENTRANCE]
                           |
    ╔══════════════════════╧══════════════════════╗
    ║                                              ║
    ║              ENTRY ANTECHAMBER               ║
    ║         (Y: -3, circular, radius 6)          ║
    ║              ☠ ENEMY SPOT #1 ☠              ║
    ║                                              ║
    ╠════════╦═══════════╩═══════════╦════════════╣
    ║        ║                       ║            ║
    ║ ALCOVE ║    WEST CORRIDOR      ║   ALCOVE   ║
    ║ [tomb] ║ ←───────────────────→ ║   [tomb]   ║
    ║        ║                       ║            ║
    ╠════════╩═══════════╦═══════════╩════════════╣
    ║                    ║                        ║
    ║  OSSUARY CHAMBER   ║   COLLAPSED PASSAGE    ║
    ║  (bone pillars)    ║   (blocked, future?)   ║
    ║ ☠ ENEMY SPOT #2 ☠ ║                        ║
    ║                    ║                        ║
    ╠════════════════════╩════════════════════════╣
    ║                                              ║
    ║              RITUAL CHAMBER                  ║
    ║     (large octagonal, ritual circle)         ║
    ║                                              ║
    ║           ☠ ENEMY SPOT #3 ☠                 ║
    ║                (ELITE)                       ║
    ║                                              ║
    ╠══════╦══════════════════════════════╦═══════╣
    ║      ║                              ║       ║
    ║ TOMB ║      SOUTH CORRIDOR          ║  ▓▓▓  ║
    ║ ROW  ║ ←──────────────────────────→ ║SECRET!║
    ║      ║                              ║  ▓▓▓  ║
    ║      ║                              ║       ║
    ╠══════╩══════════════════════════════╩═══════╣
    ║                                              ║
    ║              SHORTCUT CHAMBER                ║
    ║         (ladder up to cathedral)             ║
    ║                                              ║
    ║    [LOCKED DOOR — opens from this side]      ║
    ║           ↑                                  ║
    ║     LADDER TO CATHEDRAL                      ║
    ║    (behind altar in left chapel)             ║
    ║                                              ║
    ╚══════════════════════════════════════════════╝
```

---

## Rooms & Areas

### 1. ENTRY ANTECHAMBER
**Position:** Directly below cathedral main hall (approx x:0, y:-3, z:-25)
**Size:** Circular, radius 6 units
**Description:** A domed chamber where the stairs descend. Cracked stone floor with faded ritual markings. Four broken statues in alcoves (two have crumbled away). Central brazier (unlit, can be lit for checkpoint?).

**Features:**
- Spiral staircase from cathedral (3m wide, 8m descent)
- Crumbling masonry, roots breaking through ceiling
- Faint bioluminescent moss on north wall

---

### 2. WEST CORRIDOR
**Position:** Extends from antechamber westward
**Size:** 4 units wide, 16 units long
**Description:** Narrow processional corridor with burial alcoves every 4 units on both sides. Stone sarcophagi visible in alcoves — some broken open, some sealed.

**Features:**
- 4 alcoves per side (8 total)
- 2 sarcophagi are open and empty (enemies spawned from them?)
- 1 sarcophagus contains a consumable (Bone Ash)
- Dripping water sounds, occasional puddles

---

### 3. OSSUARY CHAMBER
**Position:** West of corridor terminus
**Size:** 12x12 units
**Description:** A chamber where bones have been stacked into macabre pillars. Skulls arranged in geometric patterns on the walls. Central pit (empty, but visually deep). 

**Features:**
- 4 bone pillars (can be destroyed? spawns bone fragments)
- Skull-lined walls (decorative geometry)
- Ambient blue glow from fungal growth
- Low ceiling (3m) — claustrophobic

---

### 4. RITUAL CHAMBER
**Position:** Center-south of crypt
**Size:** Octagonal, 16 units diameter
**Description:** The heart of the crypt. A grand ritual circle is carved into the floor, surrounded by eight stone pillars. Chains hang from the ceiling — evidence of dark experiments. This is where The Alchemist conducted his failed apotheosis.

**Features:**
- Central ritual circle (glows faintly red)
- 8 stone pillars arranged in octagon
- Chains with shackles (environmental storytelling)
- Raised dais in center (altar?)
- **ELITE ENEMY SPAWN** — Crypt Guardian

---

### 5. SOUTH CORRIDOR
**Position:** South from ritual chamber
**Size:** 4 units wide, 20 units long
**Description:** The deepest corridor. Colder, older. The stonework here predates the cathedral above. Burial niches are carved directly into the walls.

**Features:**
- Ancient stonework (different texture than above)
- Frost on surfaces (visual, no gameplay effect yet)
- Wall niches with skeletal remains
- Dead end appears to be... but isn't (see SECRET)

---

### 6. SHORTCUT CHAMBER
**Position:** Southwest terminus
**Size:** 8x8 units
**Description:** A forgotten maintenance chamber. A rusted ladder leads up through a shaft to the cathedral. The door at the base of the ladder is locked from below — once opened, creates a permanent shortcut.

**Features:**
- Rusted iron ladder (climbable)
- Heavy iron door (LOCKED from crypt side)
- Shaft emerges in LEFT CHAPEL (behind collapsed altar)
- Small workbench (lore: maintenance workers)

---

## Enemy Placement

### ENEMY SPOT #1 — Entry Antechamber
**Type:** Hollow Knight (standard)
**Behavior:** Patrols around central brazier. Aggros when player descends stairs.
**Purpose:** Introduction to crypt — single enemy, manageable.
**Position:** x:0, y:-3, z:-25 (circular patrol radius 4)

### ENEMY SPOT #2 — Ossuary Chamber  
**Type:** 2x Bone Revenants (new enemy type?)
**Behavior:** Dormant in bone piles. Activate when player enters chamber.
**Purpose:** Ambush encounter. Tests player awareness.
**Position:** x:-12, y:-3, z:-35 and x:-8, y:-3, z:-35

### ENEMY SPOT #3 — Ritual Chamber (ELITE)
**Type:** Crypt Guardian (elite variant)
**Behavior:** Guards the ritual circle. Slow but powerful. Uses chain attacks?
**Purpose:** Mini-boss gate before shortcut/secret access.
**Position:** x:0, y:-3, z:-50 (center of ritual circle)

---

## Secret Room

### Location
Hidden behind the **east wall of the South Corridor**, near the apparent dead end.

### Discovery Mechanism  
**Illusory Wall** — Player must attack or roll into the east wall at coordinates approximately (x:8, z:-60). The wall dissolves with a shimmer effect (reuse chapel-secret code).

### Secret Room Layout
**Size:** 6x6 units
**Contents:**
- **Rare Item: Apotheosis Shard** — Infusion material that grants +1 to any track (one-time use)
- **Lore Item:** Crumbling journal page (hints at The Alchemist's final experiment)
- Skeleton in kneeling position (environmental — died reaching for something)
- Faint golden glow from the shard

### Visual Hints
- Slight discoloration on wall texture
- Draft sound effect near the wall
- One burial niche points toward the secret (skeleton's arm extended)

---

## Shortcut Door

### Crypt Side (Shortcut Chamber)
**Position:** Base of ladder, north wall
**State:** LOCKED (requires interaction from crypt side)
**Mechanism:** Large iron bar across door. Player removes bar to unlock permanently.
**Visual:** Heavy rusted door with visible bar mechanism.

### Cathedral Side (Left Chapel)
**Position:** Behind collapsed altar in left chapel, floor trapdoor hidden under rubble
**State:** Initially hidden/inaccessible. Once unlocked from below, rubble clears revealing trapdoor.
**Visual:** Trapdoor with iron ring pull.

### Player Flow
1. Player descends main stairs from cathedral center
2. Explores crypt, defeats enemies
3. Reaches Shortcut Chamber
4. Unlocks door (removes bar)
5. Climbs ladder
6. Emerges in left chapel
7. Can now fast-travel between chapel and deep crypt

---

## Geometry Implementation Notes

### Depth Levels
- Cathedral floor: Y = 0
- Crypt floor: Y = -3 (3 meters below)
- Maintain separate collision groups for above/below

### Stair Entrance
- Position in cathedral: x:0, z:-30 (center of main hall, near altar end)
- Spiral staircase geometry or simple angled stairs
- Needs collision transition between levels

### Lighting
- Minimal ambient (0.1-0.2)
- Torch sconces at room entrances (warm orange, intensity 0.5)
- Bioluminescent fungus spots (cool blue-green, intensity 0.3)
- Ritual circle glow (deep red, pulsing)
- Secret room (golden glow, intensity 0.6)

### Materials
- Reuse cathedral stone textures with darker tint
- Add moss/fungus overlay in wet areas
- Bone materials for ossuary (off-white, slight emissive)

---

## Future Considerations

- **Collapsed Passage:** Leads to potential future area (Catacombs expansion?)
- **Ritual Circle:** Could be activated for boss encounter in Phase 11+
- **Central Pit in Ossuary:** Could be drop-down to deeper level
- **Bone Revenants:** New enemy type needs implementation

---

## Summary Checklist

- [x] Entrance: Spiral stairs in cathedral main hall (z:-30)
- [x] Layout: Antechamber → Corridors → Ossuary → Ritual Chamber → South Corridor → Shortcut
- [x] Enemy spots: 3 locations (entry, ossuary ambush, ritual elite)
- [x] Secret room: Behind illusory wall in south corridor (Apotheosis Shard)
- [x] Shortcut: Ladder from Shortcut Chamber → Left Chapel trapdoor

---

*Design complete. Ready for Worker 1 geometry implementation.*
