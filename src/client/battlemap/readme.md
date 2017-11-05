# Purpose

- I dislike existing solutions to Tabletop RPG digital battlemaps. Most are clunky, laggy, and unyieldy with layers of crap added onto them
- Specifically, performance is bad; manipulating the editor is bad; importing assets is bad; lack of layers is bad
- Must have solid performance capable of running on a potato
- Must be able to have an arbitrary number of layers with very fine-grained control of them baked in

# Goals:

This section outlines the features in ascending order of priority

0. Tier0 features are fundamental and the entire product is worthless without these
1. Tier1 features are critical and is required to demonstrate even the most basic functionality of the product
2. Tier2 features are high-value gameplay features, which are required to make a functional product
3. Tier3 features are medium-value gameplay features that are "Standard" on other products
4. Tier4 features are low-value features that will add value to the product
5. Tier5+ features are essentiall stretch goals, and are only included for brevity purposes to illistrate future-vision once all other features are implemented.

## 2d Paint Editor Features [Core, Editor]

First, "battlemap" is a 2d / 3d image editor!!! We need very rad 2d paint editor features that would make Photoshop blush. The user interface for this must be perfectly intuitive.

This is the first priority, Tier0. Anything else is unimportant.

1. "Paint" and "Draw" with user-inputted colours
1. Import "Brushes" and "Textures" to draw with
1. "pick" colours, "fill"
1. Import "objects" that can snap to center of tile, walls of tile
1. "Infinite" map size support

## Camera Features [Core]

Camera controls must be top-tier, ESPECIALLY in a web-browser WebGL game! The controls can get very complicated and convuluted, and as such significant thought must be given to how users interface with the camera.

Camera support is a Tier0 Feature.

1. Camera "Drag" support
1. Camera "Zoom in" / "Zoom out" support

## Tile Features [Core]

Tiling is the "Core" component of tabletop RPGs, given that everything affects tiles or distances.

Tiles must interface well with painting tools and layers. It is very frustrating when tiling is done wrong or doesn't have appropriate tooling, e.g. import a map that already has tiles and its difficult to draw on them. Or you want walls to rendered ABOVE tiles.

This is a Tier1 feature

1. Arbitrary "tile" support (3,4,6 edges, etc..)
1. Intelligent "Edge" detection
1. Tile rotation, e.g. support isometric drawings
1. Editor-supported "Tile Drawing"
1. Assign "Grid Unit" size (e.g. 1 hex -> 5 feet)

## Layer Feature Ideas [Editor]

Layers are the very critical feature that most 2d image editors lack. Gimp has support, but its overtly complex and not user friendly (but very powerful). I'm aiming to strike a very good balance with the layering features.

Layers are a Tier1 and support for them must be top-notch.

1. Add or remove arbitrary layers
1. Very few static layers -- "Grid" layer, "Token" layer, "Player Drawing" layer
    - These are the layers the player interact with
1. "Default" layers are added -- "Map" layer, "DM Info" layer, "Player Info" layer
1. "Layer Groups" -- useful for importing
1. "Merge" and "Copy" layer support
1. Move layers up or down
1. "Clear" a layer

## Object-Grouping support [Editor]

Object grouping is a "Nice" thing for image editing, which lends itself to "Dynamic" interfaces quite smoothly.

It should be quite easy to "Draw" or "Make" a "Chest" or a "Table" in the editing tools, and then copy and paste the source several times and, when it is updated, it should update everywhere. E.g., moving a bottle that clipped a plate should be done in one place and then updated everywhere. Or making a wall texture and updating it to be more HD.

This is a Tier4 feature.

1. "Object Group" library
1. Add/remove object groups
1. Dynamically-generated "Object-Grouping" support; e.g. a dynamic "Table" which differs its contents to add significantly more content

## Distance Calculator Support [Core]

Distance is a pain to calculate manually in tabletop RPGs and is something that we can Automate. It is absolutely used in both the Editor and Play space.

This is a Tier3 Feature

1. Find distance between multiple points
1. Simulate sphere / cone / line tiles affected by spells / abilities

## Hotkey Support [Core]

Hotkeys are a must, but most systems don't support mobile or don't support key rebinding.

It would be awesome if we had Keybinding Support, Gesture Support, and custom tools to change keybinds / gesture binding on a whim

This feature ranges from Tier2 to Tier3 

1. Static hotkey support
1. Distinct per-person rebinding of keys and hotkeys, gestures
1. Multiple key / gesture support per-action

## Persist Features [Core]

This is a standard feature. Considered Tier1. All actions should have undo/redo support, including character sheets and should be driven per-person.

Handle merge issues with tree branches.

This is a Tier1 feature.

1. Save
1. Load
1. Make new
1. Undo / Redo
1. Undo / Redo with Branch support
1. Export as PNG
1. Export as GIMP file
1. Export the full Database

