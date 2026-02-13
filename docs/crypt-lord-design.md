# The Crypt Lord — Boss Design Document

> *"What rises from the ritual circle was never meant to die. It was meant to ascend."*

## Overview

The Crypt Lord is the second major boss of Project Ashen — a two-phase encounter that transforms the existing Crypt Guardian into a true souls-like boss fight. The battle takes place in the Ritual Chamber of the crypt, featuring distinct phases, learnable attack patterns, and a dramatic transformation at 50% HP.

**Design Philosophy:**
- **Phase 1:** Teaches the player to read telegraphs and punish windows
- **Phase 2:** Rewards mastery with new threats that combine learned skills
- **Victory:** Feels earned, not lucky

---

## Boss Stats

### The Crypt Lord (Upgraded from CRYPT_GUARDIAN)

| Stat | Phase 1 | Phase 2 |
|------|---------|---------|
| **HP** | 600 | (continues from 300) |
| **Damage** | 45 | 55 |
| **Posture Damage** | 35 | 45 |
| **Max Posture** | 200 | 250 |
| **Move Speed** | 2.0 | 2.5 |
| **Attack Cooldown** | 1.8s | 1.2s |
| **Detection Range** | 20 (boss arena) | 20 |
| **Remnant Drop** | — | 2500 |

### Visual Transformation
- **Phase 1:** Existing dark armor, red glowing eyes, sword and shield (wait, current has no shield—give him a massive greatsword instead)
- **Phase 2:** Armor cracks, purple-black energy leaks through. Eyes burn brighter. Model scales to 1.5x. Greatsword gains purple flame effect.

---

## Arena Modifications (Ritual Chamber)

### Fog Gate
**Entry fog gate** blocks retreat once the boss activates:
- Position: North entrance to Ritual Chamber (where corridor meets chamber)
- Visual: Semi-transparent blue-grey wall with swirling effect
- Collision: Blocks player and enemies
- Behavior: Appears when Crypt Lord aggros, disappears on boss death

### Arena Hazards

**1. Ritual Circle (Center)**
- During Phase 2: Pulses with damage every 8 seconds
- Damage: 30 HP
- Visual tell: Circle glows bright red for 2 seconds before pulse
- Purpose: Prevents player from standing center, creates positioning pressure

**2. Pit Edges (If adding pits)**
- Optional: 2 small pits in corners (2x2 units)
- Fall = instant death
- Visual: Black void with faint red glow at bottom
- Boss attacks can knock player toward pits

**3. Pillar Cover**
- 8 stone pillars remain (from existing geometry)
- Destructible: Boss's heavy attacks can crumble pillars (after 3 hits)
- Provides temporary cover from projectiles in Phase 2
- Strategic element: Preserve pillars for Phase 2 or let boss destroy them

### Lighting Shift

**Pre-fight:** Dim ambient, faint red ritual circle glow
**Boss active (Phase 1):** Torches flare brighter, orange combat lighting
**Phase transition:** All lights dim, ritual circle blazes, transformation flash
**Phase 2:** Purple ambient tint, ritual circle pulses red, unstable flickering

---

## Phase 1: The Guardian

*"An ancient protector bound to eternal duty. His techniques are old, but perfected."*

### Attack Pattern Overview

The boss cycles through attacks with ~2s cooldown between. Attacks have clear telegraphs.

### Attack 1: Greatsword Slam
**Telegraph:** Raises sword high overhead (0.8s windup), growls
**Attack:** Vertical slam creating ground crack effect
**Damage:** 55
**Recovery:** 1.5s (punish window)
**Dodge:** Roll to either side
**Notes:** Longest punish window, teaches players to read windups

### Attack 2: Horizontal Sweep
**Telegraph:** Sword pulls back to right side (0.6s windup)
**Attack:** Wide horizontal arc covering 180°
**Damage:** 45
**Recovery:** 1.0s
**Dodge:** Roll through (i-frames) or roll backward
**Notes:** Faster than slam, shorter punish

### Attack 3: Three-Hit Combo
**Telegraph:** Slight crouch, both hands on sword (0.4s)
**Attack:** 
  1. Right-to-left sweep (0.3s)
  2. Left-to-right sweep (0.3s)
  3. Overhead finisher (0.4s)
**Damage:** 35 / 35 / 50
**Recovery:** 2.0s after full combo
**Dodge:** Roll backward, wait for combo end, punish
**Notes:** If hit by first, likely to chain-stagger into rest. Teaches patience.

### Attack 4: Shield Charge (actually Shoulder Bash)
**Telegraph:** Lowers shoulder, grunt sound (0.5s)
**Attack:** Charges forward 6 units
**Damage:** 30 + knockback
**Recovery:** 1.2s (boss slides to stop)
**Dodge:** Roll perpendicular to charge path
**Notes:** Closes distance if player is ranging, posture damage on block

### Attack 5: Grab (Rare)
**Telegraph:** Both arms spread wide, slow approach (1.0s)
**Attack:** Grabs player, lifts, slams into ground
**Damage:** 80 (unblockable)
**Recovery:** 2.5s (long punish)
**Dodge:** Roll backward or to side during telegraph
**Notes:** 10% chance after other attacks, punishes passive blocking

