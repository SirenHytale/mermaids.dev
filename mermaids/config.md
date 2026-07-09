---
title: Config
description: Mermaids and Mythical Creatures Mod - Config
parent: Mermaids and Mythical Creatures
layout: page
permalink: /mermaids/config/
nav_order: 2
---

This page covers every config file the Mermaids mod generates, updated for **Mermaids Update Version 3**. Every file lives under `mods/Siren_Mermaids/` and each one carries its own `ConfigVersion`, which increases automatically whenever that file's layout changes -- your existing settings are migrated for you, you never need to edit `ConfigVersion` by hand.

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
This is the default config values and descriptions for the Mermaids Config, config version 20,
found in the path `mods/Siren_Mermaids/MermaidsConfig.json`. This file only controls Mermaid-specific settings.

> Older installs will have this data inside `Config.json` instead -- the mod automatically copies it over to `MermaidsConfig.json` the first time you launch Update Version 3.

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| "ConfigName" | "Mermaids Mythical Creature Config" | The name given to this config file. |
| "Config-Information" | A long string that tells you to come to this site. | Information about how to find stuff related to the config. |
| "ConfigVersion" | 20 | Current Version when you have loaded for the plugin. |
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
| "EasyHunger-By:Haasapenas-Compatibility" | true | Compatibility with the [EasyHunger](https://www.curseforge.com/hytale/mods/easyhunger) Mod, see [Compatibilities](/mermaids/compatibilities/) page for more info. |
| "AquaThirst&Hunger-By:Jume-Compatibility" | true | Compatibility with the [Aqua Thirst & Hunger](https://www.curseforge.com/hytale/mods/aqua-thirst-hunger) Mod, see [Compatibilities](/mermaids/compatibilities/) page for more info. |

<br/>

* * *

<br/>

#### Werewolf Config
New in Update Version 3, see the [Werewolf](/mermaids/races/werewolf/) race page for more info.
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
New in Update Version 3, see the [Vampire](/mermaids/races/vampire/) race page for more info.
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
