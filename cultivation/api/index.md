---
title: Cultivation API
description: Cultivation Mod - the public API other mods compile against
parent: Cultivation
layout: page
permalink: /cultivation/api/
nav_order: 22
---

### Cultivation API

Cultivation ships a public integration surface for other Hytale mods: `plugin.siren.API.CultivationAPI` plus ten `*Events` classes in the same package. It is the intended stable shape of the mod - prefer it over reaching into `CultivationManager`, `Cultivation` or the ECS components directly, since those are free to change between versions.

There are three things you can do with it:

- **Read** a player's cultivation state - realm, stage, global level, banked Qi, race, meditation state, skill points, unlocked nodes. See the [API Reference](/cultivation/api/reference/).
- **Register** new content that behaves exactly like the built-in content - a race, a technique, a Qi absorption item modifier. See [API Registries](/cultivation/api/registries/).
- **Listen** to (and re-tune, or veto) roughly 135 events across every subsystem in the mod. See [API Events](/cultivation/api/events/).

This page documents the API as of Cultivation **0.4.1**.

<br/>

* * *

<br/>

#### Adding Cultivation to your project

Maven `pom.xml`:

```xml
<dependencies>
    <dependency>
        <groupId>plugin.siren</groupId>
        <artifactId>Cultivation</artifactId>
        <version>0.4.1</version>
        <scope>provided</scope>
        <optional>true</optional>
    </dependency>
</dependencies>
```

Then declare it in your Hytale `manifest.json`. Cultivation's own manifest publishes itself as group `Siren`, name `Cultivation`, so the dependency id is `Siren:Cultivation`:

```json5
"OptionalDependencies": {
  "Siren:Cultivation": ">=0.4.1"
}
```

Use `"Dependencies"` instead if your mod cannot function without Cultivation present.

<br/>

* * *

<br/>

#### The entry point

Everything is static. `CultivationAPI` has a private constructor and is never instantiated - you call it straight off the class:

```java
import plugin.siren.API.CultivationAPI;
import plugin.siren.ECS.Realms.CultivationRealm;

CultivationRealm realm = CultivationAPI.getRealm(accessor, ref);
float qi = CultivationAPI.getQi(accessor, ref);
```

The read methods all take a `ComponentAccessor<EntityStore>` and a `Ref<EntityStore>` - the same pair every Hytale ECS system already has in hand. Anything that reads a component returns `null` (or 0, or Human) when the player does not have that component yet, so a fresh player never throws.

Listener and registry calls are safe from your own plugin's `setup()` in **any** load order relative to Cultivation's own `setup()`. The registries are plain static maps and the listener lists are `CopyOnWriteArrayList`s; nothing reads either until a player actually interacts with the mod, which is long after every plugin has finished loading.

<br/>

* * *

<br/>

#### Your first listener

The pattern is `CultivationEvents.onPreX(...)` to change or veto something before it happens, and `CultivationEvents.onX(...)` to be told once it is committed. Both take a `java.util.function.Consumer` of the event type, so a lambda is all you need:

```java
import com.hypixel.hytale.server.core.universe.PlayerRef;
import plugin.siren.API.CultivationEvents;
import plugin.siren.ECS.Realms.CultivationRealm;

public final class MyCultivationHooks {

    public static void register(){
        // Make the jump into Golden Core Formation cost twice as much banked Qi.
        CultivationEvents.onPreBreakthrough(event -> {
            if(event.toRealm() == CultivationRealm.GOLDEN_CORE_FORMATION){
                event.setQiCost(event.qiCost() * 2.0F);
            }
        });

        // Refuse the very last realm outright.
        CultivationEvents.onPreBreakthrough(event -> {
            if(event.toRealm() == CultivationRealm.VOID_REFINEMENT){
                event.setCancelled(true);
            }
        });

        // React once it has actually happened - the component already shows the new realm.
        CultivationEvents.onBreakthrough(event -> {
            if(event.player() != null){
                recordAscension(event.player(), event.newRealm());
            }
        });
    }

    private static void recordAscension(PlayerRef player, CultivationRealm realm){
        // your own bookkeeping here
    }
}
```

Call `MyCultivationHooks.register()` from your plugin's `setup()`. There is deliberately no unregister - a listener's lifetime is the server's lifetime, matching how plugins load once and stay.

<br/>

* * *

<br/>

#### Pages

| Page: | Covers: |
|:---|:---|
| [API Events](/cultivation/api/events/) | Every event in the ten `*Events` classes, what it exposes, and what cancelling one does. |
| [API Registries](/cultivation/api/registries/) | `registerRace`, `registerTechnique`, `newTechniqueRule` and `registerQiAbsorptionItemModifier`. |
| [API Reference](/cultivation/api/reference/) | The component-type getters and the state reads on the `CultivationAPI` facade. |

Player-facing documentation for the systems these hooks sit on top of lives on the main wiki: [Cultivation Realms], [Qi Gathering], [The Dao], [Techniques], [Sects], [Sect Wars], [Formations], [Cave Abodes], [Duels] and [Spirit Beasts]. Every number an event lets you re-tune also has a server-owner-facing equivalent on the [Config] page, and most of them mirror something on the [Commands] page.

[Cultivation Realms]: /cultivation/realms/
[Qi Gathering]: /cultivation/qi-gathering/
[The Dao]: /cultivation/dao/
[Techniques]: /cultivation/techniques/
[Sects]: /cultivation/sects/
[Sect Wars]: /cultivation/wars/
[Formations]: /cultivation/formations/
[Cave Abodes]: /cultivation/dwelling/
[Duels]: /cultivation/duels/
[Spirit Beasts]: /cultivation/beasts/
[Config]: /cultivation/config/
[Commands]: /cultivation/commands/
