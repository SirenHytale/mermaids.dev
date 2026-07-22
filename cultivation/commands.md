---
title: Commands
description: Cultivation Mod - Commands
parent: Cultivation
layout: page
permalink: /cultivation/commands/
nav_order: 1
---

### Commands

The mod registers two root commands: `/cultivation` (aliases: `/cult`, `/qi`) and `/sect`.

Arguments in `{braces}` are required, arguments in `[brackets]` are optional. Anything that takes a
player takes a player reference - the name of an online player.

The whole sect suite is mounted underneath the cultivation root as well, so `/cultivation sect create`
and `/sect create` are the same command acting on the same data. The shorter `/sect` spelling is used
throughout this page.

<br/>

* * *

<br/>

#### Player Commands

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation | Opens your cultivation stats page. | cultivation |
| /cultivation info (i) | Prints your realm, stage, and Qi progress to chat. | cultivation |
| /cultivation meditate (med, cultivate) | Toggles meditation, drawing Spirit Qi from the vein of the chunk you sat down in. Standing up mid-ritual forfeits it - see [Qi Gathering](/cultivation/qi-gathering/). | cultivation |
| /cultivation bind | Personalizes the item in your hand into a [Life-Bound Treasure](/cultivation/lifebound/). Run again on your own bound item to reset it to level 1. | cultivation |
| /cultivation race | Opens the race menu to view racial benefits and choose your [race](/cultivation/races/) once you are eligible. | cultivation |
| /cultivation hud | Toggles the persistent Cultivation HUD on or off. | cultivation |
| /cultivation settings (options) | Opens the player settings menu. | cultivation |
| /cultivation bonuses | Opens the Active Bonuses page, listing every modifier currently affecting you. | cultivation |

<br/>

* * *

<br/>

#### Cultivation Arts

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation skilltree (skills) | Opens the [Skill Tree](/cultivation/skilltree/). | cultivation |
| /cultivation dao | Opens the [Dao](/cultivation/dao/) page - your element, path, and Yin-Yang balance. | cultivation |
| /cultivation technique (tech) [name] | With no name, lists every [technique](/cultivation/techniques/) with its unlock realm, Qi cost, and current availability. With a name, performs that technique. | cultivation |
| /cultivation refine (temper) [element] | With no element, reports the held weapon's current refinement and what the next tier would cost and risk. With an element, spends the Qi up front and seats you into the [refinement](/cultivation/refinement/) ritual. | cultivation |
| /cultivation respec (resetskillpoints, resetskills) | Refunds every skill point you paid for and clears those nodes. Nodes taught by a [manual](/cultivation/manuals/) cost no points, so they are neither refunded nor wiped. Requires `Respec-Enabled`. | cultivation |

<br/>

* * *

<br/>

#### Spirit Beasts

Binding a beast happens out in the world rather than through a command - see [Spirit Beasts](/cultivation/beasts/).

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation beast (companion, pet) | Prints your bound beast's species, kind, element, realm, and current contribution. | cultivation |
| /cultivation beast summon (call) | Calls your bound beast into the world at your side. Its bonus applies only while it is summoned. | cultivation |
| /cultivation beast dismiss (recall) | Sends the beast's body away. It keeps every stage it has cultivated. | cultivation |
| /cultivation beast feed | Feeds the entire stack in your hand to the beast, converting each item's Qi worth into beast XP. | cultivation |
| /cultivation beast info | The same readout as bare `/cultivation beast`, in subcommand form. | cultivation |
| /cultivation beast release [confirm] | Severs the bond entirely so you can tame another. Everything the beast cultivated is lost, so it only acts when passed the literal word `confirm`. | cultivation |

<br/>

* * *

<br/>

#### Cave Abode

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation abode (dwelling, cave) | Reports your [Cave Abode](/cultivation/dwelling/), and your sect hall's spring if you have one, from anywhere. | cultivation |
| /cultivation abode claim | Claims (or moves) your abode to the chunk you are standing in. Any ground will take an abode, but the vein beneath it decides how fast the spring gathers. | cultivation |
| /cultivation abode collect (drink) | Drinks the Spirit Spring dry, banking what it gathered as your own Qi. Must be run standing inside the abode or your sect's hall. | cultivation |
| /cultivation abode deposit (offer) | Offers the entire stack in your hand as upkeep, each item worth the hours listed for it in `Upkeep-Item-Hours`. Must be run inside the abode. | cultivation |
| /cultivation abode info | The same readout as bare `/cultivation abode`, in subcommand form. | cultivation |
| /cultivation abode abandon | Gives up your abode and frees the ground. Whatever the spring had banked is lost with it. | cultivation |

<br/>

* * *

<br/>

#### Formations

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation formations (formation, arrays) | Lists every [formation](/cultivation/formations/) you control - your sect's and your personal ones - with its type, world, anchor chunk, and radius. | cultivation |

