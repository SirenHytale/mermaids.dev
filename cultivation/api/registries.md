---
title: API Registries
description: Cultivation Mod - registering your own races, techniques and Qi items
parent: Cultivation API
layout: page
permalink: /cultivation/api/registries/
nav_order: 2
---

### API Registries

Listening to [events](/cultivation/api/events/) lets you reshape what Cultivation already does. The registries here let you add content that the mod then treats as its own - a race that appears in the race menu, a technique usable through every technique trigger, an item that boosts Spirit Vein absorption.

`CultivationAPI` exposes three registration methods and one builder helper:

| Method: | Returns: | Description: |
|:---|:---|:---|
| `CultivationAPI.registerRace(String id, String displayName, String translationKey, CultivationRealm unlockRealm, Supplier<RaceConfig> stats)` | `PlayerRace` | Registers a brand-new [race](/cultivation/races/) players can choose once their cultivation reaches `unlockRealm`. |
| `CultivationAPI.registerTechnique(String id, String displayName, String nameKey, String descriptionKey, TechniqueRule defaultRule, TechniqueEffect effect)` | `Technique` | Registers a brand-new [technique](/cultivation/techniques/) cultivators can perform. |
| `CultivationAPI.newTechniqueRule(String id, boolean enabled, boolean daoSpecific, String requiredElement, String elements, String damageType, String unlockRealm, float qiCost, float cooldownSeconds, Object... params)` | `TechniqueRule` | Convenience builder for the rule you pass to `registerTechnique`. |
| `CultivationAPI.registerQiAbsorptionItemModifier(String itemId, float multiplier)` | | Registers, or overwrites, the Spirit Vein absorption multiplier granted while that item is held in a meditating player's active hotbar slot. |

All three are safe to call from your own plugin's `setup()` in any load order relative to Cultivation's own `setup()`. The registries are plain static maps that nothing reads until a player actually interacts - opens the race menu, meditates, performs a technique - which only happens well after every plugin has finished loading.

Re-registering the same id for a race or a technique is a **no-op**: it returns the existing entry rather than erroring, so it is safe across a reload of your plugin.

<br/>

* * *

<br/>

#### Registering a race

```java
@Nonnull
public static PlayerRace registerRace(@Nonnull String id, @Nonnull String displayName, @Nullable String translationKey,
                                      @Nonnull CultivationRealm unlockRealm, @Nonnull Supplier<RaceConfig> stats)
```

| Parameter: | Description: |
|:---|:---|
| `id` | A stable, unique id, not shown to players. Namespace it with your mod's name - `"MyMod:Vampire"` - to avoid colliding with another mod's race of the same short name. |
| `displayName` | The name shown in the UI when no `translationKey` is given, or as a fallback if the key does not resolve for a player's locale. |
| `translationKey` | A `server.lang` key for the localized name, or `null` to always show `displayName` as plain untranslated text. |
| `unlockRealm` | The [realm](/cultivation/realms/) a player's cultivation must reach before this race can be chosen from the menu. |
| `stats` | Supplies this race's stat bonuses each time they are needed. |

The `stats` supplier is called live, so back it with your own plugin's `withConfig(name, RaceConfig.codec(...))` for a server-owner-editable JSON file, or just `() -> myConstantConfig` for a fixed one. `unlockRealm` only **seeds** `RaceConfig`'s `Unlock-Realm` when the supplied config does not already specify one - a caller backing their stats with their own JSON file, which may itself set `Unlock-Realm`, stays server-owner-editable.

`RaceConfig` has getters and setters for each of its tunables: `getDescription` / `setDescription`, `getUnlockRealm` / `setUnlockRealm`, `getHealthBonusPercent` / `setHealthBonusPercent`, `getDamageBonusPercent` / `setDamageBonusPercent`, `getQiGainRatePercentBonus` / `setQiGainRatePercentBonus`, `getBreakthroughDurationPercentReduction` / `setBreakthroughDurationPercentReduction`, and `getQiAlignmentYinBiasPercent` / `setQiAlignmentYinBiasPercent`. Those map one-to-one onto the `Health-Bonus-Percent`, `Damage-Bonus-Percent`, `Qi-Gain-Rate-Percent-Bonus`, `Breakthrough-Duration-Percent-Reduction` and `Qi-Alignment-Yin-Bias-Percent` keys in the built-in race config files on the [Config] page.