## Networking Support [Core]

Given that this is a multiplayer supported game, all network support must be handled. Online play is required. Target networking should support a shitty 3g connection

This is a Tier1 feature.

1. Synchronization, loading, rejoining, retransmitting, save bandwidth

## Offline Support [Core]

Offline support can be enabled with little issues. The hard part is DRM and handling update logic.

This is a Tier1 feature given that it will set us apart from everyone else.

1. Local-save state
1. Merging of state when network resumes
1. Updating application
1. Installing application
1. Linux/Windows/OSX support

## Media Management [Core]

Managing imported, created, or other assets is very difficult in most systems. We need our media manager to be very straightforward and easy to use, with powerful features underneath.

This is a Tier2 feature.

1. intelligent categorization of media items (Maps, Battlemaps, Characters, Tokens, etc..)
1. intelligent search and filter options
1. Attach audo cues to objects that can be triggered on scenarios


## Playing Support

1. Account support
1. Assign character to player
1. Turn-order counter
1. Chat window and support
1. Group Audio support
1. Group Video support
1. Dice support

### Token Features

"Tokens" are special objects that are used in the play space. They should have ties to the underlying system being used. Players and Monsters should be able to control their own tokens.

Tokens can be rendered in the play space. Tokens can be integrated with player sheets.

Tokens are a Tier2 feature.

1. Import token
1. Move tokens
1. Token "Auras", apply distinct colour

### Character Support

Characters are the highlight of any tabletop RPG, as such Characters must be a first-class citizen. A "Character" has special controls to interact with the game world, and is typically controller by a player.

Characters are Tier1 Features

1. Character sheet support
1. Bind character to Token
1. Edit character sheet

### Table Support

Roll tables, e.g. wild sorceress magic table

## Permissions Support

1. Granular permissions for tokens and actions
1. "Owner" can add/remove players, can add other people to manage campaign

## System-prefabs

Art assets are a requirement. It is frustrating that Roll20 does not have free art assets to build a campaign from.

1. Player Tokens
1. Walls
1. Floors
1. simple objects (Lamps, Chests, Chairs, Tables, Beds, Torches, Corpses)
1. Monster tokens
1. Spell effects

## Z-Index Support

1. Invisible "drawing" of underneath layers in 2d mode

## 3d Paint Editor Features

1. Pseudo-3d support w/ z-indexes (dwarf fortress)
1. True 3d support (xcom)
1. Import pre-fab objects
1. Import 2d images as "Tokens" which are braised
1. Import 2d images as "Cubes" which replace their texture intelligently
1. "Smart" grid detection
1. Intelligent Camera Controls and movement

## Game Engine Features

1. "Spell" effect, sprites & animation that anyone can put down
1. Music audio support
1. Attach audio to game object
1. Animation of tokens, token effects
1. Zoning effects
1. Players "path" their token so they can trigger traps and animate their path
1. Scripting support
1. Literally build a game engine that people can (This is Jordan's Dnez program)

## Lighting Engine Features

1. Real-time lighting
1. Mark objects that "Collide" with light
1. Generate "light source"
1. Specify colours for "Light source"

## Campaign Support Features

1. Support for multiple campaigns that you can select from
1. "Smart link" game ideas, "the dragon Parthanax assaulted the Grey Beards at Skyrim" links entities Parthanax, Grey Beards, and Skyrim
1. Add text and game objects
1. Add histogram for campaign
1. Add automated journal logging for campaign

## Importing Features

1. Importing pre-fab tokens, maps, and gameplay from other groups
1. Exporting pre-fab tokens, maps, and gameplay to other groups

## Administrative Features

1. Give free time to players
1. Give codes to unlock free time
1. Delete people
1. reset passwords
1. lock people from accounts
1. 

## Pay Support

1. Find funding (personal, venture, friends & families, bank)
1. Build financial model (Monthly subscription, one-time license, monthly subscription per-player / per group etc..)

## Supported Systems

1. DnD5e SRD
1. Pathfinder

### Super-stretch features

#### Autogenerated Content

1. Players can "autogenerate" a dungeon
1. Players can "autogenerate" a campaign
1. Players can "autogenerate" a world
1. Players can "autogenerate" monsters
1. Players can "autogenerate" players

#### AI playmate

1. AI autogenerates a dungeon and uses monsters to attack
1. AI can move and play along with players

## Tutorials following

- http://catlikecoding.com/unity/tutorials/hex-map/part-1/

### Marketing / Competition

- Roll20
- Realmworks http://www.wolflair.com/realmworks/features/the-future-of-realm-works/
- Realmware https://www.reddit.com/r/dndnext/comments/7air6o/hey_guys_were_realmware_and_were_building/