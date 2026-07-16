---
title: Permissions
description: Cultivation Mod - Permissions
parent: Cultivation
layout: page
permalink: /cultivation/permissions/
nav_order: 3
---

| Permission:              | Description:                                                                 |
|:----------------------------|:----------------------------------------------------------------------------------|
| cultivation                 | The base `/cultivation` command and all player-facing subcommands (info, meditate, bind, race, hud, settings). |
| cultivation.admin           | Access to `/cultivation admin` and all of its subcommands.                        |
| cultivation.debug           | Access to the `/cultivation debug` command group.                                 |
| cultivation.debug.vein      | Access to `/cultivation debug vein`.                                              |

<br/>

By default, `cultivation` is granted to everyone (permission group `hytale:None`) so every player can access the base cultivation experience out of the box. `cultivation.admin` is not granted by default - a server owner must assign it explicitly to trusted staff.