Worked example - a Vampire race unlocked at Nascent Soul, with fixed stats:

```java
import plugin.siren.API.CultivationAPI;
import plugin.siren.ECS.Races.PlayerRace;
import plugin.siren.ECS.Realms.CultivationRealm;
import plugin.siren.Utils.Config.RaceConfig;

public final class MyRaces {

    public static PlayerRace VAMPIRE;

    public static void register(){
        VAMPIRE = CultivationAPI.registerRace(
                "MyMod:Vampire",
                "Vampire",
                "server.mymod.race.vampire",
                CultivationRealm.NASCENT_SOUL,
                MyRaces::vampireStats);
    }

    private static RaceConfig vampireStats(){
        RaceConfig config = new RaceConfig();
        config.setDescription("Blood-drinkers. Frail, but they draw Qi twice as fast.");
        config.setHealthBonusPercent(-10.0F);
        config.setDamageBonusPercent(15.0F);
        config.setQiGainRatePercentBonus(100.0F);
        config.setBreakthroughDurationPercentReduction(0.0F);
        config.setQiAlignmentYinBiasPercent(80.0F);
        return config;
    }
}
```

The `Qi-Alignment-Yin-Bias-Percent` value feeds straight into the Yin-Yang balance described on [The Dao] page, so a race registered this way also biases which moral path its members drift toward.

<br/>

* * *

<br/>

#### Registering a technique

```java
@Nonnull
public static Technique registerTechnique(@Nonnull String id, @Nonnull String displayName, @Nullable String nameKey,
                                          @Nullable String descriptionKey, @Nonnull TechniqueRule defaultRule,
                                          @Nonnull TechniqueEffect effect)
```

This is the same system the built-in One Step, a Thousand Li uses. Once registered, the technique is usable through **every** technique trigger automatically:

- the `/cultivation technique <id>` command, and its list (see [Commands]),
- any activation item whose `CultivationActivateTechnique` interaction carries this id as its `TechniqueId`,
- your own trigger - a keybind, another item, an event - via `CultivationAPI.performTechnique`.

| Parameter: | Description: |
|:---|:---|
| `id` | A stable, unique id. It doubles as the config key and the activation item's `TechniqueId`. Namespace it - `"MyMod:flame_step"`. |
| `displayName` | Shown when no `nameKey` is given, or as a fallback if the key does not resolve. |
| `nameKey` | A `server.lang` key for the localized name, or `null` to show `displayName` raw. |
| `descriptionKey` | A `server.lang` key for the description, or `null`. |
| `defaultRule` | The rule the technique runs by. This is the **only** source of rules for your technique unless a server owner adds a matching override entry to Cultivation's `TechniqueConfig.json`. |
| `effect` | What performing it does. Only ever invoked after all gates pass and the Qi cost and cooldown have been applied. |

`TechniqueEffect` is a `@FunctionalInterface` with one method, `void execute(TechniqueContext context)`, so a lambda or method reference is enough. Everything the effect needs is on the context: `getAccessor()`, `getRef()`, `getPlayerRef()`, `getTechnique()`, `getRule()`, `getParam(String key, float fallback)`, `getCultivation()`, `getRealmIndex()`, `getStageIndex()`, `getPosition()`, `getLookDirection()`, `getWorld()`, `teleport(Vector3d)`, `spawnParticle(String particleId, Vector3d position)` and `sendMessage(Message)`. The vectors are `org.joml.Vector3d`, so read their components with `x()`, `y()` and `z()`; `getPosition()` returns `null` when the entity has no transform, so guard it before use in production code.

Build the rule with the helper rather than the constructor:

```java
@Nonnull
public static TechniqueRule newTechniqueRule(@Nonnull String id, boolean enabled, boolean daoSpecific,
                                             @Nullable String requiredElement, @Nullable String elements,
                                             @Nullable String damageType, @Nonnull String unlockRealm,
                                             float qiCost, float cooldownSeconds, @Nonnull Object... params)
```

| Parameter: | Description: |
|:---|:---|
| `requiredElement` | A `DaoElement` enum name, e.g. `"WIND"`, when `daoSpecific` is true; otherwise `""` or `null`. |
| `elements` | Comma-separated `DaoElement` names the technique "carries" - metadata and flavor - or `""`. |
| `damageType` | A `DamageCause` asset id for a damaging technique, or `""` for none. |
| `unlockRealm` | The `CultivationRealm` enum name required to use it, e.g. `"QI_CONDENSATION"`. |
| `params` | Alternating key/value pairs your effect reads back with `context.getParam(key, fallback)`. Must be an **even** number of arguments: `String, float, String, float, ...`. |

