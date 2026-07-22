---
title: API Reference
description: Cultivation Mod - the CultivationAPI facade methods
parent: Cultivation API
layout: page
permalink: /cultivation/api/reference/
nav_order: 3
---

### API Reference

The rest of `plugin.siren.API.CultivationAPI` - the methods an addon calls directly, rather than the [events](/cultivation/api/events/) it listens to or the [registries](/cultivation/api/registries/) it adds to.

Everything on the class is `static`; the constructor is private and it is never instantiated. Most methods take the same two arguments every Hytale ECS system already has in hand:

- `ComponentAccessor<EntityStore> accessor` - the accessor for the store the entity lives in.
- `Ref<EntityStore> ref` - the entity itself.

<br/>

* * *

<br/>

#### Threading

The source is explicit about this in one place: the event listeners are invoked synchronously on the world thread of the player the event happened to, and you must hop threads yourself - `CompletableFuture.runAsync(task, otherWorld)` - before touching anything that lives on another world.

The reads below carry no separate documented threading contract of their own; they are plain component reads through the accessor you pass in, so the accessor's own thread rules apply. Call them from the world thread that owns the `Ref` you are reading.

Registration and listener calls are the exception in the opposite direction: they are safe from any plugin's `setup()` in any load order, because the backing structures are static maps and `CopyOnWriteArrayList`s that nothing reads until a player interacts with the mod.

<br/>

* * *

<br/>

#### Component types

Ask for a `ComponentType` when you want to read or write a Cultivation component through the ECS yourself rather than through the convenience reads below.

| Method: | Returns: | Description: |
|:---|:---|:---|
| `CultivationAPI.getCultivationComponentType()` | `ComponentType<EntityStore, CultivationComponent>` | Realm, stage and banked Qi. |
| `CultivationAPI.getCultivationStateComponentType()` | `ComponentType<EntityStore, CultivationStateComponent>` | Transient state - meditation, ritual progress. |
| `CultivationAPI.getCultivationSettingsComponentType()` | `ComponentType<EntityStore, CultivationSettingsComponent>` | Per-player settings, such as the HUD toggle. |
| `CultivationAPI.getRaceComponentType()` | `ComponentType<EntityStore, RaceComponent>` | The player's chosen [race](/cultivation/races/). |
| `CultivationAPI.getSkillTreeComponentType()` | `ComponentType<EntityStore, SkillTreeComponent>` | Unlocked nodes and unspent points - see [Skill Tree]. |
| `CultivationAPI.getTechniqueComponentType()` | `ComponentType<EntityStore, TechniqueComponent>` | Learned arts and cooldowns - see [Techniques]. |
| `CultivationAPI.getSpiritVeinComponentType()` | `ComponentType<ChunkStore, SpiritVeinComponent>` | A chunk's Spirit Vein pool. Note this one is a **`ChunkStore`** component, not an entity component - see [Qi Gathering]. |

<br/>

* * *

<br/>

#### Cultivation state

