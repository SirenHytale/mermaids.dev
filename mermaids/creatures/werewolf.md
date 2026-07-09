---
title: Werewolf Mythical Creature
description: Mermaids and Mythical Creatures Mod - Werewolf Race
parent: Mythical Creatures
layout: page
permalink: /mermaids/creatures/werewolf/
nav_order: 2
---

### Werewolf

The Werewolf is one of the two new Mythical Creatures added in Update Version 3, alongside the [Vampire].

#### What it does

- Transforms the player into a Werewolf automatically based on the in-game clock, rather than water like the Mermaid.
  - Server admins configure a **Werewolf-Nighttime-Transform** and **Werewolf-Daytime-Transform** hour, so Werewolves can be set to transform at night (the classic werewolf theme), or on a custom schedule.
  - Transformations can additionally be tied to specific **moon phases**, with individual moon phases able to be disabled from causing a transformation.
- Swaps the player's model and skin over to the Werewolf model while transformed, and restores their human model when the transformation ends.
- Grants a movement speed change while transformed, tracked and applied over time as the transformation settles in.
- Carrying a Moonstone can affect whether the transformation triggers, giving players a way to resist or control involuntary transformations.
- Like the other creatures, transformation zones can be whitelisted or blacklisted per world/instance by a server admin.
- Can be forced on for a player by an admin, or a player can toggle whether they're allowed to become a Werewolf at all.

#### How to become a Werewolf

By default, transformation follows the configured day/night and moon phase rules automatically. Server admins can instead set potion-only mode, requiring a Werewolf potion:

- **Small/Medium Werewolf Potion** -- grants a temporary Werewolf transformation.
- **Large Werewolf Potion** -- grants a permanent Werewolf transformation until removed.

Open the Werewolf menu at any time with `/werewolf` (or `/were`), or through `/mermaids werewolf`.

[Vampire]: /mermaids/races/vampire/
