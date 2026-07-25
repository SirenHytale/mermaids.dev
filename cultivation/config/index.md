---
title: Main Config
description: Cultivation Mod - Main Config
parent: Cultivation
layout: page
permalink: /cultivation/config/
nav_order: 2
---

### Config

Everything the Cultivation mod can be tuned with lives under `mods/Siren_Cultivation/`, updated here for **Cultivation v0.5.0**. Rather than one enormous file, the settings are split into themed files and grouped into folders - the progression core in `Cultivation/`, everything a cultivator practices in `Arts/`, everything that only matters because other cultivators exist in `Society/`, one file per playable race in `Race/`, and the server's own runtime save state in `Data/`.

Every settings file carries its own `ConfigName` and `ConfigVersion`. The version increases automatically whenever that file's layout or balance changes, and your existing settings are migrated for you - you never need to edit `ConfigVersion` by hand, and setting it backwards only causes the migration to run again. Files also contain `Description-*` string fields, which are documentation rather than settings: the mod rewrites them to their current text on load, so editing one does nothing.

Every value on these pages can also be changed live, in game, with `/cultivation admin` instead of touching JSON at all. See the [Commands] and [Permissions] pages for how to reach it.

As of 0.5.0, other mods can add **their own** sections to that editor, appearing beside Cultivation's own nine on the Config tab and in an admin-only block of the settings menu. Anything you see there that is not documented on these pages belongs to another mod - see [API Addons](/cultivation/api/addons/).

<br/>

* * *

<br/>

#### The folder groups

| Group: | Files: | Covers: |
|:---|:---|:---|
| [Core Config](/cultivation/config/core/) | `Config.json` | The Qi curve and the per-level health/damage bonuses. |
| [Cultivation Configs](/cultivation/config/cultivation/) | `SpiritCoreConfig`, `SpiritVeinConfig`, `BreakthroughConfig`, `RaceSystemConfig`, `SkillTreeConfig` | Where Qi comes from, what advancing costs, and what a rank-up pays out. |
| [Arts Configs](/cultivation/config/arts/) | `DaoConfig`, `TechniqueConfig`, `ManualConfig`, `AlchemyConfig`, `RefinementConfig`, `LifeBoundConfig`, `BeastConfig` | What a cultivator practices, crafts, tempers, and binds to themselves. |
| [Society Configs](/cultivation/config/society/) | `SectConfig`, `FormationConfig`, `DwellingConfig`, `WarConfig`, `DuelConfig` | Sects, the ground they hold, the homes they build, and the fights they pick. |
| [Race Configs](/cultivation/config/race/) | `Human.json`, `Demon.json`, `Deity.json` | One independent stat file per playable race. |
| [Data Files](/cultivation/config/data/) | `SectsData`, `FormationsData`, `WarsData`, `DwellingsData`, `LeaderboardData` | Runtime save state. Not settings - do not hand-edit these. |

<br/>

* * *

<br/>

#### Folder layout

```
mods/Siren_Cultivation/
├── Config.json
├── Cultivation/
│   ├── SpiritCoreConfig.json
│   ├── SpiritVeinConfig.json
│   ├── BreakthroughConfig.json
│   ├── RaceSystemConfig.json
│   └── SkillTreeConfig.json
├── Arts/
│   ├── DaoConfig.json
│   ├── TechniqueConfig.json
│   ├── ManualConfig.json
│   ├── AlchemyConfig.json
│   ├── RefinementConfig.json
│   ├── LifeBoundConfig.json
│   └── BeastConfig.json
├── Society/
│   ├── SectConfig.json
│   ├── FormationConfig.json
│   ├── DwellingConfig.json
│   ├── WarConfig.json
│   └── DuelConfig.json
├── Race/
│   ├── Human.json
│   ├── Demon.json
│   └── Deity.json
└── Data/
    ├── SectsData.json
    ├── FormationsData.json
    ├── WarsData.json
    ├── DwellingsData.json
    └── LeaderboardData.json
```

<br/>

* * *

<br/>

#### Where to start

```mermaid
flowchart TD;
    A["mods/<br/>Siren_Cultivation/"] --> B["Config.json<br/>the Qi curve"];
    A --> C["Cultivation/<br/>gaining and spending Qi"];
    A --> D["Arts/<br/>daos, techniques, crafts"];
    A --> E["Society/<br/>sects, land, conflict"];
    A --> F["Race/<br/>per-race stats"];
    A --> G["Data/<br/>save state, do not edit"];
    click B "/cultivation/config/core/" "View the Core Config page";
    click C "/cultivation/config/cultivation/" "View the Cultivation Configs page";
    click D "/cultivation/config/arts/" "View the Arts Configs page";
    click E "/cultivation/config/society/" "View the Society Configs page";
    click F "/cultivation/config/race/" "View the Race Configs page";
    click G "/cultivation/config/data/" "View the Data Files page";
```

[Commands]: /cultivation/commands/
[Permissions]: /cultivation/permissions/
