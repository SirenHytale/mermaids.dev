---
title: Life-Bound Treasures
description: Cultivation Mod - Life-Bound Treasures
parent: Cultivation
layout: page
permalink: /cultivation/lifebound/
nav_order: 7
---

### Life-Bound Treasures

A **Life-Bound Treasure** is a weapon or armor piece personalized to one specific player rather than to its item type - it levels up from combat, and its bonus grows with it.

#### Binding an Item

Run `/cultivation bind` while holding the item to personalize it. Running the command again on your own already-bound item resets it back to level 1.

- **Weapons** gain XP from every hit that lands (any creature, not just kills), and level up to deal more damage.
- **Armor** gains XP from surviving hits, and levels up to reduce incoming damage.
- The item's level shows in its name, and its tooltip states exactly how much benefit it is currently granting - no hidden numbers.

<br/>

* * *

<br/>

#### Leveling Curve

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| `LifeBound-Base-Xp-Requirement` | 75 | XP needed to go from level 1 to level 2. |
| `LifeBound-Xp-Growth-Rate` | 1.07 | Multiplies the XP requirement for every level gained, stacking. |
| `LifeBound-Max-Level` | 100 | Once reached, the item stops gaining XP - and awakens. |

Both XP rates are a multiplier against the **final** damage dealt or taken on a hit, after weapon bonus and armor reduction are already applied:

- `LifeBound-Weapon-Xp-Per-Damage-Dealt`: 0.15 - a 20-damage hit dealt grants 3 XP.
- `LifeBound-Armor-Xp-Per-Damage-Taken`: 0.1 - fires only if the wearer survives the hit.

The [skill tree's](/cultivation/skilltree/) tier-8 Life-Bound XP Gain capstones multiply both rates.

<br/>

* * *

<br/>

#### Combat Bonuses

| Variable Name: | Default Value: | Description: |
|:---|:---|:---|
| `LifeBound-Weapon-Damage-Percent-Per-Level` | 1.0 | Damage bonus percent added per level. |
| `LifeBound-Weapon-Max-Damage-Percent` | 100 | Hard cap on a single weapon's damage bonus. |
| `LifeBound-Armor-Reduction-Percent-At-Max-Level` | 55 | What one armor piece reduces at max level, scaling linearly from 0% at level 1 - a level-50 piece grants half of it. |
| `LifeBound-Armor-Max-Damage-Reduction-Percent` | 60 | Hard cap on the combined reduction from every worn Life-Bound piece. |

The 60% combined cap exists so a fully-levelled Life-Bound set cannot approach damage immunity, however many pieces are worn.

<br/>

* * *

<br/>

#### Awakening

A Life-Bound Treasure that reaches `LifeBound-Max-Level` **awakens**, and gains a final benefit applied on top of the usual caps:

- `Awakened-Bonus-Percent` (10): extra damage percent for a weapon, extra damage reduction percent for armor.
- `Awakened-Proc-Chance` (0.25): each landed weapon hit has a 25% chance to flare with a spirit-energy particle burst.

Because the awakened bonus is applied after the caps, an awakened weapon can exceed `LifeBound-Weapon-Max-Damage-Percent` and an awakened set can exceed the 60% combined armor cap - awakening is the reward for taking one item all the way to 100.

<br/>

* * *

<br/>

#### Changing Owners

If a Life-Bound item ends up with a different player - traded, dropped and picked up - `LifeBound-Reset-On-Transfer` (true by default) decides what happens:

- **true:** the item silently rebinds to its new holder at level 1 / 0 XP the next time they land a hit with it.
- **false:** the item stays permanently bound to its original owner and grants nothing to anyone else.

| Command: | Description: | Permission: |
|:---|:---|:---|
| `/cultivation bind` | Bind the held item, or reset your own bound item to level 1. | `cultivation` |
| `/cultivation admin setlifebound {player} {level} [xp]` | Force the level (and optionally XP) of a held Life-Bound item. | `cultivation` |

Every number on this page lives in `Arts/LifeBoundConfig.json` - see [Arts Configs](/cultivation/config/arts/) - and the commands are documented in full on the [Commands](/cultivation/commands/) page.
