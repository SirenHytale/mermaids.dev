---
title: Permissions
description: Mermaids and Mythical Creatures Mod - Permissions
parent: Mermaids and Mythical Creatures
layout: page
permalink: /mermaids/permissions
nav_order: 3
---

| Permission:                                    | Description:                                                                                                               |
|:-----------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| mermaids                                       | Allows the player to use the main Mermaids Mod command line.                                                               |
| mermaids.transform                             | Allows the player to mermaid transform when this option is enabled in config.                                              |
| mermaids.toggle                                | Allows the player to use the command /mermaids toggle [true/false].                                                        |
| mermaids.glow                                  | Allows the player to use the command /mermaids glow [true/false].                                                          |
| mermaids.debug                                 | Allows the player to use the command /mermaids debug command line.                                                         |
| mermaids.debug.mermaidring                     | Allows the player to use the command /mermaids debug givemermaidring.                                                      |
| mermaids.admin                                 | Allows the player to use the command /mermaids admin command line.                                                         |
| mermaids.admin.config                          | New in 3.2.0. Allows the player to open the in-game [Server Configuration](/mermaids/config/#in-game-server-configuration-menu) menu and change server settings. The menu card is hidden without it. |
| mermaids.admin.reload                          | Allows the player to use the command /mermaids admin reload.                                                               |
| mermaids.admin.mode                            | Allows the player to use the command /mermaids admin transformmode [New Mode Integer].                                     |
| mermaids.admin.defaultmermaid                  | Allows the player to use the command /mermaids admin defaultmermaid [true/false].                                          |
| mermaids.admin.mermaidonland                   | Allows the player to use the command /mermaids admin mermaidonland (and landspeeddebuff) [true/false].                     |
| mermaids.admin.blocktransform                  | Allows the player to use the command /mermaids admin blocktransformation [true/false].                                     |
| mermaids.admin.raintransform                   | Allows the player to use the command /mermaids admin raintransformation [true/false].                                      |
| mermaids.admin.mermaidglow                     | Allows the player to use the command /mermaids admin mermaidglow [true/false] and /mermaids admin mermaidglowraduis [int]. |
| mermaids.admin.orbisorigins                    | Allows the player to use the command /mermaids admin orbisorigins command line.                                            |
| mermaids.admin.orbisorigins.mermaidscontent    | Allows the player to use the command /mermaids admin orbisorigins mermaidscontent [true/false].                            |
| mermaids.admin.orbisorigins.onlyinwater        | Allows the player to use the command /mermaids admin orbisorigins onlyinwater [true/false].                                |
| mermaids.admin.endlessleveling                 | Allows the player to use the command /mermaids admin endlessleveling command line.                                         |
| mermaids.admin.endlessleveling.mermaidscontent | Allows the player to use the command /mermaids admin endlessleveling mermaidscontent [true/false].                         |
| mermaids.admin.endlessleveling.onlyinwater     | Allows the player to use the command /mermaids admin endlessleveling onlyinwater [true/false].                             |
| mermaids.admin.cultivation                     | New in 3.1.0. Allows the player to use the command /mermaids admin cultivation command line.                              |
| mermaids.admin.cultivation.mermaidscontent     | Allows the player to use the command /mermaids admin cultivation mermaidscontent [true/false].                            |
| mermaids.admin.cultivation.onlyinwater         | Allows the player to use the command /mermaids admin cultivation onlyinwater [true/false].                                |

<br/>

* * *

<br/>

#### Tail Color Permissions

New in 3.2.0, and **off by default** -- set `"Tail-Color-Permissions"` to `true` in the [Mermaids Config](/mermaids/config/) to switch it on. While it is off, every tail color in the menu is available to everyone and none of the nodes below are checked.

Turned on, each color requires its own permission, derived automatically from that color's id:

| Permission:                          | Description:                                                                                     |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------|
| mermaids.color.&lt;color&gt;          | Allows the player to select that base tail color, for example `mermaids.color.aqua`.             |
| mermaids.color.&lt;family&gt;.&lt;color&gt; | Allows a color belonging to a family, for example `mermaids.color.shinyfabric.red`. Families come from [Mermaids Premium](/mermaids/premium/). |
| mermaids.color.&lt;family&gt;.*       | Grants a whole family at once, for example `mermaids.color.shinyfabric.*`.                        |
| mermaids.color.*                      | Grants every tail color, base and Premium alike.                                                  |

Colors a player does not have are **shown dimmed with the permission they need written on the tile**, rather than hidden. Players can see what exists on the server and what it would take to unlock it, which makes the nodes usable as rank rewards or shop unlocks.

<br/>

* * *

<br/>

#### Werewolf & Vampire Permissions
New in Update Version 3. The Werewolf and Vampire commands reuse the shared `mermaids`, `mermaids.toggle`, and `mermaids.admin` permissions above, applied per-creature:

| Permission:      | Description:                                                                                                     |
|:------------------|:-------------------------------------------------------------------------------------------------------------------|
| mermaids          | Allows the player to open the Werewolf (/werewolf, /were) and Vampire (/vampire, /vamp) menus, along with /mermaid.|
| mermaids.toggle    | Allows the player to use /mermaids werewolf toggle [true/false] and /mermaids vampire toggle [true/false].         |
| mermaids.admin     | Allows the player to use /mermaids werewolf admin and /mermaids vampire admin command lines.                       |
