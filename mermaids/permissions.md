---
title: Permissions
description: Mermaids Mod - Permissions
parent: Mermaids
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
