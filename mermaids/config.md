---
title: Config
description: Mermaids and Mythical Creatures Mod - Config
parent: Mermaids and Mythical Creatures
layout: page
permalink: /mermaids/config/
nav_order: 2
---

This page covers every config file the Mermaids mod generates, updated for **Mermaids Update Version 3.2**. Every file lives under `mods/Siren_Mermaids/` and each one carries its own `ConfigVersion`, which increases automatically whenever that file's layout changes -- your existing settings are migrated for you, you never need to edit `ConfigVersion` by hand.

> **New in 3.2.0:** you no longer have to edit these files by hand at all -- see the [in-game Server Configuration menu](#in-game-server-configuration-menu) below. The Mermaids Config also gains [Tail-Color-Permissions](#tail-color-permissions), and the [Drying Out](#drying-out) damage defaults were **lowered** -- see that section for exactly when your existing values are and aren't touched.

> **New in 3.1.0:** the [Drying Out](#drying-out) options in the Mermaids Config, plus two new files for the [Cultivation](#mermaids-cultivation-config) compatibility and its [Merfolk race](#cultivation-merfolk-race-config). New options are appended to your existing files automatically the first time you launch 3.1.0 -- nothing you have already set is changed.

<br/>

* * *

<br/>

#### In-Game Server Configuration Menu

New in 3.2.0. Everything on this page can now be edited **from inside the game**, without opening a file or restarting the server.

Open the [Mythical Creatures menu](/mermaids/commands/) and pick **Server Configuration**. The card only appears for players holding the `mermaids.admin.config` [permission](/mermaids/permissions).

- Changes are **pending until you press Save.** The menu shows a running count of unsaved changes, and a **Revert** button discards them.
- Settings are grouped into sections: **Mermaid**, **Drying Out**, **Appearance**, **Creatures**, **Werewolf**, **Vampire**, **Zones** and **Hunger Mods**.
- Compatibility sections for [Cultivation](#mermaids-cultivation-config), [Endless Leveling](#mermaids-endless-leveling-config) and [Orbis Origins](#mermaids-orbis-origins-config) **only appear when that mod is actually installed**.
- Saving writes straight to the same JSON files documented below, so the two ways of configuring the mod never disagree.

The files remain fully supported -- edit them directly if you prefer, or if you are provisioning a server before first launch.

#### Default Config
This is the default config values and descriptions for the Default Config, config version 1,
found in the path `mods/Siren_Mermaids/Config.json`. This file controls settings that are shared across every Mythical Creature.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "PluginName" | "Mermaids and Mythical Creatures" | Plugin name. |
| "ModVersion" | Version of the last ran mod jar. | Version of the last ran mod jar. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Website" | "https://www.mermaids.dev/mermaids/" | Official website for the Mermaids mod. |
| "Download-Site" | "https://www.curseforge.com/hytale/mods/mermaids" | Website to download this mod, check for updates, and information. |
| "Default-Player-Creatures-Values" | A long string explaining the accepted values for Default-Player-Creatures. | Tells you the accepted string values: Mermaid, Werewolf, and Vampire. |
| "Default-Player-Creatures" | ["Mermaid"] | An array of the Mythical Creature(s) new players default to when they first join the server. |
| "Enable-Creatures-Information" | A long string explaining the Enable-*-Transformation options. | Information about the Enable-Mermaid/Werewolf/Vampire-Transformation options below. |
| "Enable-Mermaid-Transformation" | true | Enable or disable Mermaid transformations on the server entirely. |
| "Enable-Werewolf-Transformation" | true | Enable or disable Werewolf transformations on the server entirely. |
| "Enable-Vampire-Transformation" | true | Enable or disable Vampire transformations on the server entirely. |
| "Enable-Generic-Console-Logs" | false | Send console logs for the majority of Mythical Creature actions: transforming and modifying settings. |
| "New-Version-Message" | true | When the Mermaids mod version is outdated, send a message to OPed players when they join. |
| "Do-Not-Change:Add-mermaids-Permission-For-Default" | false, but on startup it will set it to true | Ignore this value; however, it will add the permission "mermaids" to the Adventure permission group on startup. |
| "Do-Not-Change:Add-mermaids-Permission-For-LuckPerms" | false, but on startup it will set it to true | Ignore this value; the same as above, but for the LuckPerms plugin if installed. |
| "DebugMode" | false | Run the plugin in debug mode to get alerts about most actions of the plugin. |

<br/>

* * *

<br/>

#### Mermaids Config
This is the default config values and descriptions for the Mermaids Config, config version 21,
found in the path `mods/Siren_Mermaids/MermaidsConfig.json`. This file only controls Mermaid-specific settings.

> Older installs will have this data inside `Config.json` instead -- the mod automatically copies it over to `MermaidsConfig.json` the first time you launch Update Version 3.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Mermaids Mythical Creature Config" | The name given to this config file. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 21 | Current Version when you have loaded for the plugin. |
| "Transformation-Mode" | 0 | TransformationMode = 0: Transform when entering water, TransformationMode = 1: Requires the user to drink a Mermaid Potion or have a Mermaid Pendant to transform into a Mermaid. |
| "Description-Transformation-Mode" | A long string that tells you about the description for Transformation-Mode. | A description of the Transformation-Mode config option. |
| "Always-A-Mermaid-Even-On-Land" | false | If you have permissions to be a Mermaid, then you'll always be transformed into a Mermaid even on land. |
| "Allow-Players-To-Toggle-Transformation-On-Land" | true | Allows individual players to toggle whether they stay a Mermaid while on land. |
| "Require-Transformation-Permission" | false | Requires the player to have the permission -- mermaids.transform -- to transform into a Mermaid. |
| "Mermaid-On-Land-Speed-Debuff" | true | If the player is transformed as a Mermaid, they will have a speed debuff while on land. |
| "Blocks-Can-Cause-Transformations" | true | Some blocks like mud and a cauldron will cause you to transform into a mermaid. |
| "Rain-Can-Cause-Transformations" | false | Walking into the rain will cause you to transform into a mermaid. |
| "Mermaid-Gives-Fullbright" | false | Whether being transformed into a Mermaid grants fullbright vision underwater. |
| "Mermaid-Have-A-Glow/Light" | true | The mermaid model will light of a glow allowing the player to see better underwater. |
| "Mermaid-Glow/Light-Radius" | 33 | The radius of the mermaid glow. |
| "Enable-Drying-Out" | false | New in 3.1.0. Mermaids slowly dry out while on land -- see [Drying Out](#drying-out) below. Off by default. |
| "Description-Enable-Drying-Out" | A long string explaining what drying out does. | A description of the Enable-Drying-Out config option. |
| "Drying-Out-Only-While-Transformed" | false | Only drain the meter while the player is actually transformed with a tail. See [Drying Out](#drying-out) for why the default is false. |
| "Description-Drying-Out-Only-While-Transformed" | A long string explaining both settings of this option. | A description of the Drying-Out-Only-While-Transformed config option. |
| "Drying-Out-Seconds-To-Empty" | 60 | Seconds on land to drain the meter from full to empty. |
| "Description-Drying-Out-Seconds-To-Empty" | A long string comparing this to vanilla drowning. | A description of the Drying-Out-Seconds-To-Empty config option. |
| "Drying-Out-Seconds-To-Refill" | 3 | Seconds in contact with water to refill the meter from empty to full. Set to 0 to refill instantly. |
| "Drying-Out-Damage" | 4 | **Lowered in 3.2.0** (was 10). Damage dealt each interval once the meter is empty. Set to 0 to make drying out harmless -- meter and HUD only, no damage. |
| "Drying-Out-Damage-Interval-Seconds" | 3 | **Raised in 3.2.0** (was 1). Seconds between each point of drying out damage while the meter is empty. |
| "Description-Drying-Out-Damage" | A long string explaining the damage and its damage cause. | A description of the Drying-Out-Damage config option. |
| "Tail-Color-Permissions" | false | New in 3.2.0. When true, each tail color requires its own permission -- see [Tail Color Permissions](/mermaids/permissions#tail-color-permissions). Off by default, so every color stays available to everyone. |
| "Description-Tail-Color-Permissions" | A long string explaining the permission nodes and wildcards. | A description of the Tail-Color-Permissions config option. |
| "EasyHunger-By:Haasapenas-Compatibility" | true | Compatibility with the [EasyHunger](https://www.curseforge.com/hytale/mods/easyhunger) Mod, see [Compatibilities](/mermaids/compatibilities/) page for more info. |
| "AquaThirst&Hunger-By:Jume-Compatibility" | true | Compatibility with the [Aqua Thirst & Hunger](https://www.curseforge.com/hytale/mods/aqua-thirst-hunger) Mod, see [Compatibilities](/mermaids/compatibilities/) page for more info. |

<br/>

##### Drying Out

New in 3.1.0, and **off by default** -- turning it on changes how a mermaid server plays, so it is opt-in.

With `"Enable-Drying-Out"` set to `true`, a mermaid standing on land slowly dries out. A meter appears above the hotbar and drains like the vanilla breath bar; once it empties, the player takes `Drying-Out-Damage` every `Drying-Out-Damage-Interval-Seconds` under the mod's own `Mermaids_DryingOut` damage cause. **This can kill.** Any contact with water refills the meter, and the HUD disappears once the player is safe again.

> **Rebalanced in 3.2.0.** The damage default dropped from **10 every 1 second** to **4 every 3 seconds**. The old rate could kill a full-health player in about ten seconds, which was often faster than the trip to the nearest lake -- drying out is meant to push a mermaid back toward water, not execute them.
>
> **Your existing values decide what happens on update.** If your `Drying-Out-Damage` and `Drying-Out-Damage-Interval-Seconds` are still sitting at the old defaults of `10` and `1`, they are retuned to `4` and `3` for you. If you changed either one, **your number is kept exactly as it is** -- a server that deliberately tuned this keeps its balance.

**What does not dry you out** (both new in 3.2.0):

- **Rain.** Standing in a downpour counts as being wet and keeps the meter full. This applies even when `"Rain-Can-Cause-Transformations"` is `false` -- rain not *transforming* you on this server does not mean rain fails to *wet* you.
- **Creative mode.** Creative players are exempt entirely; the meter and HUD switch off. Building should not be interrupted by a survival meter, and being chipped to death by damage you are immune to anyway would only be confusing. Switching to creative **resets** the meter rather than pausing it, so coming back to survival starts you from full instead of resuming a stale drain that could kill instantly.

A few things worth knowing before enabling it:

- **`Drying-Out-Only-While-Transformed` is `false` for a reason.** Mermaids revert to their human model moments after leaving water, so setting this to `true` means the meter almost never gets the chance to drain -- unless you also run `"Always-A-Mermaid-Even-On-Land"`. Leave it `false` unless you know you want the narrower behavior.
- **Keep `Drying-Out-Seconds-To-Empty` above ~17 seconds.** That is roughly how long vanilla drowning takes to empty, and drying out is meant to be the slower, more forgiving of the two.
- **Set `Drying-Out-Damage` to `0`** if you want the meter purely as flavor. The bar and HUD still work, they just never hurt anyone.

<br/>

* * *

<br/>

#### Werewolf Config
New in Update Version 3, see the [Werewolf](/mermaids/creatures/werewolf/) race page for more info.
This is the default config values and descriptions for the Werewolf Config, config version 1,
found in the path `mods/Siren_Mermaids/WerewolfConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Werewolf Mythical Creature Config" | The name given to this config file. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Transformation-Mode" | 0 | TransformationMode = 0: Transform at night, TransformationMode = 1: Requires the user to drink a Werewolf Potion or has the Moon Charm to transform into a Werewolf. |
| "Description-Transformation-Mode" | A long string that tells you about the description for Transformation-Mode. | A description of the Transformation-Mode config option. |
| "Description-Transformation-Daytime-Cycle" | A long string explaining the time format and the two options below. | Explains that times are in 24-hour format, and how Werewolf-Nighttime-Transform/Werewolf-Daytime-Transform work together. |
| "Werewolf-Nighttime-Transform" | 21 | The 24-hour in-game hour that a Werewolf transformation begins at night. |
| "Werewolf-Daytime-Transform" | 3 | The 24-hour in-game hour that a Werewolf transforms back into a Human. |
| "Description-Moon-Phase-Transformation" | A long string explaining the moon phase numbering. | Explains the Disabled-Moon-Phase-Transformation option: 0 = Full Moon, 1 = Waxing Gibbous, 2 = First Quarter, 3 = Waxing Crescent, 4 = New Moon. |
| "Disabled-Moon-Phase-Transformation" | [4] | An array of moon phases that will NOT trigger a Werewolf transformation, even during the configured nighttime hours. Defaults to disabling transformations during the New Moon. |

<br/>

* * *

<br/>

#### Vampire Config
New in Update Version 3, see the [Vampire](/mermaids/creatures/vampire/) race page for more info.
This is the default config values and descriptions for the Vampire Config, config version 1,
found in the path `mods/Siren_Mermaids/VampireConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Vampire Mythical Creature Config" | The name given to this config file. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Transformation-Mode" | 0 | TransformationMode = 0: Always be transformed into a Vampire, TransformationMode = 1: Only transform into a Vampire at night or with a Vampire Potion. |
| "Description-Transformation-Mode" | A long string that tells you about the description for Transformation-Mode. | A description of the Transformation-Mode config option. |

<br/>

* * *

<br/>

#### Mermaid Zones and Whitelist Config
This is the default config values and descriptions for the Mermaid Zones and Whitelist Config, config version 1,
found in the path `mods/Siren_Mermaids/WhitelistZonesConfig.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "Config-Name" | "Mermaid Zones and Whitelist Config" | The name given to this config file. |
| "Config-Description" | "This config file allows the server owner to modify the Mermaid transformation zones and/or whitelist/blacklist instances." | Description of what this config can modify. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Whitelist/Blacklist-Information" | A long string giving information about whitelist/blacklist. | Whitelist will allow Mermaid transformation to only happen in that world. Blacklist will deny Mermaid transformation inside that instance. You must have Enable-Whitelist true for whitelist to work because it will disable all instances that aren't included when true. If you have an instance in blacklist, then unless added to whitelist, the player won't transform into a Mermaid inside that instance. |
| "Enable-Whitelist" | false | Enable to allow whitelist. When true, every world will be blacklisted except the ones inside Whitelist. |
| "Whitelist" | ["Example_Instance_Name1", "Example_Instance_Name2"] | An array of strings of world names that will allow players to transform into a mermaid inside of when Enable-Whitelist is true. |
| "Blacklist" | ["Example_Instance_Name1", "Example_Instance_Name2"] | An array of strings of world names that will disable players from transforming into mermaids inside of that world. |
| "Zones-Information" | A long string giving information about how to add a zone. | Zones: They are a Map with the Map key being the instance name. The value of the Map is an array of ints. The order for the array of ints are [pos_x1, pos_y1, pos_z1, pos_x2, pos_y2, pos_z2]. |
| "Transformation-Zones-Whitelist" | "Example_Instance_Name1": [-100, 0, -100, 100, 250, 100], "Example_Instance_Name2": [200, 25, 50, 250, 200, 100] | When a world is blacklisted, you can setup a zone where mermaids will only transform inside the zone. Format: "World_Name": [pos_x1, pos_y1, pos_z1, pos_x2, pos_y2, pos_z2] |
| "Blacklist-Transformation-Zones" | "Example_Instance_Name1": [-250, 100, -200, -100, 225, -100], "Example_Instance_Name2": [20, 0, -20, 80, 220, 50] | Setup a zone where players will not be allowed to transform into a mermaid. Format: "World_Name": [pos_x1, pos_y1, pos_z1, pos_x2, pos_y2, pos_z2] |

<br/>

* * *

<br/>

#### Mermaids Orbis Origins Config
This is the default config values and descriptions for the Mermaids Orbis Origins config, config version 1,
found in the path `mods/Siren_Mermaids/Compatibility/OrbisOrigins.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "Config-Name" | "Orbis Origins Compatibility" | The name given to this config file. |
| "Config-Description" | "This config file allows the user to modify compatibility issues with the Orbis Origins mod." | Description of what this config can modify. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Enable-Orbis-Origins-Compatibility" | false | Toggle for the Mermaids mod to add a brand new mermaids species to the Orbis Origins mod. |
| "Description-Enable-Orbis-Origins-Compatibility" | A description of what the "Enable-Orbis-Origins-Compatibility" does. | A description of what another variable does. |
| "Default-Mermaids-Content" | false | Toggle the Mermaids mod content. If false, you can only transform into a Mermaid as a mermaid species. |
| "Description-Default-Mermaids-Content" | A description of what the "Default-Mermaids-Content" does. | A description of what another variable does. |
| "Mermaid-Only-In-Water" | true | When the player is a mermaid species, they will only have a Mermaid tail while in water. |

<br/>

* * *

<br/>

#### Mermaids Endless Leveling Config
This is the default config values and descriptions for the Mermaids Endless Leveling config, config version 2,
found in the path `mods/Siren_Mermaids/Compatibility/EndlessLeveling.json`.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "Config-Name" | "Endless Leveling Compatibility" | The name given to this config file. |
| "Config-Description" | "This config file allows the user to modify compatibility issues with the Endless Leveling mod." | Description of what this config can modify. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 2 | Current Version when you have loaded for the plugin. |
| "Enable-Endless-Leveling-Compatibility" | true | Toggle for the Mermaids mod to add a brand new mermaid race to Endless Leveling. |
| "Description-Enable-Endless-Leveling-Compatibility" | A description of what the "Enable-Endless-Leveling-Compatibility" does. | A description of what another variable does. |
| "Default-Mermaids-Content" | false | Toggle the Mermaids mod content. If false, you can only transform into a Mermaid as one of the mermaid races. |
| "Description-Default-Mermaids-Content" | A description of what the "Default-Mermaids-Content" does. | A description of what another variable does. |
| "Mermaid-Only-In-Water" | true | When the player is a mermaid race, they will only have a Mermaid tail while in water. |

<br/>

* * *

<br/>

#### Mermaids Cultivation Config
New in 3.1.0, see the [Cultivation Addon](/mermaids/compatibilities/cultivation/) page for more info.
This is the default config values and descriptions for the Mermaids Cultivation config, config version 1,
found in the path `mods/Siren_Mermaids/Compatibility/Cultivation.json`.

> Requires the [Cultivation](https://www.curseforge.com/hytale/mods/cultivation) mod, version **0.5.0 or newer**. Without it this file is still generated, but nothing in it does anything.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "Config-Name" | "Cultivation Compatibility" | The name given to this config file. |
| "Config-Description" | "This config file allows the user to modify compatibility issues with the Cultivation mod." | Description of what this config can modify. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "Enable-Cultivation-Compatibility" | true | Toggle for the Mermaids mod to add a brand new Merfolk race to Cultivation. Its stats live in the [Merfolk race config](#cultivation-merfolk-race-config) below. |
| "Description-Enable-Cultivation-Compatibility" | A description of what the "Enable-Cultivation-Compatibility" does. | A description of what another variable does. |
| "Default-Mermaids-Content" | false | Toggle the Mermaids mod content. If false, all Mermaid transformations depend on the player being the Cultivation Merfolk race. |
| "Description-Default-Mermaids-Content" | A description of what the "Default-Mermaids-Content" does. | A description of what another variable does. |
| "Mermaid-Only-In-Water" | true | When the player is the Merfolk race, they will only have a Mermaid tail while in water. |
| "Race-Lock-Ignore-Potions" | false | Only applies while "Default-Mermaids-Content" is false. When true, Mermaid potions and pendants no longer transform non-Merfolk players -- only the Merfolk race can transform at all. When false, potions and pendants still work as a temporary transformation for anyone. |
| "Description-Race-Lock-Ignore-Potions" | A description of what the "Race-Lock-Ignore-Potions" does. | A description of what another variable does. |
| "Ignore-DoNotChange-Detected-Cultivation-Before" | false | Ignore this value; the mod uses it to remember that it has already detected the Cultivation mod once. |

<br/>

* * *

<br/>

#### Cultivation Merfolk Race Config
New in 3.1.0, see the [Cultivation Addon](/mermaids/compatibilities/cultivation/) page for more info.
This is the default config values and descriptions for the Merfolk race the Mermaids mod registers into Cultivation, config version 1,
found in the path `mods/Siren_Mermaids/Compatibility/CultivationRaces/merfolk.json`.

These are the same stat knobs Cultivation's own `Race/*.json` files use, so a Merfolk cultivator can be balanced against the mod's built-in races directly.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "Config-Name" | "Cultivation Merfolk Race" | The name given to this config file. |
| "Config-Description" | "This config file tunes the Merfolk race the Mermaids mod registers into the Cultivation mod." | Description of what this config can modify. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 1 | Current Version when you have loaded for the plugin. |
| "ID" | "Siren:Merfolk" | The internal race id Cultivation stores on the player. |
| "Description-ID" | A long string warning about changing the ID. | Warns that changing the ID after players have already picked Merfolk resets them back to Human, so only change it on a fresh world. |
| "Display-Name" | "Merfolk" | The race name shown in Cultivation's race menu. |
| "Display-Name-Translation-Key" | "server.races.merfolk.name" | The translation key used for the display name, so the race name localizes. |
| "Description" | "Born of the tide. Their bodies remember the sea, and the Water Dao answers them readily." | The race description shown in Cultivation's race menu. |
| "Unlock-Realm" | "BodyRefinement" | The Cultivation realm a player must reach before Merfolk can be chosen. Accepts BodyRefinement, QiCondensation, FoundationEstablishment, GoldenCoreFormation, NascentSoul, SoulFormation, VoidRefinement, or a 1-based realm number. An unrecognized value logs a warning and falls back to Body Refinement. |
| "Description-Unlock-Realm" | A long string listing the accepted realm values. | A description of the Unlock-Realm config option. |
| "Health-Bonus-Percent" | 5 | Percent bonus to the Merfolk cultivator's maximum health. |
| "Damage-Bonus-Percent" | -5 | Percent change to damage dealt. Negative by default -- Merfolk trade raw force for Qi affinity. |
| "Qi-Gain-Rate-Percent-Bonus" | 15 | Percent bonus to the rate Qi is absorbed while meditating. |
| "Breakthrough-Duration-Percent-Reduction" | 5 | Percent reduction to how long a breakthrough ritual takes. |
| "Qi-Alignment-Yin-Bias-Percent" | 20 | Percent Yin bias applied to absorbed Qi. Positive because water is a Yin element, so Merfolk Qi darkens slightly. |
| "Description-Stats" | A long string explaining the stat knobs and the Yin bias. | A description of the five stat options above. |