### Phase 1 Behavior

```
IDLE (2s)
  ↓
CHECK_DISTANCE
  ├─ Far (>8 units): APPROACH or CHARGE (30%)
  ├─ Mid (4-8 units): SWEEP or COMBO (50/50)
  └─ Close (<4 units): SLAM or COMBO or GRAB (40/50/10)
  ↓
ATTACK (with telegraph)
  ↓
RECOVERY (punish window)
  ↓
IDLE
```

### Stagger System
- Boss has posture meter (200)
- Player attacks build posture damage
- At max posture: Boss staggers for 3 seconds (massive punish)
- Posture recovers slowly when not taking damage

---

## Phase Transition (at 50% HP / 300 HP)

### Trigger
When Crypt Lord HP drops to 300 or below.

### Sequence (4 seconds total)

1. **Stagger (0s):** Boss stops mid-action, stumbles backward
2. **Kneel (0.5s):** Falls to one knee, sword plants into ground
3. **Energy Surge (1.5s):** Ritual circle blazes, purple energy flows into boss
4. **Transformation (3s):** 
   - Boss model scales from 1.2x to 1.5x
   - Armor texture cracks, purple light bleeds through
   - Eye glow intensifies (0xff2222 → 0xff00ff)
   - Sword ignites with purple flame
5. **Roar (4s):** Boss rises, roars (screen shake), Phase 2 begins

### Player Behavior During Transition
- **Cannot damage boss** during transformation (invulnerable)
- **Can heal/reposition** during the 4 seconds
- **Cannot leave** (fog gate still active)

### Visual Effects
- Screen tint shifts purple
- Ritual circle energy tendrils
- Camera zoom out to show scale increase
- Flash of light at transformation peak

---

## Phase 2: The Ascended

*"The ritual was never complete. But it was enough."*

### New Behaviors

All Phase 1 attacks remain (faster), plus:

### Attack 6: Dark Projectile
**Telegraph:** Left hand raises, gathers purple energy (0.8s)
**Attack:** Fires purple orb that tracks player for 2s
**Damage:** 40
**Recovery:** 0.8s
**Dodge:** Roll when orb is close, or use pillar to block
**Notes:** Forces movement, can be used while recovering from other attacks

### Attack 7: Ground Slam AOE
**Telegraph:** Jumps (0.4s air time)
**Attack:** Slams down creating shockwave ring expanding from impact
**Damage:** 50 (shockwave), 70 (direct hit)
**Range:** 8 units from impact
**Recovery:** 1.5s
**Dodge:** Jump (if implemented) or roll through shockwave with i-frames
**Notes:** Used when player ranges too far

### Attack 8: Summon Revenants
**Telegraph:** Raises sword high, channels for 1.5s
**Attack:** Summons 2 Bone Revenants from the floor (near ritual circle)
**Damage:** N/A (summons deal damage)
**Recovery:** 0s (boss continues attacking)
**Limit:** Max 2 active summons, can resummon when killed
**Notes:** Adds pressure, rewards aggressive play to kill adds

### Skeleton Summon Stats (Bone Revenant — Reduced)
| Stat | Value |
|------|-------|
| HP | 25 |
| Damage | 15 |
| Speed | 3.0 (fast) |
| Behavior | Aggressive chase |

### Phase 2 Behavior

```
PHASE_2_INIT
  ├─ Summon 2 Revenants immediately
  └─ Begin aggressive pattern
  
AGGRESSIVE_LOOP:
  CHECK_DISTANCE
    ├─ Far: PROJECTILE or JUMP_SLAM (50/50)
    ├─ Mid: COMBO or SWEEP (70/30)  
    └─ Close: SLAM, COMBO, or GRAB (30/50/20)
    
  SUMMON_CHECK (every 15s if <2 adds alive)
    └─ SUMMON_REVENANTS
    
  RITUAL_PULSE (every 8s)
    └─ AoE damage at center
```

### Aggression Increase
- Attack cooldown reduced: 1.8s → 1.2s
- Move speed increased: 2.0 → 2.5
- Shorter recovery windows
- Combo attacks more frequent
- Will use projectile to fill gaps

---

## Boss Death Sequence

### Trigger
HP reaches 0.

### Sequence (5 seconds)

1. **Final stagger (0s):** Boss stumbles, sword falls
2. **Kneel (1s):** Falls to both knees
3. **Dissolve (2-4s):** Purple energy escapes from cracks, body crumbles to ash
4. **Drop (4.5s):** Remnants (2500) drop + unique item
5. **Fog Clear (5s):** Fog gate dissolves

### Victory State
- Large golden notification: "CRYPT LORD VANQUISHED"
- Boss does not respawn (flag saved)
- Ritual circle deactivates (stops pulsing)
- Bonfire appears at ritual chamber center (checkpoint)

---

## Reward Drops

### Guaranteed Drops

1. **Remnants: 2500**
   - Major progression boost
   - Enough to level multiple stats

