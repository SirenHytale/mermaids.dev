---
title: Commands
description: Marriage Mod - Commands
parent: Marriage
layout: page
permalink: /marriage/commands/
nav_order: 1
---

| Command:                 | Description:                                                        | Permission:                         |
|:-------------------------|:--------------------------------------------------------------------|:------------------------------------|
| /marry                   | The marry command line.                                             |                                     |
| /marry player [Username] | Send a marry request or accept a marry request.                     | May require: marriage.marry         |
| /marry partner           | See who you're married to.                                          |                                     |
| /marry tp                | Teleports the player to their married partner.                      | May require: marriage.tp            |
| /marry msg [msg]         | Send a private message to your married partner.                     | May require: marriage.msg           |
| /marry divorce           | Divorce your partner, has a confirmation.                           | May require: marriage.divorce       |
| /marry list              | Get a list of all married players that are currently on the server. |                                     |
| /marriage                | The marriage command line, admin commands.                          | Require: marriage.admin             |
| /marriage requirering    | Toggles to require users to hold a ring to run the marry command.   | Require: marriage.admin.requirering |