| Method: | Returns: | Description: |
|:---|:---|:---|
| `CultivationAPI.getCultivationComponent(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `CultivationComponent` (nullable) | The raw component, or `null` when the entity does not have one. |
| `CultivationAPI.getCultivationStateComponent(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `CultivationStateComponent` (nullable) | The raw state component, or `null`. |
| `CultivationAPI.getRaceComponent(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `RaceComponent` (nullable) | The raw race component, or `null`. |
| `CultivationAPI.getRealm(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `CultivationRealm` (nullable) | The player's current [realm](/cultivation/realms/), or `null` if they have no `CultivationComponent` - for example, not a player entity. |
| `CultivationAPI.getStage(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `CultivationStage` (nullable) | The player's current sub-stage, or `null` on the same condition. |
| `CultivationAPI.getGlobalLevel(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `int` | Realm and stage flattened into one ever-increasing number. `0` when they have no `CultivationComponent`. |
| `CultivationAPI.getQi(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `float` | Banked Qi - progress toward their next sub-stage or breakthrough. `0` when they have no `CultivationComponent`. |
| `CultivationAPI.getRace(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `PlayerRace` (never null) | The player's current race, defaulting to Human when they have no `RaceComponent` yet. |
| `CultivationAPI.isMeditating(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `boolean` | Whether they are sitting in meditation right now. `false` when they have no state component. |

`CultivationRealm` runs `BODY_REFINEMENT`, `QI_CONDENSATION`, `FOUNDATION_ESTABLISHMENT`, `GOLDEN_CORE_FORMATION`, `NASCENT_SOUL`, `SOUL_FORMATION`, `VOID_REFINEMENT`. `CultivationStage` runs `EARLY`, `MIDDLE`, `LATE`, `PEAK`. Both are documented player-side on the [Cultivation Realms] page.

There is no `setQi` or `grantQi` on the facade. To change a player's banked Qi from an addon, hook `CultivationEvents.onPreQiGain` and re-scale `event.setAmount(...)` on the gain that is already happening - that is the supported path, and it is the same one the mod's own race, skill, pill, sect and dao multipliers take. See the [events page](/cultivation/api/events/).

<br/>

* * *

<br/>

#### Skill tree

| Method: | Returns: | Description: |
|:---|:---|:---|
| `CultivationAPI.getAvailableSkillPoints(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref)` | `int` | Unspent skill tree points, or `0` when they have no `SkillTreeComponent` yet. |
| `CultivationAPI.isNodeUnlocked(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref, String nodeId)` | `boolean` | Whether the player has unlocked that node id. `false` when they have no `SkillTreeComponent`, or the id matches no unlocked node. |

Node ids are the ones in `plugin.siren.ECS.SkillTree.SkillTreeRegistry` - for example `"VITALITY_1"`. The player-facing map of the tree is on the [Skill Tree] page, and points are granted per the `Points-Per-Breakthrough` and `Points-Per-Advancement` keys on the [Config] page.

<br/>

* * *

<br/>

#### Techniques

| Method: | Returns: | Description: |
|:---|:---|:---|
| `CultivationAPI.performTechnique(ComponentAccessor<EntityStore> accessor, Ref<EntityStore> ref, PlayerRef playerRef, Technique technique)` | `boolean` | Performs a technique right now. Returns `true` if it was performed, `false` if a gate blocked it. |

This runs every gate - system enabled, per-technique enabled, realm unlock, dao match, Qi cost, cooldown - and on success deducts the Qi, stamps the cooldown and runs the effect. The player is messaged either way, with the effect's success message or the failure reason. Use it to wire a technique to your own trigger: a keybind, a different item, an event of your own.

It works on built-in techniques and on ones you registered yourself, and it fires `TechniqueEvents.PreTechniquePerformEvent` and `TechniquePerformEvent` in both cases. See [API Registries](/cultivation/api/registries/) for building a technique, and [Techniques] for the player-facing list.

<br/>

* * *

<br/>

#### Registration

Covered in full on [API Registries](/cultivation/api/registries/):

| Method: | Returns: | Description: |
|:---|:---|:---|
| `CultivationAPI.registerRace(String id, String displayName, String translationKey, CultivationRealm unlockRealm, Supplier<RaceConfig> stats)` | `PlayerRace` | Adds a race to the race menu, gated on `unlockRealm`. |
| `CultivationAPI.registerTechnique(String id, String displayName, String nameKey, String descriptionKey, TechniqueRule defaultRule, TechniqueEffect effect)` | `Technique` | Adds a performable technique. |
| `CultivationAPI.newTechniqueRule(String id, boolean enabled, boolean daoSpecific, String requiredElement, String elements, String damageType, String unlockRealm, float qiCost, float cooldownSeconds, Object... params)` | `TechniqueRule` | Builds the rule for `registerTechnique`. |
| `CultivationAPI.registerQiAbsorptionItemModifier(String itemId, float multiplier)` | | Sets an item's Spirit Vein absorption multiplier while meditating. |

<br/>

* * *

<br/>

#### See also

- [API Events](/cultivation/api/events/) - reshape or veto any mechanic.
- [API Registries](/cultivation/api/registries/) - add races, techniques and Qi items.
- [Config] and [Commands] - the server-owner-facing equivalents of most of the above.

[Cultivation Realms]: /cultivation/realms/
[Qi Gathering]: /cultivation/qi-gathering/
[Skill Tree]: /cultivation/skilltree/
[Techniques]: /cultivation/techniques/
[Config]: /cultivation/config/
[Commands]: /cultivation/commands/