2. **Crypt Lord's Greatsword** (Unique Weapon)
   - Damage: 65 base
   - Scaling: STR A, DEX D
   - Special: Charged R2 releases purple shockwave (consumes 20 stamina extra)
   - Visual: Massive purple-tinged blade with crack lines
   - Infusable: No (already special)

### OR Alternative Drop (50% chance)

2. **Lord Soul Fragment** (Infusion Material)
   - Use at infusion station
   - Grants +2 to any single stat track
   - One-time use
   - Lore: "A fragment of the soul that sought godhood"

### Drop Implementation
- 50% chance for Greatsword, 50% for Soul Fragment
- OR: First kill = Greatsword, NG+ kill = Soul Fragment

---

## Boss HP Bar UI

### Design
- Large horizontal bar at bottom of screen
- Width: 60% of screen width
- Height: 20px
- Position: Bottom center, 50px from bottom edge

### Components
```
┌─────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░ │
│                    THE CRYPT LORD                           │
└─────────────────────────────────────────────────────────────┘
```

### Behavior
- Appears when boss aggros (fade in 0.3s)
- Shows boss name below bar ("THE CRYPT LORD")
- Health bar color: Red (Phase 1), Purple (Phase 2)
- Damage shown as delayed drain (white portion catches up to red)
- Disappears when boss dies (fade out 1s)

### Phase Marker
- At 50% mark: Small diamond indicator
- When reached: Flash effect on bar

---

## Sound Design

### Phase 1
- **Ambient:** Low drone, distant chains
- **Footsteps:** Heavy metallic thuds
- **Attacks:** Sword whoosh, impact slam
- **Damage taken:** Metallic clang
- **Telegraph:** Grunt/growl sound

### Phase Transition
- **Surge:** Building energy sound
- **Transformation:** Bass drop + otherworldly howl
- **Roar:** Reverberating monster roar

### Phase 2
- **Ambient:** Faster drone, magical hum
- **Projectile:** Magical charge + whoosh
- **Summon:** Ground cracking + skeletal rising
- **Ground slam:** Massive impact + shockwave rumble

### Victory
- **Death cry:** Echoing wail
- **Dissolution:** Crackling energy fade
- **Fanfare:** Low brass victory sting (subtle, not triumphant fanfare)

---

## Implementation Checklist

### Arena Setup (implement-boss-arena subtask)
- [ ] Fog gate geometry and collision
- [ ] Fog gate activation/deactivation logic
- [ ] Ritual circle damage pulse system
- [ ] Lighting state machine (pre-fight → Phase 1 → transition → Phase 2)
- [ ] Pillar destructibility (optional)
- [ ] Camera constraints for arena

### Phase 1 (implement-crypt-lord-phase1 subtask)
- [ ] Upgrade CRYPT_GUARDIAN to CRYPT_LORD enemy type
- [ ] 600 HP, new stat block
- [ ] Attack 1: Greatsword Slam
- [ ] Attack 2: Horizontal Sweep
- [ ] Attack 3: Three-Hit Combo
- [ ] Attack 4: Shoulder Bash
- [ ] Attack 5: Grab (rare)
- [ ] Boss HP bar UI
- [ ] Phase 1 behavior state machine

### Phase 2 (implement-crypt-lord-phase2 subtask)
- [ ] HP threshold trigger (≤300)
- [ ] Transformation sequence (4s, invulnerable)
- [ ] Model scale increase (1.2x → 1.5x)
- [ ] Visual transformation (cracks, glow, flame)
- [ ] Attack 6: Dark Projectile
- [ ] Attack 7: Ground Slam AOE
- [ ] Attack 8: Summon Revenants
- [ ] Increased aggression tuning
- [ ] Phase 2 lighting/ambient

### Rewards (implement-boss-rewards subtask)
- [ ] Death sequence (5s)
- [ ] Remnant drop (2500)
- [ ] Crypt Lord's Greatsword item
- [ ] Lord Soul Fragment alternative
- [ ] Victory notification
- [ ] Fog gate clear
- [ ] Bonfire spawn
- [ ] Boss no-respawn flag

---

## Balance Notes

### Intended Difficulty
- **Attempts before first clear:** 3-8 (skilled player: 1-2)
- **Time to kill:** 3-5 minutes
- **Healing items needed:** 3-5 Estus equivalent

### Tuning Variables
```javascript
// Easy adjustments if too hard/easy
CRYPT_LORD_HP_MULT = 1.0;        // Scale total HP
CRYPT_LORD_DMG_MULT = 1.0;       // Scale all damage
CRYPT_LORD_SPEED_MULT = 1.0;     // Scale attack/move speed
SUMMON_REVENANT_COUNT = 2;       // Number of adds
RITUAL_PULSE_DAMAGE = 30;        // Center hazard damage
RITUAL_PULSE_INTERVAL = 8000;    // ms between pulses
```

### Player Requirements
- Should have cleared crypt enemies
- Recommended: 150+ HP, upgraded weapon
- Stamina management critical in Phase 2

---

*Design complete. Ready for implementation across subtasks.*
