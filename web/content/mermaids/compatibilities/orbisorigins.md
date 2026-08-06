---
title: Orbis Origins Expansion
description: Mermaids and Mythical Creatures Mod - Orbis Origins Compatibility
parent: Mod Compatibilities
layout: page
permalink: /mermaids/compatibilities/orbis-origins/
nav_order: 2
---

## About the [Orbis Origins] Compatibility Expansion:

The Mermaids mod will add a brand-new mermaid species into Orbis Origins that the player can select.
This Mermaid species will use my Mermaids code to make the species be more of a Mermaid.

### How to get started?
First make sure you have Orbis Origins installed on your world or server.
Next, head over to the Mermaids Orbis Origins config file which can be found at `mods/Siren_Mermaids/Compatibility/OrbisOrigins.json`.

For more information, check out the Mermaids [config page].

1. Set the variable `"Enable-Orbis-Origins-Compatibility"` to `true`.
2. Leave `"Default-Mermaids-Content"` as false if you want only players with the mermaid species to transform into a mermaid.
3. Set `"Mermaid-Only-In-Water"` to `false` if you want the mermaid species player to be a mermaid on land.

### Commands added:

| Command:                                                  | Description:                                                                                                                               | Permission:                                 |
|:----------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| /mermaids admin orbisorigins                              | The Orbis Origins Compatibility command line. Will only be visiable when enabled with Orbis Origins mod.                                   | mermaids.admin.orbisorigins                 |
| /mermaids admin orbisorigins mermaidscontent [true/false] | Toggle to allow regular Mermaids content. If false, you can only transform into a Mermaid as a mermaid species.                            | mermaids.admin.orbisorigins.mermaidscontent |
| /mermaids admin orbisorigins onlyinwater [true/false]     | As a mermaid species, you will only have a Mermaid tail while in water.                                                                    | mermaids.admin.orbisorigins.onlyinwater     |

### Permissions:

| Permission:                                 | Description:                                                                                                               |
|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| mermaids.admin.orbisorigins                 | Allows the player to use the command /mermaids admin orbisorigins command line.                                            |
| mermaids.admin.orbisorigins.mermaidscontent | Allows the player to use the command /mermaids admin orbisorigins mermaidscontent [true/false].                            |
| mermaids.admin.orbisorigins.onlyinwater     | Allows the player to use the command /mermaids admin orbisorigins onlyinwater [true/false].                                |

[Orbis Origins]: https://www.curseforge.com/hytale/mods/orbis-origins
[config page]: /mermaids/config/#mermaids-orbis-origins-config