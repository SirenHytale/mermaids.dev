---
title: Core Config
description: Cultivation Mod - Core Config
parent: Main Config
layout: page
permalink: /cultivation/config/core/
nav_order: 1
---

### Core Config

The one file that sits at the root of `mods/Siren_Cultivation/`. It holds the Qi curve every realm and sub-stage requirement is derived from, and the flat stat bonuses a cultivator earns for each rank climbed. If you only ever change one file to make your server harder or gentler, this is it. See [Cultivation Realms](/cultivation/realms/) for what the curve produces, and [Qi Gathering](/cultivation/qi-gathering/) for where the Qi itself comes from.

<br/>

* * *

<br/>

#### Config

The core Qi curve and per-level stat bonuses, found in the path `mods/Siren_Cultivation/Config.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Cultivation Config" | The name given to this config file. |
| "ConfigVersion" | 4 | Current Version when you have loaded for the plugin. |
| "Base-Qi-Requirement" | 175.0 | The amount of Qi needed to advance from the very first sub-stage (Body Refinement, Early-Stage). Every other requirement in the curve scales off of this base number. |
| "Description-Base-Qi-Requirement" | A long string explaining the value above. | Restates that this is the first sub-stage's requirement and that the whole curve scales from it. |
| "Substage-Growth-Rate" | 1.55 | Multiplies the Qi requirement for each sub-stage climbed within a realm (Early -> Middle -> Late -> Peak). |
| "Realm-Base-Multiplier" | 4.25 | Multiplies the Qi requirement per realm reached, stacking on top of the substage growth. |
| "Realm-Breakthrough-Multiplier" | 5.5 | An extra multiplier applied only to the Qi cost of a realm breakthrough (Peak -> the next realm's Early-Stage), on top of the normal curve. |
| "Description-Realm-Breakthrough-Multiplier" | A long string explaining the value above. | Explains that this extra multiplier is what makes a realm breakthrough feel like a much bigger deal than a routine sub-stage advancement. |
| "Health-Bonus-Per-Level" | 4.0 | Additive max health granted per total sub-level gained (realm * 4 + stage). |
| "Damage-Percent-Bonus-Per-Level" | 2.0 | Percent damage increase granted per total sub-level gained. |

<br/>

* * *

<br/>

#### Notes on the curve

The Qi requirement for a given rank-up is `Base-Qi-Requirement`, grown by `Substage-Growth-Rate` for each sub-stage inside the realm and by `Realm-Base-Multiplier` for each realm already reached, with `Realm-Breakthrough-Multiplier` layered on top only when the rank-up is a realm breakthrough. Raising `Substage-Growth-Rate` steepens the climb inside a realm; raising `Realm-Base-Multiplier` widens the gap between realms.

Two other systems reduce what a player actually pays: the tier-8 Qi Cost Reduction skill stat (capped by `Qi-Cost-Reduction-Cap-Percent` in the [Skill Tree config](/cultivation/config/cultivation/)), and a race's `Qi-Gain-Rate-Percent-Bonus` (see the [Race Configs](/cultivation/config/race/)) which raises income rather than lowering cost.

The two stat bonuses are applied per total sub-level, counted as `realm * 4 + stage`, so they grow smoothly across the whole progression rather than jumping only at realm boundaries. Race bonuses from `Health-Bonus-Percent` and `Damage-Bonus-Percent` layer on top of these.
