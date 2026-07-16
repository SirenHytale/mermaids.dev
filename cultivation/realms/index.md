---
title: Cultivation Realms
description: Cultivation Mod - Realms and Sub-Stages
parent: Cultivation
layout: page
permalink: /cultivation/realms/
nav_order: 4
---

### Cultivation Realms

Every player starts at **Body Refinement, Early-Stage** and climbs toward immortality through **7 realms**, each split into **4 sub-stages**: Early, Middle, Late, and Peak.

```mermaid
flowchart LR;
    R1["Body Refinement"] --> R2["Qi Condensation"];
    R2 --> R3["Foundation Establishment"];
    R3 --> R4["Golden Core Formation"];
    R4 --> R5["Nascent Soul"];
    R5 --> R6["Soul Formation"];
    R6 --> R7["Void Refinement"];
```

Within each realm, a player advances Early -> Middle -> Late -> Peak, then **breaks through** into the next realm's Early-Stage.

#### Advancements vs. Breakthroughs

Both are real, timed meditation rituals - meditate in a chunk with enough Spirit Vein Qi present, and the ritual makes progress over time. Cancel one early (by moving too far, or manually) and you're demoted a stage as the price of failure.

| | Sub-Stage Advancement | Realm Breakthrough |
|:---|:---|:---|
| When it happens | Early -> Middle, Middle -> Late, Late -> Peak | Peak -> next realm's Early-Stage |
| Minimum chunk Qi required | 200 (`Advancement-Min-Chunk-Qi`) | 750 (`Breakthrough-Min-Chunk-Qi`) |
| Base duration | 8 seconds (`Advancement-Base-Seconds`) | 30 seconds (`Breakthrough-Base-Seconds`) |
| Duration scaling per realm | x1.3 per realm reached | x1.5 per realm reached |
| Stakes | Failing costs you a stage | Failing costs you a stage - the bigger, higher-stakes ritual of the two |

A [race](/cultivation/races/) with a `Breakthrough-Duration-Percent-Reduction` bonus (like Deity) completes both kinds of ritual faster, clamped so it can never cut the duration by more than 90%.

#### The Qi Curve

How much Qi is needed to advance is fully config-driven (see [Config](/cultivation/config/)) and grows along a curve built from four numbers:

- **Base-Qi-Requirement** (140) - the Qi needed for the very first advancement (Body Refinement, Early-Stage).
- **Substage-Growth-Rate** (1.45) - multiplies the requirement for each sub-stage climbed within a realm.
- **Realm-Base-Multiplier** (3.75) - multiplies the requirement for each realm reached, stacking on top of sub-stage growth.
- **Realm-Breakthrough-Multiplier** (5.5) - an extra multiplier applied only to a realm breakthrough's Qi cost, on top of the normal curve - this is what makes a breakthrough feel like a much bigger deal than a routine advancement.

#### Realm & Stage Bonuses

Higher realms and stages grant additive max health and percentage damage bonuses, both scaling off your total sub-level (realm x 4 + stage):

- **Health-Bonus-Per-Level**: +4.0 max health per sub-level.
- **Damage-Percent-Bonus-Per-Level**: +2.0% damage per sub-level.

These stack with any [race](/cultivation/races/) bonuses you have, and are visible at any time via `/cultivation info` or the persistent HUD (`/cultivation hud`).

See the [Commands](/cultivation/commands/) page for the full `/cultivation admin setrealm`/`setstage` reference, and [Qi Gathering](/cultivation/qi-gathering/) for how to actually earn the Qi that drives all of this.
