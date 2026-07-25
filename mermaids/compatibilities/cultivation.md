---
title: Cultivation Addon
description: Mermaids and Mythical Creatures Mod - Cultivation Compatibility
parent: Mod Compatibilities
layout: page
permalink: /mermaids/compatibilities/cultivation/
nav_order: 4
---

## About the [Cultivation] Compatibility Addon:

New in Mermaids 3.1.0.

The Mermaids mod adds a brand-new **Merfolk** race into [Cultivation], the Xianxia cultivation mod. Merfolk cultivators take a small health bonus, give up a little raw damage, absorb Qi noticeably faster, and break through slightly quicker -- and because water is a Yin element, the Qi they absorb leans Yin.

The race can also be used as a **gate** on the Mermaids mod itself: turn regular Mermaids content off and nobody transforms into a Mermaid unless they have chosen Merfolk in Cultivation's race menu.

> Requires [Cultivation] **0.5.0 or newer** ([CurseForge]). The compatibility is enabled by default, but does nothing at all until Cultivation is actually installed.

### How to get started?

First make sure you have Cultivation installed on your world or server.
Next, head on over to the Mermaids Cultivation config file which can be found at `mods/Siren_Mermaids/Compatibility/Cultivation.json`.

For more information, check out the Mermaids [config page].

1. `"Enable-Cultivation-Compatibility"` is already `true` -- leave it, or set it to `false` to remove the Merfolk race entirely.
2. Leave `"Default-Mermaids-Content"` as `false` if you want only Merfolk players to transform into a mermaid. Set it to `true` to keep the mod's normal behavior for everyone, with Merfolk as simply an extra race to pick.
3. Set `"Mermaid-Only-In-Water"` to `false` if you want a Merfolk player to keep their tail on land.
4. Set `"Race-Lock-Ignore-Potions"` to `true` if a race lock should be absolute -- see below.

### Race locking, and what potions do

While `"Default-Mermaids-Content"` is `false`, Mermaid transformations are **race-locked** to Merfolk. There are two flavors of that lock:

- **`"Race-Lock-Ignore-Potions"` is `false` (default)** -- Merfolk transform normally, and Mermaid potions and pendants still work as a temporary transformation for anyone else. A non-cultivator can still have a taste of being a mermaid.
- **`"Race-Lock-Ignore-Potions"` is `true`** -- potions and pendants no longer transform non-Merfolk players. Being Merfolk is the *only* way to become a mermaid on the server.

This option does nothing while `"Default-Mermaids-Content"` is `true`, since nothing is locked in the first place.

### Tuning the Merfolk race

The race's own stats live in a separate file, `mods/Siren_Mermaids/Compatibility/CultivationRaces/merfolk.json`, and use the same stat knobs as Cultivation's own `Race/*.json` files -- so Merfolk can be balanced directly against the built-in races.

| Setting: | Default: |
|:---|:---|
| Unlock realm | Body Refinement |
| Health bonus | +5% |
| Damage bonus | -5% |
| Qi gain rate | +15% |
| Breakthrough duration | -5% |
| Qi Yin bias | +20% |

The full table, including the race id and display name, is on the [Merfolk race config] section of the config page.

> Changing `"ID"` after players have already picked Merfolk resets those players back to Human, so only change it on a fresh world.

### Commands added:

| Command:                                                 | Description:                                                                                                          | Permission:                                |
|:---------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| /mermaids admin cultivation OR /mermaids admin cult      | The Cultivation Compatibility command line. Will only be visiable when enabled with the Cultivation mod.               | mermaids.admin.cultivation                 |
| /mermaids admin cultivation mermaidscontent [true/false] | Toggle to allow regular Mermaids content. If false, you can only transform into a Mermaid as the Merfolk race.         | mermaids.admin.cultivation.mermaidscontent |
| /mermaids admin cultivation onlyinwater [true/false]     | As the Merfolk race, you will only have a Mermaid tail while in water.                                                 | mermaids.admin.cultivation.onlyinwater     |

### Permissions:

| Permission:                                | Description:                                                                                   |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------|
| mermaids.admin.cultivation                 | Allows the player to use the command /mermaids admin cultivation command line.                 |
| mermaids.admin.cultivation.mermaidscontent | Allows the player to use the command /mermaids admin cultivation mermaidscontent [true/false]. |
| mermaids.admin.cultivation.onlyinwater     | Allows the player to use the command /mermaids admin cultivation onlyinwater [true/false].     |

[Cultivation]: /cultivation/
[CurseForge]: /cultivation/curseforge/
[config page]: /mermaids/config/#mermaids-cultivation-config
[Merfolk race config]: /mermaids/config/#cultivation-merfolk-race-config