<br/>

* * *

<br/>

#### Duels

`/cultivation duel` takes an action word, and some actions take a further argument. See [Duels](/cultivation/duels/).

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation duel challenge {player} [wager] | Stakes banked Qi and challenges another cultivator. A missing or unreadable wager counts as 0. | cultivation |
| /cultivation duel accept {player} | Accepts that player's pending challenge, starting the duel. | cultivation |
| /cultivation duel decline {player} | Declines that player's pending challenge. | cultivation |
| /cultivation duel yield (forfeit) | Forfeits your current duel - the wager goes to your opponent. | cultivation |

<br/>

* * *

<br/>

#### Sects

Every command here is also reachable as `/cultivation sect ...`. In-sect authority (leader, elder,
member) is enforced per action rather than by permission node - see [Sects](/cultivation/sects/).

| Command: | Description: | Permission: |
|:---|:---|:---|
| /sect | Opens the sect menu UI. | cultivation.sect |
| /sect create {name} | Founds a new sect under that name. | cultivation.sect |
| /sect invite {player} | Invites an online player to your sect. | cultivation.sect |
| /sect join {sect} | Joins a sect by name. | cultivation.sect |
| /sect leave | Leaves your current sect. | cultivation.sect |
| /sect kick {player} | Removes a member from your sect. | cultivation.sect |
| /sect disband | Dissolves your sect entirely. | cultivation.sect |
| /sect claim | Claims (or moves) the sect hall to the chunk you are standing in. Only succeeds on a Spirit Vein of the configured quality. | cultivation.sect |
| /sect inscribe | Carves the technique manual in your hand into the hall, teaching that art to every member for as long as the sect holds the hall. The manual is consumed. Run empty-handed, it scours the existing inscription away instead. | cultivation.sect |
| /sect info (i) | Prints your sect's standing - members, hall, and bonuses. | cultivation.sect |
| /sect menu (ui) | Opens the sect menu UI, the same page bare `/sect` opens. | cultivation.sect |

<br/>

* * *

<br/>

#### Sect Wars

| Command: | Description: | Permission: |
|:---|:---|:---|
| /sect war [sect] | With no argument, or with `status`, reports the siege your sect is in - hold accrued, time left in the window, whether defenders are contesting it - or the cooldown remaining if there is no siege. Any member may query it. | cultivation.sect |
| /sect war {sect} | Declares a siege on that rival sect's claimed hall. Leader only. See [Sect Wars](/cultivation/wars/). | cultivation.sect |

<br/>

* * *

<br/>

#### Rankings

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation top (leaderboard) | Prints the server's top 10 cultivators by realm and stage. | cultivation |
| /sect top (leaderboard) | Prints the server's top 10 sects. | cultivation.sect |

<br/>

* * *

<br/>

#### Admin Commands

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation admin | Opens the live in-game config editor UI. | cultivation.admin |
| /cultivation admin setrealm [player] {realm} | Sets a player's [realm](/cultivation/realms/) directly, keeping their current stage. | cultivation.admin |
| /cultivation admin setstage [player] {stage} | Sets a player's sub-stage directly (Early, Middle, Late, or Peak), keeping their current realm. | cultivation.admin |
| /cultivation admin setqi [player] {qi} | Sets a player's currently banked Qi directly. | cultivation.admin |
| /cultivation admin setrace [player] {race} | Sets a player's [race](/cultivation/races/) directly. Bypasses that race's unlock realm unless `Race-Admin-Bypasses-Realm-Gate` is set to false. | cultivation.admin |
| /cultivation admin grantracechoice [player] [amount] | Grants additional race changes, letting the player reopen the race menu and pick again. Defaults to 1. | cultivation.admin |
| /cultivation admin grantskillpoints [player] [amount] | Grants additional [skill tree](/cultivation/skilltree/) points. Defaults to 1. | cultivation.admin |
| /cultivation admin setlifebound [player] {level} [xp] | Force-sets the level, and optionally the banked XP within that level, of the [Life-Bound Treasure](/cultivation/lifebound/) the player is holding. | cultivation.admin |
| /cultivation admin reset [player] | Resets a player's cultivation progress back to Body Refinement, Early-Stage, with 0 Qi. | cultivation.admin |

<br/>

* * *

<br/>

#### Debug Commands

| Command: | Description: | Permission: |
|:---|:---|:---|
| /cultivation debug (d) | The debug command group. | cultivation.debug |
| /cultivation debug vein | Prints the tier and current/max Qi of the Spirit Vein in the chunk you are standing in. | cultivation.debug.vein |

<br/>

Every admin command that targets another player accepts an optional player argument - omit it to
target yourself. See [Permissions](/cultivation/permissions/) for the full permission list and what
is granted by default.
