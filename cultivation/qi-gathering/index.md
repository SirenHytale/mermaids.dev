---
title: Qi Gathering
description: Cultivation Mod - Meditation, Spirit Veins, and Cultivation Cores
parent: Cultivation
layout: page
permalink: /cultivation/qi-gathering/
nav_order: 5
---

### Qi Gathering

Every sub-stage advancement and realm breakthrough runs on **Qi**, and there are two ways to gather it: meditating to draw ambient Qi from the world, or hunting creatures for cultivation cores.

#### Meditate

Run `/cultivation meditate` (aliases: `med`, `cultivate`) to sit down and start slowly drawing ambient Qi from the **Spirit Vein** of the chunk you're in.

- Meditation gains are calculated once per tick (`Meditation-Tick-Interval-Seconds`, default 1 second).
- Drifting more than `Meditation-Movement-Cancel-Threshold` blocks (default 0.35) from the spot you sat down at automatically cancels meditation, checked every `Meditation-Movement-Check-Interval-Seconds` (default 0.25s).
- While mid-breakthrough or mid-advancement, meditation continues to feed the ritual instead - see [Cultivation Realms](/cultivation/realms/) for how those rituals work.

#### Spirit Veins

Every chunk holds its own **Spirit Vein** - a per-chunk pool of ambient Qi that depletes as it's meditated on and regenerates over time.

- A normal chunk's Spirit Vein is seeded, deterministically off the world seed, with a random max Qi between 150 and 500 (`Spirit-Vein-Min-Qi` / `Spirit-Vein-Max-Qi`), starting full.
- **Rich veins** are rare (8% chance, `Spirit-Vein-Rich-Chance`) and roll a much larger pool instead - between 1200 and 3000 Qi (`Spirit-Vein-Rich-Min-Qi` / `Spirit-Vein-Rich-Max-Qi`) - giving players a reason to go looking for a good meditation spot rather than treating every chunk as interchangeable.
- A vein regenerates 1.5 Qi/second (`Spirit-Vein-Regen-Per-Second`) and drains 2.75 Qi/second (`Spirit-Vein-Drain-Per-Second`) while someone meditates on it.
- If the chunk you're in runs low, meditation can also draw from neighboring chunks - `Spirit-Vein-Drain-Radius-Chunks` (default 1) means a 3x3 area around you.
- Use `/cultivation debug vein` (requires `cultivation.debug.vein`) to check the current/max Qi of the vein under your feet.

Hold the **Qi Gathering Talisman** in your hotbar's active slot while meditating to multiply your Spirit Vein absorption rate (1.5x by default, `Qi-Absorption-Item-Modifiers` in [Config](/cultivation/config/)). Other mods can register their own boost items in Java through `CultivationAPI`.

<br/>

* * *

<br/>

#### Cultivation Cores

Kill creatures for a chance to drop one of three cultivation cores - **Spirit**, **Profound**, or **Divine**, common to rare in that order. Right-click a core to instantly absorb it for a chunk of Qi; at most one core drops per kill, rolled independently and rarest-tier-first.

| Core: | Drop Chance: | Qi Value: |
|:---|:---|:---|
| Spirit Core | 12% (`Spirit-Core-Drop-Chance`) | 30 (`Spirit-Core-Qi-Value`) |
| Profound Core | 3.5% (`Profound-Core-Drop-Chance`) | 80 (`Profound-Core-Qi-Value`) |
| Divine Core | 0.8% (`Divine-Core-Drop-Chance`) | 220 (`Divine-Core-Qi-Value`) |

**Combine both:** absorbing a core while you're actively meditating grants a `Meditation-Core-Bonus-Multiplier` bonus on top of the core's normal Qi value (1.10x, i.e. +10%, by default). Absorbing a core is automatically blocked - and never wastes the core - while you're mid-ritual, since a breakthrough or advancement needs your full, uninterrupted meditation.

A [race](/cultivation/races/) with a `Qi-Gain-Rate-Percent-Bonus` (Human and Deity both have one; Demon's is negative) applies to every source of Qi above - meditation and core absorption alike.
