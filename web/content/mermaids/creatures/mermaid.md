---
title: Mermaid Mythical Creature
description: Mermaids and Mythical Creatures Mod - Mermaid Race
parent: Mythical Creatures
layout: page
permalink: /mermaids/creatures/mermaid/
nav_order: 1
---

### Mermaid

The Mermaid is the original transformation of the Mermaids mod, and it's still the flagship race the mod is named after.

#### What it does

- Transforms the player into a Mermaid whenever they enter water (this is the default behavior, controlled by the `Transformation-Mode` config option).
- Grants a Mermaid tail model in place of legs while swimming, while keeping the player's cosmetics.
- Gives increased swim speed and water breathing while underwater.
- Adds night vision so mermaids can see clearly underwater, even in deep or dark water.
- Slows the player down while walking on land as a mermaid (this can be toggled by a server admin).
- Can optionally glow underwater, making it easier for the player (and nearby players) to see in dark water. The glow radius is configurable.
- Some blocks (like mud or a cauldron) and rain can optionally trigger a transformation, if enabled by a server admin.
- Certain items, such as harpoons from compatible mods, can grant an additional swim speed boost while transformed.
- Spawns custom Mermaid NPCs in the ocean that the player can encounter while exploring.
- Can optionally **dry out** on land, draining a meter that eventually deals damage until the player gets back to water. New in 3.1.0 and off by default.

#### Drying Out

New in 3.1.0. A mermaid out of water is a fish out of water -- if a server admin enables it.

With drying out turned on, standing on land drains a meter shown above the hotbar, the mirror image of the vanilla breath bar underwater. Once it empties the player starts taking damage every second until they find water again, and touching any water refills the meter. It can kill, so it is **off by default**; an admin can also set the damage to zero and keep it as pure flavor.

Everything about it is tunable -- how long it takes to dry out, how fast water refills it, how much it hurts, and whether it only applies while actually transformed. See the [Drying Out](/mermaids/config/#drying-out) section of the config page.

#### How to become a Mermaid

By default, simply enter the water and the transformation happens automatically. Server admins can instead set the mod to potion-only mode, which requires drinking a Mermaid potion:

- **Small/Medium Mermaid Potion** -- grants a temporary Mermaid transformation.
- **Large Mermaid Potion** -- grants a permanent Mermaid transformation until manually removed with `/mermaids permpotionremove`.

See the [Commands](/mermaids/commands/), [Config](/mermaids/config/), and [Permissions](/mermaids/permissions/) pages for the full list of Mermaid-specific options.
