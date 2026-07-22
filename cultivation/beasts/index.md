---
title: Spirit Beasts
description: Cultivation Mod - Taming, hatching and raising a spirit beast companion
parent: Cultivation
layout: page
permalink: /cultivation/beasts/
nav_order: 15
---

### Spirit Beasts

A **spirit beast (灵兽)** is a companion bound to you for good - it advances through the same realms you do, on its own XP pool, and serves you according to what kind of creature it is.

You may keep **one** bound beast at a time. Release it before binding another. It is summoned and dismissed at will, keeps its own vanilla AI while it is out, is pulled back to you whenever it strays further than `Leash-Distance` (24 blocks), and despawns on its own the moment you log out.

The system is enabled by default (`Beasts-Enabled`).

<br/>

* * *

<br/>

#### The Three Kinds

A species' kind is what makes collecting a second beast worth doing. A **dismissed** beast does nothing at all - the bonus is for keeping it at your side.

| Kind: | What it does: | Defaults: |
|:---|:---|:---|
| **Guardian** | Raises your outgoing damage, and fights beside you with its own AI. | `Guardian-Damage-Percent-Base` 4%, +0.6% per level. |
| **Warden** | Cuts your incoming damage. | `Warden-Reduction-Percent-Base` 5%, +0.7% per level, capped at 40%. |
| **Gatherer** | Multiplies your meditation Qi while summoned. | `Gatherer-Qi-Multiplier-Base` x1.15, +0.02 per level. |

Every figure is multiplied by the species' own `Power`, and again by `Element-Resonance-Multiplier` (1.25) when the beast's element matches your chosen [dao](/cultivation/dao/).

<br/>

* * *

<br/>

#### Taming

Use a **Beast Taming Talisman** on a wild creature from the roster whose health has fallen to `Tame-Max-Health-Percent` (30%) or less. Wound it first, then bind it.

Your chance is the species' own `TameChance`, plus:

- `Tame-Chance-Bonus-Per-Realm` (+0.05) per realm you have reached, and
- `Tame-Chance-Element-Match-Bonus` (+0.25) if the beast's element matches your chosen dao - a cultivator's dao calls to beasts of like nature, and they yield far more readily to it.

The result is capped at `Tame-Chance-Max` (0.95). With `Tame-Consume-Talisman-On-Failure` true (the default) a failed attempt still costs you the talisman, and the beast is left standing where it was.

#### Hatching

**Spirit Beast Eggs** drop from creature kills at `Egg-Kill-Drop-Chance` (1.5%). Use one to break it open and whatever sleeps inside bonds itself to you, chosen at random weighted by each species' `EggWeight`. A species with an egg weight of 0 never hatches and must be tamed in the wild. An egg respects `MinRealm` the same way taming does, and hatching while you already keep a beast is refused.

<br/>

* * *

<br/>

#### The Roster

`MinRealm` is a realm index - 0 is Body Refinement, 1 Qi Condensation, 2 Foundation Establishment, 3 Golden Core Formation, 4 Nascent Soul.

