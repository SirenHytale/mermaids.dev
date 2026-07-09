---
title: Endless Leveling Addon
description: Mermaids and Mythical Creatures Mod - Endless Leveling Compatibility
parent: Mod Compatibilities
layout: page
permalink: /mermaids/compatibilities/endless-leveling/
nav_order: 1
---

## About the [Endless Leveling] Compatibility Addon:

The Mermaids mod will add a brand-new mermaid race into Endless Leveling with a total of 10 variations of the mermaids race.
The Mermaid races will use my Mermaids code to make the race behave more similar to a mermaid.

### How to get started?
First make sure you have Endless Leveling installed on your world or server.
Next, head on over to the Mermaids Endless Leveling config file which can be found at `mods/Siren_Mermaids/Compatibility/EndlessLeveling.json`.

For more information, check out the Mermaids [config page].

1. Set the variable `"Enable-Endless-Leveling-Compatibility"` to `true`.
2. Leave `"Default-Mermaids-Content"` as false if you want only players with the mermaid species to transform into a mermaid.
3. Set `"Mermaid-Only-In-Water"` to `false` if you want the mermaid species player to be a mermaid on land.

### Commands added:

| Command:                                                     | Description:                                                                                                       | Permission:                                    |
|:-------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------|
| /mermaids admin endlessleveling                              | The Endless Leveling Compatibility command line. Will only be visiable when enabled with the Endless Leveling mod. | mermaids.admin.endlessleveling                 |
| /mermaids admin endlessleveling mermaidscontent [true/false] | Toggle to allow regular Mermaids content. If false, you can only transform into a Mermaid as a mermaid race.       | mermaids.admin.endlessleveling.mermaidscontent |
| /mermaids admin endlessleveling onlyinwater [true/false]     | As a mermaid race, you will only have a Mermaid tail while in water.                                               | mermaids.admin.endlessleveling.onlyinwater     |

### Permissions:

| Permission:                                    | Description:                                                                                       |
|:-----------------------------------------------|:---------------------------------------------------------------------------------------------------|
| mermaids.admin.endlessleveling                 | Allows the player to use the command /mermaids admin endlessleveling command line.                 |
| mermaids.admin.endlessleveling.mermaidscontent | Allows the player to use the command /mermaids admin endlessleveling mermaidscontent [true/false]. |
| mermaids.admin.endlessleveling.onlyinwater     | Allows the player to use the command /mermaids admin endlessleveling onlyinwater [true/false].     |

[Endless Leveling]: https://www.curseforge.com/hytale/mods/endlessleveling
[config page]: /mermaids/config/#mermaids-endless-leveling-config