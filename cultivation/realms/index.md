---
title: Cultivation Realms
description: Cultivation Mod - Realms and Sub-Stages
parent: Cultivation
layout: page
permalink: /cultivation/realms/
nav_order: 4
---

### Cultivation Realms

Every player starts at **Body Refinement, Early-Stage** and climbs toward immortality through **7 realms**, each split into **4 sub-stages**: Early-Stage, Middle-Stage, Late-Stage, and Peak.

```mermaid
flowchart LR;
    R1["Body Refinement"] --> R2["Qi Condensation"];
    R2 --> R3["Foundation Establishment"];
    R3 --> R4["Golden Core Formation"];
    R4 --> R5["Nascent Soul"];
    R5 --> R6["Soul Formation"];
    R6 --> R7["Void Refinement"];
```

Within each realm you advance Early -> Middle -> Late -> Peak, then **break through** into the next realm's Early-Stage.

<br/>

* * *

<br/>

#### Advancements vs. Breakthroughs

Both are real, timed meditation rituals. Bank enough [Qi](/cultivation/qi-gathering/), sit down in a chunk whose Spirit Vein holds enough Qi, and the ritual makes progress for as long as you keep meditating. The chunk-Qi requirement is a presence check rather than a drain - the vein is not consumed by it - but a vein that falls below the bar pauses the ritual until it regenerates.

| | Sub-Stage Advancement | Realm Breakthrough |
|:---|:---|:---|
| When it happens | Early -> Middle, Middle -> Late, Late -> Peak | Peak -> the next realm's Early-Stage |
| Minimum chunk Qi | 200 (`Advancement-Min-Chunk-Qi`) | 750 (`Breakthrough-Min-Chunk-Qi`) |
| Base duration | 8 seconds (`Advancement-Base-Seconds`) | 24 seconds (`Breakthrough-Base-Seconds`) |
| Duration scaling | x1.3 per realm reached (`Advancement-Duration-Realm-Multiplier`) | x1.35 per realm reached (`Breakthrough-Duration-Realm-Multiplier`) |
| Tribulation lightning | Off by default (`Advancement-Tribulation-Enabled`) | On by default, and lethal |
| Skill points on success | +1 (`Points-Per-Advancement`) | +1, plus 2 more (`Points-Per-Breakthrough`) |

**Failure costs you.** Cancelling a ritual - by drifting away from where you sat down, or by standing up manually - demotes you one sub-stage, wipes your banked Qi, and revokes the skill points that stage originally granted. You are never demoted below Early-Stage of your current realm, so a failed breakthrough can never cost you a whole realm.

Ritual duration is multiplied by every speed bonus you carry, stacking multiplicatively: a [race](/cultivation/races/) `Breakthrough-Duration-Percent-Reduction` (Deity has one), the [skill tree's](/cultivation/skilltree/) Harmony branch (Ritual Speed %), and an active [Clarity Pill](/cultivation/alchemy/). Both the race and skill-tree multipliers are clamped in code so neither can cut a ritual by more than 90%.

<br/>

* * *

<br/>

#### Tribulation Lightning

A realm breakthrough calls the heavens down on you. Every 6 seconds of ritual progress (`Tribulation-Strike-Interval-Seconds`) a bolt strikes for 15% of your max health (`Tribulation-Damage-Percent-Of-Max-Health`), scaled by x1.12 per realm reached (`Tribulation-Damage-Realm-Multiplier`), and it is lethal by default (`Tribulation-Lethal`).

A deeply Yin- or Yang-leaned cultivator faces the **Heart-Devil Trial (心魔劫)** instead of lightning, and [karma](/cultivation/karma/) makes every bolt bite deeper and draws more of them. See [Tribulations](/cultivation/tribulations/) for the whole picture, including the Tribulation Ward Pill and the Qi Deviation penalty.

<br/>

* * *

<br/>

#### The Qi Curve

How much Qi an advancement needs is fully config-driven and grows along a curve built from four numbers:

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| `Base-Qi-Requirement` | 175 | The Qi needed for the very first advancement (Body Refinement, Early-Stage). |
| `Substage-Growth-Rate` | 1.55 | Multiplies the requirement per sub-stage climbed within a realm. |
| `Realm-Base-Multiplier` | 4.25 | Multiplies the requirement per realm reached, stacking on top of sub-stage growth. |
| `Realm-Breakthrough-Multiplier` | 5.5 | An extra multiplier applied only to a realm breakthrough's Qi cost, on top of the normal curve. |

The requirement works out to `Base-Qi-Requirement x Realm-Base-Multiplier ^ realmIndex x Substage-Growth-Rate ^ stageIndex`, with the breakthrough multiplier applied on top while you sit at Peak. The [skill tree's](/cultivation/skilltree/) tier-8 Qi Cost Reduction capstones then shave a percentage off the result, clamped to 40% total (`Qi-Cost-Reduction-Cap-Percent`).

<br/>

* * *

<br/>

#### Realm and Stage Bonuses

Higher realms and stages grant additive max health and percentage damage, both scaling off your total sub-level (realm x 4 + stage):

- `Health-Bonus-Per-Level`: +4.0 max health per sub-level.
- `Damage-Percent-Bonus-Per-Level`: +2.0% damage per sub-level.

These stack with your [race](/cultivation/races/), your [skill tree](/cultivation/skilltree/), your [dao](/cultivation/dao/), and any [Life-Bound Treasure](/cultivation/lifebound/) you carry.

| Command: | Description: | Permission: |
|:---|:---|:---|
| `/cultivation info` | Your realm, stage, banked Qi, and next requirement. | `cultivation` |
| `/cultivation meditate` | Sit and cultivate - also what drives both rituals. Aliases: `med`, `cultivate`. | `cultivation` |
| `/cultivation bonuses` | Every bonus currently applying to you, from every source. | `cultivation` |
| `/cultivation hud` | Toggle the persistent realm/stage/Qi overlay. | `cultivation` |
| `/cultivation admin setrealm` | Force a player's realm. | `cultivation` |
| `/cultivation admin setstage` | Force a player's sub-stage. | `cultivation` |

The Qi curve and per-level stat bonuses live in [Core Config](/cultivation/config/core/), while the ritual timings live in `Cultivation/BreakthroughConfig.json` - see [Cultivation Configs](/cultivation/config/cultivation/). The full command reference is on the [Commands](/cultivation/commands/) page.