Worked example - a Flame Step that carries the Fire element and teleports the cultivator forward:

```java
import org.joml.Vector3d;
import plugin.siren.API.CultivationAPI;
import plugin.siren.ECS.Technique.Technique;
import plugin.siren.Utils.Config.TechniqueRule;

public final class MyTechniques {

    public static Technique FLAME_STEP;

    public static void register(){
        TechniqueRule rule = CultivationAPI.newTechniqueRule(
                "MyMod:flame_step",
                true,                 // enabled
                true,                 // daoSpecific
                "FIRE",               // requiredElement
                "FIRE",               // carried elements
                "",                   // damageType - none
                "QI_CONDENSATION",    // unlockRealm
                25.0F,                // qiCost
                8.0F,                 // cooldownSeconds
                "Distance", 12.0F);   // params

        FLAME_STEP = CultivationAPI.registerTechnique(
                "MyMod:flame_step",
                "Flame Step",
                "server.mymod.technique.flame_step",
                "server.mymod.technique.flame_step.desc",
                rule,
                context -> {
                    float distance = context.getParam("Distance", 12.0F);
                    Vector3d from = context.getPosition();
                    Vector3d look = context.getLookDirection();
                    context.teleport(new Vector3d(
                            from.x() + look.x() * distance,
                            from.y(),
                            from.z() + look.z() * distance));
                    context.spawnParticle("MyMod:FlameStepBurst", new Vector3d(from));
                });
    }
}
```

Because `daoSpecific` is true and `requiredElement` is `"FIRE"`, only cultivators walking the Fire dao can perform it - see [The Dao]. Performing it fires `TechniqueEvents.PreTechniquePerformEvent` and `TechniquePerformEvent` exactly as a built-in technique does, so other addons can re-price or veto yours too.

To fire it from your own trigger:

```java
boolean performed = CultivationAPI.performTechnique(accessor, ref, playerRef, MyTechniques.FLAME_STEP);
```

That runs every gate - system enabled, per-technique enabled, realm unlock, dao match, Qi cost, cooldown - and on success deducts the Qi, stamps the cooldown and runs the effect. The player is messaged either way, with the effect's success message or the failure reason. It returns `true` only when the technique was actually performed.

<br/>

* * *

<br/>

#### Registering a Qi absorption item

```java
public static void registerQiAbsorptionItemModifier(@Nonnull String itemId, float multiplier)
```

This is the exact mechanism behind the built-in Qi Gathering Talisman: while the item is in a meditating player's active hotbar slot, their Spirit Vein absorption is multiplied by `multiplier`. Registering an id that already has a modifier **overwrites** it, so you can also re-tune the built-in one.

```java
CultivationAPI.registerQiAbsorptionItemModifier("MyMod:JadePendant", 1.75F);
```

Server owners see and edit the built-in entries under the `Qi-Absorption-Item-Modifiers` key on the [Config] page; the mechanic itself is described on [Qi Gathering].

<br/>

* * *

<br/>

#### What is not registrable

Not every extension point is a Java registry. As of 0.4.1, `CultivationAPI` exposes `register*` methods for races, techniques and Qi absorption items only. Skill tree nodes, manuals and spirit beast species are declared in Cultivation's own JSON config instead - see the [Config] page - and are not registrable from code. You can still reach all three through events: node unlocks through `CultivationEvents.PreSkillUnlockEvent`, manuals through `ItemEvents.PreManualReadEvent`, and beast species through the `species()` getter on every `BeastEvents` event.

<br/>

* * *

<br/>

#### See also

- [API Events](/cultivation/api/events/) - the ~135 hooks your registered content fires through.
- [API Reference](/cultivation/api/reference/) - reading a player's state before you act on it.
- [Races], [Techniques], [Qi Gathering], [Config], [Commands].

[Races]: /cultivation/races/
[Techniques]: /cultivation/techniques/
[Qi Gathering]: /cultivation/qi-gathering/
[The Dao]: /cultivation/dao/
[Config]: /cultivation/config/
[Commands]: /cultivation/commands/
