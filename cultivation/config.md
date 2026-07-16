---
title: Config
description: Cultivation Mod - Config
parent: Cultivation
layout: page
permalink: /cultivation/config/
nav_order: 2
---

This page covers every config file the Cultivation mod generates, updated for **Cultivation v0.1.0**. Every file lives under `mods/Siren_Cultivation/` and each one carries its own `ConfigVersion`, which increases automatically whenever that file's layout changes - your existing settings are migrated for you, you never need to edit `ConfigVersion` by hand. Every file can also be edited live, in-game, with `/cultivation admin` instead of touching JSON directly.

#### Config

The core Qi curve and per-level stat bonuses, found in the path `mods/Siren_Cultivation/Config.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Cultivation Config" | The name given to this config file. |
| "ConfigVersion" | 2 | Current Version when you have loaded for the plugin. |
| "Base-Qi-Requirement" | 140 | The amount of Qi needed to advance from the very first sub-stage (Body Refinement, Early-Stage). Every other requirement in the curve scales off of this base number. |
| "Substage-Growth-Rate" | 1.45 | Multiplies the Qi requirement for each sub-stage climbed within a realm (Early -> Middle -> Late -> Peak). |
| "Realm-Base-Multiplier" | 3.75 | Multiplies the Qi requirement per realm reached, stacking on top of the substage growth. |
| "Realm-Breakthrough-Multiplier" | 5.5 | An extra multiplier applied only to the Qi cost of a realm breakthrough (Peak -> the next realm's Early-Stage), on top of the normal curve - this is what makes realm breakthroughs feel like a much bigger deal than a sub-stage advancement. |
| "Health-Bonus-Per-Level" | 4.0 | Additive max health granted per total sub-level gained (realm * 4 + stage). |
| "Damage-Percent-Bonus-Per-Level" | 2.0 | Percent damage increase granted per total sub-level gained. |

<br/>

* * *

<br/>

#### Spirit Core Config

Drop chances and Qi values for Spirit, Profound, and Divine Cores, found in the path `mods/Siren_Cultivation/SpiritCoreConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Spirit Core Config" | The name given to this config file. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Spirit-Core-Drop-Chance" | 0.12 | Tier 1 (common) drop chance per kill, as a 0-1 fraction. |
| "Spirit-Core-Qi-Value" | 30 | Qi granted when a Spirit Core is absorbed. |
| "Profound-Core-Drop-Chance" | 0.035 | Tier 2 (rarer, tougher creatures) drop chance per kill. |
| "Profound-Core-Qi-Value" | 80 | Qi granted when a Profound Core is absorbed. |
| "Divine-Core-Drop-Chance" | 0.008 | Tier 3 (rare, powerful creatures) drop chance per kill. |
| "Divine-Core-Qi-Value" | 220 | Qi granted when a Divine Core is absorbed. |
| "Description-Drop-Chances" | A long string explaining the values above. | All three Drop-Chance values are rolled independently and rarest-tier-first on every creature kill - at most one core drops per kill. |
| "Meditation-Core-Bonus-Multiplier" | 1.10 | Multiplies a core's Qi value if it's absorbed while the player is currently meditating (the mix-of-both-methods bonus). 1.10 = 10% extra Qi. |

<br/>

* * *

<br/>

#### Spirit Vein Config

Spirit Vein tuning, meditation timing, and the Qi Gathering Talisman's multiplier, found in the path `mods/Siren_Cultivation/SpiritVeinConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Spirit Vein Config" | The name given to this config file. |
| "ConfigVersion" | 2 | Current Version when you have loaded for the plugin. |
| "Spirit-Vein-Min-Qi" | 150 | Lower bound of the random maxQi a normal chunk's Spirit Vein seeds with. |
| "Spirit-Vein-Max-Qi" | 500 | Upper bound of that same random range. Every chunk starts full. |
| "Spirit-Vein-Rich-Chance" | 0.08 | Odds (0-1) that a given chunk's Spirit Vein rolls "rich" instead of normal, using the Rich-Min/Max-Qi range below. Rolled once per chunk, deterministically, off the world seed. |
| "Spirit-Vein-Rich-Min-Qi" | 1200 | Lower bound for a rich vein's Qi pool. |
| "Spirit-Vein-Rich-Max-Qi" | 3000 | Upper bound for a rich vein's Qi pool. |
| "Spirit-Vein-Regen-Per-Second" | 1.5 | How much Qi a vein passively regenerates per second. |
| "Spirit-Vein-Drain-Per-Second" | 2.75 | How much Qi a meditating player drains from the vein per second. |
| "Spirit-Vein-Drain-Radius-Chunks" | 1 | How many rings of neighboring chunks a meditating player can also drain from once their own chunk runs low (0 = only their own chunk, 1 = a 3x3 area). |
| "Meditation-Tick-Interval-Seconds" | 1.0 | How often, in seconds, a meditating player's Qi gain is calculated. |
| "Meditation-Movement-Cancel-Threshold" | 0.35 | How far, in blocks, a meditating player may drift from where they sat down before meditation is automatically cancelled. |
| "Meditation-Movement-Check-Interval-Seconds" | 0.25 | How often, in seconds, meditating players are checked for movement/seating. |
| "Qi-Absorption-Item-Modifiers" | `[{"ItemId": "Cultivation_QiGatheringTalisman", "Multiplier": 1.5}]` | An array of item id / multiplier pairs. Holding a matching item in your hotbar's active slot while meditating multiplies your Spirit Vein absorption rate by that amount. Only affects Spirit Vein absorption, not core Qi values. Other mods can register additional entries in Java through `CultivationAPI`. |

