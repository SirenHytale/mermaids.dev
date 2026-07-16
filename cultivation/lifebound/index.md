---
title: Life-Bound Treasures
description: Cultivation Mod - Life-Bound Treasures
parent: Cultivation
layout: page
permalink: /cultivation/lifebound/
nav_order: 7
---

### Life-Bound Treasures

A **Life-Bound Treasure** is a weapon or armor piece personalized to a specific player rather than just its item type - it levels up from combat, and its bonus grows with it.

#### Binding an Item

Run `/cultivation bind` while holding the item to personalize it. Running the command again on your own already-bound item resets it back to level 1.

- **Weapons** gain XP from every hit that lands (any creature, not just kills), and level up to deal more damage.
- **Armor** gains XP from surviving hits, and levels up to reduce incoming damage.
- The item's level shows right in its name, and its tooltip describes exactly how much benefit it's currently granting - no guessing at hidden numbers.

#### Leveling Curve

| Setting: | Default: | Meaning: |
|:---|:---|:---|
| Base XP requirement | 50 | XP needed to go from level 1 to level 2. |
| XP growth rate | 1.25x | Multiplies the XP requirement for every level gained, stacking. |
| Max level | 25 | Once reached, the item simply stops gaining XP. |

#### Earning XP

Both XP rates are a multiplier against the **final** damage dealt/taken on a hit (after weapon bonus and armor reduction are already applied):

- **Weapon XP per damage dealt:** 0.15 - a 20-damage hit dealt grants 3 XP.
- **Armor XP per damage taken:** 0.1 - fires only if the wearer survives the hit.

#### Combat Bonuses

| Bonus: | Default: |
|:---|:---|
| Weapon damage per level | +2.0% |
| Armor damage reduction per level | +1.5% |
| Max combined armor damage reduction | 60% (hard cap across all worn Life-Bound armor pieces combined) |

The 60% cap exists specifically so a fully-leveled Life-Bound armor set can't approach damage immunity, no matter how many pieces are worn.

#### Changing Owners

If a Life-Bound item ends up with a different player - traded, dropped and picked up, etc. - `LifeBound-Reset-On-Transfer` (true by default) controls what happens:

- **true (default):** the item silently rebinds to its new holder at level 1 / 0 XP the next time they land a hit with it (soulbound-lite).
- **false:** the item stays permanently bound to its original owner and grants no bonus (and gains no XP) for anyone else.

Admins can force-set a held item's level (and optionally its XP) directly with `/cultivation admin setlifebound {player} {level} [xp]` - see [Commands](/cultivation/commands/). Every number on this page lives in `LifeBoundConfig.json` - see [Config](/cultivation/config/) for the full field reference.
