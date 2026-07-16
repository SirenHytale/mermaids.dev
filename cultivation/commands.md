---
title: Commands
description: Cultivation Mod - Commands
parent: Cultivation
layout: page
permalink: /cultivation/commands/
nav_order: 1
---

All commands are rooted at `/cultivation` (aliases: `/cult`, `/qi`).

| Command:                                                     | Description:                                                                                     | Permission:            |
|:---------------------------------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------------|
| /cultivation                                                  | Opens your cultivation stats page.                                                                   | cultivation             |
| /cultivation info (i)                                          | Prints your realm, stage, and Qi progress to chat.                                                   | cultivation             |
| /cultivation meditate (med, cultivate)                         | Toggles meditation, drawing Spirit Qi from the Spirit Vein of the chunk you're standing in.          | cultivation             |
| /cultivation bind                                               | Personalizes the item in your hand into a Life-Bound Treasure. Run again on your own item to reset it to level 1. | cultivation             |
| /cultivation race                                               | Opens the race menu to view racial benefits and choose your race (once eligible).                    | cultivation             |
| /cultivation hud                                                | Toggles the persistent Cultivation HUD on or off.                                                    | cultivation             |
| /cultivation settings (options)                                 | Opens the player settings menu.                                                                      | cultivation             |

<br/>

* * *

<br/>

#### Admin Commands

| Command:                                                          | Description:                                                                          | Permission:              |
|:---------------------------------------------------------------------|:------------------------------------------------------------------------------------------|:---------------------------|
| /cultivation admin                                                    | Opens the live in-game config editor UI.                                                  | cultivation.admin          |
| /cultivation admin setrealm {player} {realm}                          | Sets a player's realm directly. Omit `{player}` to target yourself.                       | cultivation.admin          |
| /cultivation admin setstage {player} {stage}                          | Sets a player's sub-stage directly (Early, Middle, Late, or Peak).                        | cultivation.admin          |
| /cultivation admin setrace {player} {race}                            | Sets a player's race directly (Human, Demon, or Deity), bypassing the unlock-realm gate by default (configurable). | cultivation.admin          |
| /cultivation admin grantracechoice {player} [amount]                  | Grants a player additional race-selection choices.                                        | cultivation.admin          |
| /cultivation admin setlifebound {player} {level} [xp]                 | Force-sets the level (and optionally the XP) of the Life-Bound Treasure a player is currently holding. | cultivation.admin          |
| /cultivation admin reset {player}                                     | Resets a player's cultivation progress back to Body Refinement, Early-Stage.              | cultivation.admin          |

<br/>

* * *

<br/>

#### Debug Commands

| Command:                        | Description:                                                                       | Permission:                 |
|:-----------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------|
| /cultivation debug (d)             | Debug command line.                                                                     | cultivation.debug              |
| /cultivation debug vein            | Prints the current/max Qi of the Spirit Vein in the chunk you're standing in.           | cultivation.debug.vein         |

<br/>

Admin/player commands that target another player accept an optional player argument - omit it to target yourself. See [Permissions](/cultivation/permissions/) for the full permission list.