<br/>

* * *

<br/>

#### Breakthrough Config

Timing and Qi-presence requirements for both sub-stage advancements and realm breakthroughs, found in the path `mods/Siren_Cultivation/BreakthroughConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Breakthrough Config" | The name given to this config file. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Breakthrough-Min-Chunk-Qi" | 750 | The chunk a player is meditating in must hold at least this much Spirit Vein Qi for their realm-breakthrough attempt to make progress - a presence check, not a drain. |
| "Breakthrough-Base-Seconds" | 30 | How long, in seconds, a realm breakthrough takes from the very first realm. |
| "Breakthrough-Duration-Realm-Multiplier" | 1.5 | Multiplies the breakthrough duration for each realm reached, stacking - total duration = Base-Seconds * Multiplier ^ realmIndex, before any race speed bonus. |
| "Advancement-Min-Chunk-Qi" | 200 | Same presence-check mechanism as Breakthrough-Min-Chunk-Qi, just a lower bar since sub-stage advancements happen far more often than realm breakthroughs. |
| "Advancement-Base-Seconds" | 8 | How long, in seconds, a sub-stage advancement takes from the very first realm. |
| "Advancement-Duration-Realm-Multiplier" | 1.3 | Same formula shape as breakthroughs, just shorter. |

<br/>

* * *

<br/>

#### Life-Bound Config

Life-Bound Treasure XP curve and combat bonuses, found in the path `mods/Siren_Cultivation/LifeBoundConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Life-Bound Treasure Config" | The name given to this config file. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "LifeBound-Base-Xp-Requirement" | 50 | How much XP a Life-Bound Treasure needs to advance from level 1 to level 2. |
| "LifeBound-Xp-Growth-Rate" | 1.25 | Multiplies the XP requirement for each level gained, stacking. |
| "LifeBound-Max-Level" | 25 | The highest level a single Life-Bound weapon or armor piece can reach - once hit, it stops gaining XP entirely. |
| "LifeBound-Weapon-Xp-Per-Damage-Dealt" | 0.15 | XP granted to a Life-Bound weapon per point of actual damage it lands on a hit (any creature, not just kills). |
| "LifeBound-Armor-Xp-Per-Damage-Taken" | 0.1 | XP granted to each worn Life-Bound armor piece per point of actual damage its wearer takes and survives. |
| "Description-LifeBound-Xp-Per-Damage" | A long string explaining the two values above. | Both are a multiplier against the FINAL damage dealt/taken on a hit (after weapon bonus + armor reduction are already applied) - a 20-damage hit dealt with 0.15 grants 3 XP. |
| "LifeBound-Weapon-Damage-Percent-Per-Level" | 2.0 | Percent damage increase per level while wielding a Life-Bound weapon. |
| "LifeBound-Armor-Reduction-Percent-Per-Level" | 1.5 | Percent damage reduction per level, per worn Life-Bound armor piece. |
| "LifeBound-Armor-Max-Damage-Reduction-Percent" | 60 | Hard cap on the COMBINED damage reduction from every worn Life-Bound armor piece, regardless of how high their levels add up - prevents a fully-leveled set from approaching damage immunity. |
| "LifeBound-Reset-On-Transfer" | true | If true, a Life-Bound item that ends up with a different player (traded, dropped and picked up, etc.) silently rebinds to them at level 1 / 0 XP the next time they land a hit with it. If false, it stays permanently bound to its original owner and does nothing for anyone else. |

<br/>

* * *

<br/>

#### Race System Config

Cross-race server behavior that isn't specific to any one race's stats, found in the path `mods/Siren_Cultivation/RaceSystemConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Race System Config" | The name given to this config file. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Race-Admin-Bypasses-Realm-Gate" | true | If true, `/cultivation admin setrace` (and the admin UI's Set Race action) can force any online player's race regardless of whether they've reached that race's own configured unlock realm. If false, the admin override is refused for players below that realm. |

<br/>

* * *

<br/>

#### Per-Race Config

Each race gets its own file - `Race/Human.json`, `Race/Demon.json`, and `Race/Deity.json` - fully independent of each other, all sharing the same field layout. See the [Races](/cultivation/races/) page for the full breakdown of what these numbers mean in practice.

| Variable Name: | Description: |
|:---|:---|
| "Description" | Flavor text shown in the race selection menu. |
| "Unlock-Realm" | The realm a player's cultivation must reach before this race can be chosen from the race menu (e.g. `BodyRefinement`, `GoldenCoreFormation`, or a 1-based realm number). Ignored by the admin `setrace` override unless `Race-Admin-Bypasses-Realm-Gate` is disabled. |
| "Health-Bonus-Percent" | Percent bonus to max health, layered multiplicatively on top of the realm/level health bonus. |
| "Damage-Bonus-Percent" | Percent bonus to outgoing damage, layered on top of the realm/level damage bonus. |
| "Qi-Gain-Rate-Percent-Bonus" | Percent bonus to ALL Qi gained by this race - both meditation (Spirit Vein) absorption and core absorption. |
| "Breakthrough-Duration-Percent-Reduction" | Percent reduction to how long this race's realm breakthrough ritual takes. Clamped in code so it can never reduce the duration by more than 90%. |

| Race: | Unlock Realm: | Health: | Damage: | Qi Gain: | Breakthrough Speed: |
|:---|:---|:---|:---|:---|:---|
| Human | Body Refinement | +0% | +0% | +10% | +0% |
| Demon | Golden Core Formation | -10% | +25% | -10% | +0% |
| Deity | Golden Core Formation | +20% | -10% | +5% | +20% faster |
