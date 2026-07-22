---
title: Techniques
description: Cultivation Mod - Active arts, their costs, cooldowns and the manual gate
parent: Cultivation
layout: page
permalink: /cultivation/techniques/
nav_order: 11
---

### Techniques

Techniques are the active **arts** a cultivator performs - the things you do rather than the stats you accumulate. They sit on top of the [Dao](/cultivation/dao/) system, cost banked Qi, run on real-time cooldowns, and unlock by realm.

#### Performing One

There are two triggers, and they behave identically:

- `/cultivation technique {name}` (alias `tech`). Names are matched loosely - `sword_qi_slash`, `SwordQiSlash` and `sword qi slash` all resolve to the same art.
- **Use a technique item.** Manual: One Step, a Thousand Li and Manual: Sword Flying are reusable focuses that perform their art when used. The item is never consumed - the Qi cost and cooldown are the real limiters.

Run `/cultivation technique` with no argument to list every enabled art with its unlock realm, its Qi cost, and whether you can currently use it.

#### The Gates

An activation is checked in this order, and the first failure is what you are told:

1. The whole system is enabled (`Techniques-Enabled`), and this art's own `Enabled` flag is on.
2. If the art's `Requires-Manual` is set, you must have **learned** it - see below.
3. Your realm is at or past its `Unlock-Realm`.
4. If the art is `Dao-Specific`, your chosen dao matches its `Required-Element`.
5. You have at least its `Qi-Cost` banked.
6. Its `Cooldown-Seconds` has elapsed since you last used it.

On success the Qi is deducted, the cooldown is stamped, and the effect runs. Cooldowns are per-technique and measured in real time, so they keep running while you're doing something else.

<br/>

* * *

<br/>

#### The Built-In Arts

Nine arts ship with the mod. Every number below is the shipped default and can be retuned per-technique in the config.

| Technique: | Unlock Realm: | Qi Cost: | Cooldown: | What it does: |
|:---|:---|:---|:---|:---|
| **One Step, a Thousand Li (一步千里)** | Qi Condensation | 50 | 5s | Instantly carries you forward. Distance is 4 blocks + 2 per realm + 0.5 per stage, capped at 40. |
| **Sword Flying (御剑飞行)** | Golden Core Formation | 0 | 3s | A toggle granting real flight. |
| **Sword Qi Slash (剑气斩)** | Foundation Establishment | 30 | 4s | An instant cone strike in front of you - range 8, 50 degree half-angle, 15 damage + 4 per realm. |
| **Nine Heavens Thunder Palm (九天雷掌)** | Nascent Soul | 60 | 8s | An AoE lightning strike around you - radius 6, 25 damage + 6 per realm. Never hits the caster. |
| **Iron Body (金刚不坏)** | Foundation Establishment | 25 | 20s | 10 seconds of incoming-damage reduction: 40% + 2% per realm, capped at 90%. |
| **Cloud Step (疾风步)** | Qi Condensation | 15 | 15s | 12 seconds of ground speed at x1.6, +0.05 per realm. |
| **Healing Pulse (疗伤诀)** | Qi Condensation | 40 | 12s | An instant self-heal of 40 + 10 per realm. |
| **Qi Barrier (护体真气)** | Foundation Establishment | 35 | 18s | A 15-second absorption pool of 60 + 15 per realm - a pool, not a percentage. |
| **Qi Infusion (真气灌注)** | Qi Condensation | 20 | 15s | 10 seconds of +30% outgoing damage, +3% per realm. |

#### Notes on a few of them

**One Step, a Thousand Li** only uses the horizontal component of where you are looking - pitch is ignored - and the path is stepped one block at a time. The dash stops one column short of a wall (a rise of more than 2 blocks), a chasm (a drop of more than 8), a column with no headroom, or an unloaded chunk. You always land standing on solid ground; in the worst case you simply don't move.

**Sword Flying** costs nothing to toggle. The real price is an ongoing drain of 6 Qi/second while airborne, reduced by 5% per realm reached. Flight speed is 12 horizontal and 10 vertical, +1.5 per realm. Activating it again lands you, and it is refused outright while a breakthrough or advancement ritual is under way. It also spawns a **rideable flying sword** next to you - right-click it to mount, the ordinary interact-to-mount flow. Flight works whether or not you ever mount it, so a failed spawn costs you nothing.

**Sword Qi Slash** and **Nine Heavens Thunder Palm** deal their damage through the same entry point melee combat uses, which means they pass through every damage filter the mod registers. If you walk a [dao](/cultivation/dao/), your strike converts to your element and takes its counter bonuses for free - your cultivation path colours all your techniques.

**Qi Barrier** and **Iron Body** stack in a defined order: Iron Body's percentage reduction is applied first, and what survives it is deducted from the Qi Barrier pool.

<br/>

* * *

<br/>

#### The Manual Gate

Every art carries a `Requires-Manual` flag, and it is **false for all nine built-ins by default** - out of the box, every technique is available the moment you meet its realm requirement.

Set it true and that art becomes unlearnable except by being taught. Two things count as knowing it:

- You read its [manual](/cultivation/manuals/) yourself. That is permanent and lives on your own character.
- Your [sect](/cultivation/sects/) has it inscribed in a hall it still holds. That one is borrowed and resolved live, so a sect that loses its hall to a siege stops teaching the art to every member at once.

Not knowing a gated art outranks every other refusal - you are told you have never learned it, not that your realm is too low.

<br/>

* * *

<br/>

#### An Open Registry

Techniques are not a closed list. Another mod registers one with `CultivationAPI.registerTechnique`, supplying its own effect and its own default rule, and it appears in `/cultivation technique`'s listing, obeys the same gates, and can be bound to an item exactly like a built-in. A third-party art runs off its own registered default rule with no config entry at all; a server owner can still add an override by hand with a matching `Id`. See [Registries](/cultivation/api/registries/).

A third-party effect that throws is logged and shrugged off - a broken art cannot take the mod down with it.

| Command: | Description: | Permission: |
|:---|:---|:---|
| `/cultivation technique` | List every enabled art with its realm, cost and availability. Alias: `tech`. | `cultivation` |
| `/cultivation technique {name}` | Perform an art. | `cultivation` |

Per-technique rules, costs, cooldowns and params live in the arts configs - see [Config](/cultivation/config/arts/) - and the commands are on the [Commands](/cultivation/commands/) page.
