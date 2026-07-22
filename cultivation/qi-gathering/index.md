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

Run `/cultivation meditate` (aliases: `med`, `cultivate`) to sit down and start drawing ambient Qi from the **Spirit Vein** of the chunk you're in.

- Meditation gains are calculated once per tick (`Meditation-Tick-Interval-Seconds`, default 1 second).
- Drifting more than `Meditation-Movement-Cancel-Threshold` blocks (default 0.35) from the spot you sat down at cancels meditation, checked every `Meditation-Movement-Check-Interval-Seconds` (default 0.25s).
- While mid-advancement or mid-breakthrough, meditation feeds the ritual instead - see [Cultivation Realms](/cultivation/realms/).
- `/cultivation refine` also seats you: [weapon refinement](/cultivation/refinement/) is a meditation ritual of its own.

<br/>

* * *

<br/>

#### Spirit Veins

Every chunk holds its own **Spirit Vein** - a per-chunk pool of ambient Qi that depletes as it is meditated on and regenerates over time. Each chunk's vein is rolled once, deterministically from the world seed, and starts full.

| Vein Tier: | Odds: | Pool: | Regen Multiplier: |
|:---|:---|:---|:---|
| Dragon vein | 0.3% (`Spirit-Vein-Dragon-Chance`) | 3500 - 5500 Qi | x1.6 (`Spirit-Vein-Dragon-Regen-Multiplier`) |
| Rich vein | 3% (`Spirit-Vein-Rich-Chance`) | 1200 - 2600 Qi | x1.25 (`Spirit-Vein-Rich-Regen-Multiplier`) |
| Normal | everything else | 150 - 500 Qi | x1 |

The dragon roll happens first, then the rich roll, then the normal range. Sitting down on a rich or dragon vein tells you so in chat, once per tier discovered - finding a good spot to cultivate is a real thing to go looking for.

- A vein regenerates 1.5 Qi/second (`Spirit-Vein-Regen-Per-Second`) and drains 2.75 Qi/second (`Spirit-Vein-Drain-Per-Second`) while someone meditates on it. The tier regen multipliers apply on top of the regen figure, and are deliberately tuned to stay below the drain rate - if you retune them, keep `regen x multiplier` under `Spirit-Vein-Drain-Per-Second` or the vein becomes an infinite Qi source.
- If the chunk you're in runs low, meditation also draws from neighboring chunks - `Spirit-Vein-Drain-Radius-Chunks` (default 1) means a 3x3 area, widened by one more ring per tier-8 Vein Drain Radius capstone in the [skill tree](/cultivation/skilltree/).
- Use `/cultivation debug vein` to check the current and max Qi of the vein under your feet.

Every chunk's vein also rolls a **Qi alignment**: 5% of chunks (`Chunk-Evil-Qi-Chance`) carry evil qi, the rest good. Meditating on one shifts your Yin-Yang balance - see [The Dao](/cultivation/dao/).

<br/>

* * *

<br/>

#### What Multiplies Your Meditation

The Qi you draw per tick is the base drain rate multiplied, in order, by everything below. All of it stacks.

| Source: | Effect: |
|:---|:---|
| **Qi Gathering Talisman** | x1.5 while held in your active hotbar slot (`Qi-Absorption-Item-Modifiers`). Other mods can register their own items through `CultivationAPI`. |
| **Weather resonance** | x1.5 (`Weather-Matched-Multiplier`) when the active weather's element matches your chosen dao, x1.15 (`Weather-Ambient-Multiplier`) for any other elemental weather, x1 for clear or unmapped weather. |
| **[Formations](/cultivation/formations/)** | A Spirit-Gathering Array amplifies it for its controllers; a Mountain-Guarding Array chokes it for outsiders. |
| **[Cave Abode](/cultivation/dwelling/)** | You draw more inside your own dwelling or your sect's hall, less inside someone else's. |
| **[Gatherer spirit beast](/cultivation/beasts/)** | A summoned Gatherer multiplies its master's meditation Qi. |
| **[Race](/cultivation/races/) / [skill tree](/cultivation/skilltree/) / [Qi Gathering Pill](/cultivation/alchemy/)** | Applied when the drawn Qi is banked, so they raise every Qi source, cores included. |

Weather elements are resolved from `Weather-Element-Keywords`, a list of `keyword:ELEMENT` pairs matched as case-insensitive substrings of the active weather id, first hit winning. The shipped list maps Thunder and Storm to Lightning, Snow to Ice, Sand to Earth, Ash / Lava / Volcanic / Blazing / Sunny to Fire, Rain / Swamp / Fog to Water, Poison to Poison, Wind and Windy to Wind, and Cursed / Corrupted / Void to Void. The first time a matched storm rolls in, the resonance is announced in chat.

<br/>

* * *

<br/>

#### Cultivation Cores

Kill creatures for a chance at one of three cultivation cores - **Spirit**, **Profound**, or **Divine**, common to rare in that order. Use a core to absorb it instantly for a chunk of Qi; at most one core drops per kill, rolled rarest-tier-first.

| Core: | Drop Chance: | Qi Value: |
|:---|:---|:---|
| Spirit Core | 12% (`Spirit-Core-Drop-Chance`) | 30 (`Spirit-Core-Qi-Value`) |
| Profound Core | 3.5% (`Profound-Core-Drop-Chance`) | 80 (`Profound-Core-Qi-Value`) |
| Divine Core | 0.8% (`Divine-Core-Drop-Chance`) | 220 (`Divine-Core-Qi-Value`) |

**Combine both:** absorbing a core while you are actively meditating grants a `Meditation-Core-Bonus-Multiplier` bonus on top of the core's normal value (1.10x, i.e. +10%, by default). Absorbing a core is blocked - and never wastes the core - while you're mid-ritual, since a breakthrough or advancement needs your full, uninterrupted meditation.

Cores are also the ingredients of every [alchemy pill](/cultivation/alchemy/), and the food a [spirit beast](/cultivation/beasts/) grows on.

The meditation, vein and core numbers all live in the core progression configs - see [Config](/cultivation/config/cultivation/) - and every command above is documented on the [Commands](/cultivation/commands/) page.
