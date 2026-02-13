# Project Ashen

> A souls-like action RPG where death isn't failure — it's research.

## Quick Start

```bash
# Open in Godot 4.2+
./godot --editor

# Or run directly (once scenes are complete)
./godot --path . scenes/main.tscn
```

## Controls

| Key | Action |
|-----|--------|
| WASD | Move |
| Mouse | Camera |
| Space | Dodge roll |
| Left Click | Light attack |
| Right Click | Heavy attack |
| Q | Lock-on toggle |
| Shift | Block |
| Esc | Release mouse |

## Project Structure

```
project-ashen/
├── src/
│   ├── player/
│   │   └── player.gd          # Player controller with combat
│   ├── enemies/
│   │   └── enemy_base.gd      # Base enemy AI
│   ├── systems/
│   │   ├── game_manager.gd    # Global state, progression
│   │   └── input_manager.gd   # Input buffering
│   └── ui/
│       └── hud.gd             # Health/stamina bars
├── scenes/
│   ├── main.tscn              # Entry point
│   ├── levels/
│   │   └── test_arena.tscn    # First playable area
│   └── prefabs/
│       ├── player.tscn        # Player scene
│       └── hud.tscn           # UI overlay
├── assets/                     # Models, textures, audio
├── docs/
│   └── DESIGN.md              # Full game design document
├── project.godot              # Godot project config
└── godot                      # Godot 4.2.2 binary (Linux ARM64)
```

## Core Systems

### Combat
- **Stamina-based:** Every action costs stamina
- **Posture system:** Break enemy posture for critical hits
- **I-frames:** Dodge grants invincibility window
- **Input buffering:** Responsive combo inputs

### Progression
- **Remnant:** Currency dropped on death, recoverable
- **Death lessons:** Gain small resistance to what killed you
- **Infusions:** Transform yourself (Bone/Blood/Stone tracks)

### Infusion Tracks

| Track | Focus | Tradeoff |
|-------|-------|----------|
| Bone | Damage, crits | Humanity (NPC hostility) |
| Blood | Lifesteal, rage | Health volatility |
| Stone | Poise, resistance | Mobility penalty |

Max total depth: 10 (across all tracks)

## Development Status

- [x] Player controller
- [x] Stamina system
- [x] Dodge with i-frames
- [x] Basic attack combos
- [x] Block/guard
- [x] Lock-on system
- [x] Enemy base class
- [x] Game manager (remnant, infusions, death)
- [x] HUD (health, stamina, posture, remnant)
- [ ] Enemy variants
- [ ] Boss fight
- [ ] Level design
- [ ] Animations
- [ ] Sound design
- [ ] Full infusion tree

## Next Steps

1. Test player movement in Godot editor
2. Add placeholder enemy with patrol/chase/attack
3. Implement hit detection
4. Build first boss encounter
5. Add infusion UI (Crucible menu)