| Species: | Kind: | Element: | Tame Chance: | Min Realm: | Power: | Egg Weight: |
|:---|:---|:---|:---|:---|:---|:---|
| Wolf_Black | Guardian | Void | 35% | 1 | 1.0 | 1.0 |
| Wolf_White | Guardian | Ice | 35% | 1 | 1.0 | 1.0 |
| Emberwulf | Guardian | Fire | 20% | 3 | 1.4 | 0.4 |
| Leopard_Snow | Guardian | Ice | 28% | 2 | 1.2 | 0.7 |
| Tiger_Sabertooth | Guardian | Metal | 22% | 3 | 1.4 | 0.5 |
| Fen_Stalker | Guardian | Water | 25% | 2 | 1.2 | 0.6 |
| Raptor_Cave | Guardian | Wind | 30% | 2 | 1.1 | 0.8 |
| Rex_Cave | Guardian | Metal | 15% | 4 | 1.6 | 0.2 |
| Hyena | Guardian | Poison | 35% | 1 | 0.9 | 1.0 |
| Bear_Grizzly | Warden | Earth | 28% | 2 | 1.2 | 0.8 |
| Bear_Polar | Warden | Ice | 26% | 2 | 1.25 | 0.7 |
| Yeti | Warden | Ice | 18% | 4 | 1.5 | 0.3 |
| Tortoise | Warden | Earth | 50% | 0 | 0.9 | 1.2 |
| Toad_Rhino | Warden | Poison | 40% | 1 | 1.0 | 1.0 |
| Toad_Rhino_Magma | Warden | Fire | 25% | 3 | 1.3 | 0.5 |
| Armadillo | Warden | Metal | 50% | 0 | 0.85 | 1.2 |
| Moose_Bull | Warden | Earth | 32% | 1 | 1.1 | 0.9 |
| Spark_Living | Gatherer | Lightning | 20% | 3 | 1.5 | 0.4 |
| Snapdragon | Gatherer | Wood | 30% | 2 | 1.2 | 0.7 |
| Cactee | Gatherer | Wood | 40% | 1 | 1.0 | 1.0 |
| Trillodon | Gatherer | Wood | 22% | 3 | 1.35 | 0.5 |
| Fox | Gatherer | Wind | 45% | 0 | 0.9 | 1.2 |
| Deer_Stag | Gatherer | Wood | 45% | 0 | 0.9 | 1.2 |
| Antelope | Gatherer | Wind | 45% | 0 | 0.85 | 1.2 |

A beast's element is its **own** nature and has nothing to do with its owner's - matching them is a bonus, not a requirement. Nothing about a species is hardcoded, so a server owner (or another mod) can add creatures to this list.

<br/>

* * *

<br/>

#### Raising It

A beast advances through the same realms and stages you do, on its own XP pool. Each stage costs `Beast-Base-Xp-Requirement` (120) x `Beast-Xp-Growth-Rate` (1.35) ^ level.

| Source: | Default: |
|:---|:---|
| Your kills | `Beast-Xp-Per-Kill` 12, multiplied by `Beast-Xp-Own-Kill-Multiplier` (2) when the beast landed the blow itself. |
| Feeding | `Beast-Xp-Per-Qi-Item-Point` 0.75 per point of Qi in what you feed it. |
| Your meditation | `Meditation-Qi-Share-Percent` 12% of the Qi you draw. |

The meditation share is a **bonus** by default - you still bank the full amount - unless `Meditation-Share-Taken-From-Owner` is set, which turns it into a genuine tithe deducted before your own Qi is credited.

`Beast-Realm-Capped-By-Owner` (true) means a beast can never out-rank its master: it stalls at your realm until you advance.

**Feeding** takes the item in your hand. Cores are worth exactly what you would have absorbed - 30, 80 and 220 for Spirit, Profound and Divine - a Spirit Stone is worth 40, and any of the four [alchemy pills](/cultivation/alchemy/) is worth 25. Anything else, a beast will not eat.

<br/>

* * *

<br/>

#### Commands

| Command: | Description: | Permission: |
|:---|:---|:---|
| `/cultivation beast summon` | Call your beast to your side. Alias: `call`. | `cultivation` |
| `/cultivation beast dismiss` | Send it away. Alias: `recall`. | `cultivation` |
| `/cultivation beast feed` | Feed it the item in your hand. | `cultivation` |
| `/cultivation beast info` | Its species, kind, element, realm, stage and XP. | `cultivation` |
| `/cultivation beast release` | Release it for good, freeing you to bind another. | `cultivation` |

The parent command `/cultivation beast` also answers to `companion` and `pet`.

Every value on this page, including the whole species roster, lives in the beast config - see [Config](/cultivation/config/arts/) - and the commands are documented in full on the [Commands](/cultivation/commands/) page.
