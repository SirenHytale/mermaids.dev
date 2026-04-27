---
title: Getting Started
description: Mermaids API - Getting Started
parent: Mermaids API
layout: page
permalink: /api/getting-started/
nav_order: 1
---

### First add Mermaids to your Project:

Make sure you update the version number to the version you downloaded.

Maven `pom.xml`:
```
<dependencies>
    <dependency>
        <groupId>plugin.siren</groupId>
        <artifactId>Mermaids</artifactId>
        <version>2.5.1</version>
        <scope>provided</scope>
        <optional>true</optional>
    </dependency>
</dependencies>
```

Gradle `build.gradle`: (untested)
```
dependencies {
    compileOnly 'plugin.siren:Mermaids:2.5.1'
}
```
<br/>

### Next, update the Hytale manifest:

Optional Dependency `manifest.json`:
```json5
"OptionalDependencies": {
  "Siren:Mermaids": "*"
}
```

Required Dependency `manifest.json`:
```json5
"Dependencies": {
  "Siren:Mermaids": "*"
}
```

<br/>

#### Official project that used Mermaids as a Dependency:
Check out the [source code](https://github.com/meFroggy/OrbisOrigins-X-Mermaids-Hytale-Plugin) for [Orbis Origins X Mermaids](/mermaids/compatibilities/orbis-origins/) mod!