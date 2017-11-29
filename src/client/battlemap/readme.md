# Purpose

- I dislike existing solutions to Tabletop RPG digital battlemaps. Most are clunky, laggy, and unyieldy with layers of crap added onto them
- Specifically, performance is bad; manipulating the editor is bad; importing assets is bad; lack of layers is bad
- Must have solid performance capable of running on a potato
- Must be able to have an arbitrary number of layers with very fine-grained control of them baked in

# Goals:

I believe that a new, integrated, performant Tabletop RPG system can be built that is more performant, feature-filled, and accessible than current offerings. Embracing complex image-editing tools, web technologies, and advanced game tooling support would yield a very good product that would fill many adventures will joy and fun.

This section outlines the features in ascending order of priority

0. Tier0 features are fundamental and the entire product is worthless without these
1. Tier1 features are critical and is required to demonstrate even the most basic functionality of the product
2. Tier2 features are high-value gameplay features, which are required to make a functional product
3. Tier3 features are medium-value gameplay features that are "Standard" on other products
4. Tier4 features are low-value features that will add value to the product
5. Tier5+ features are essentiall stretch goals, and are only included for brevity purposes to illistrate future-vision once all other features are implemented.

The core paradigms of the program should be:

- Performance-first
- Support all form-factors (Mobile & Desktop)
- Support accessibility features (Vision impaired, hand-impaired, screen-assist, hearing-impaired)
- Don't be an Asshole

## Misclaneous Ideas That Need Sorted

- What if you could bind an object to a local grid, and if you move that local grid the object moves with it?
    - What if you could bind an environmental effect to give the appearance of movement, e.g. on a boat or an airship?
    - What would happen if two local grids don't line up?
    - How to define a local grid?
- Ability to "path" a token, so that that token can automatically move (e.g. a Guard on guard patrol for out of combat)
    - This should be used like a "shift click" system from RTS games
- Ability to specify custom borders for grids (https://www.reddit.com/r/battlemaps/comments/7dceui/new_themes_just_released_for_mipui_my_free_online/)
- "Traits" on objects, such as Lootable
    - User right clicks on chest token, "add trait", "lootable", "Short Sword +1"
- Bind arbitrary actions to "tables"
    - User right clicks on chest token, "add trait", "lootable", "bind to LOOT TABLE 1-4 NO MAGIC"
    - User right clicks on art, "show overlay", "My Custom Plot Window #5"
    - User right clicks on goblin token, "Add Trait", "Talk", "Trigger" -> Death / HP 0 -> "Action" -> "Death Table - Goblin"
- "Context Menu" actions should use tags, such as e.g. "Lootable", "Container", "Storage", "Pouch", "Bag", all go to the same feature
- Character Sheets - drag and drop skills to use them
- Define Design Methodology, under what cases should UI elements be usable for consistency? e.g. when is a feature context-menu supported, drag n drop supported, mobile-friendly, etc..
- UI element idea for "adding"
    - Rendered as "Add a <>" e.g. "Add a token", "Add an item", etc..
    - Once clicked / touched, replaced with combobox with focus
    - Maximum of 10 items rendered with scroll (hard cap on 100 items?)
    - Bottom-most option outside of scroll range on the viewport should be "Advanced", which opens the wizard for the associated thing
- Smart pre-fabrication features, such as a randomized goblin
    - "Monster Type" -> Goblin
    - "Str Range" -> 10 + 1d4
    - "HP Range" -> 4x6 + constitution


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

This is a Tier0 feature

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

This is a Tier3 feature

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

## Content Sharing Features [Core]

Importing and exporting is similar to the Steam marketplace, allowing creators to seamlessly build out FREE content. No content should ever be purchased in our platform because purchase-grade marketplace content leaves a bad taste in my mouth. Rather, content creators using our core editing features should be able to trivially output their work into the marketplace with Media Management and Exporting features.

Importing features are a Tier5 feature.

1. Importing pre-fab tokens, maps, and gameplay from other groups
1. Exporting pre-fab tokens, maps, and gameplay to other groups
1. Ability to categorize imported and exported objects and rank them up / down

## Playing Support

This feature is actually "Playing the game" and what would be considered "Minimum Viable" for playing a tabletop RPG on a battlemap.

These have various Tiers and need to be set apart in their own tech documents

1. Generic Token Support (Tier0)
1. Monster token support (Tier1)
1. Player token support (Tier1)
1. Account support (Tier2)
1. Player Character Sheet Support (Tier2)
1. Assign character to player (Tier2)
1. Turn-order counter (Tier3)
1. Chat window and support (Tier2)
1. Group Audio support (Tier3)
1. Group Video support (Tier4)
1. Dice support (Tier1)
1. Token Aura Support (Tier4)
1. Table Support (e.g. wild sorceress wild magic table) (Tier4)

## Window Engine Support

There should be a trivial way of rendering and manipulating windows in the game. E.g., "pop out" character sheet. Windows should have an underlying, selectable, theme.

## Contextual Menu Support

There should always be a contextual menu for any given action. E.g. right click on a player token:

- Add light source
- Change image
- Attack (choose weapon)
- View character sheet
- Add initiative / turn
- Kill
- Create spell effect ontop of
- Whisper (prompt)
- Play sound for (prompt)
- Give item (prompt)

Right click on a tile:

- Add Token (choose token / texture / object, with context menu)
- Create Effect (choose effect)
- Add trigger (while editing)
- Cast Spell (choose and see effects / affected creatures)

Additionally, the core "Chat" system should have chat commands that can do all of the contextual menu options. This way, core functionality could be automously scripted from users and macros could be written to further automate.

The contextual menu should be a "Tier1" feature for the simple fact that it should be heavily prioritized as a quick way of accessing things

## Smart Clipboard Support

Users should be able to use the clipboard to manage maps and quickly copy and paste or move effects. E.g., click on a token, copy and paste makes duplicate token. Click on an audio file, copy and paste will insert file contextually.

## Permissions Support [Core]

1. Granular permissions for tokens and actions
1. "Owner" can add/remove players, can add other people to manage campaign

## System-prefabs [Content]

Art assets are a requirement. It is frustrating that Roll20 does not have free art assets to build a campaign from.

Prefabs are Tier4 features. Unnecessary but VERY preferred. There should be several distinct art designs.

1. Player Tokens
1. Walls
1. Floors
1. simple objects (Lamps, Chests, Chairs, Tables, Beds, Torches, Corpses)
1. Monster tokens
1. Spell effects

TOKENS
- 1 token for every class/gender/race combination
- 1 token for every monster in the DnD5e monster manual
- Variety of tokens for low-level hoard monsters (Goblin, Orc, Zombie, Kobold)
- Variety of humanoid tokens (Bandits, Peasants, Farmers, Nobility, Guardmen, Knights)
- Variety of object tokens (Potions, Chests, Bookshelves, Beds, Tables, Chairs, Campfires)

MAP TILESETS
- Walls
- Floor
- Water

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

## Object Scripting Support [Core, Editor]

Typically, objects in a battlemap are just simple flat textures that, themselves, have no programmability into them. Granted, this should be the "Default" case there should still be objects that can have special behavior associated. Our core "Object" system should handle this, and be distinct from "Painting".

At minimum, we should support:

- "Clickable" objects (that players / DM masters can click to have an effect happen, such as Text being printed)
- "Collision" objects (that fire an action when collided upon by Enemies/Players)

## Lighting Engine Features

1. Real-time lighting
1. Mark objects that "Collide" with light
1. Generate "light source"
1. Specify colours for "Light source"
1. Global Illumination Support for "sun" or "moon" lighting which creates smart shadows

## Scheduling Features

If I make an app, scheduling should be a critical feature. Built-in reminders for play sessions, DM sending notifications to players

1. DMs should be able to set a recurring time for their campaign
2. Users receive periodic notifications about upcoming games
3. DMs should be able to cancel a game and palyers should receive a notification
4. Players should be able to accept or deny upcoming game notifications, allowing everyone to see the schedule
5. DMs should be able to ask players when the next game / all games should be held

## Campaign Support Features

Campaign support would allow Dungeon Masters and Players to view, edit, and manage their campaign history. It ranges from adding chapters and story tidbits to a full-blown worldbuilding engine. The design should be reminiscent of a Wikipedia engine and OneNote.

Campaign support is a Tier5 feature.

1. Support for multiple campaigns that you can select from
1. "Smart link" game ideas, "the dragon Parthanax assaulted the Grey Beards at Skyrim" links entities Parthanax, Grey Beards, and Skyrim
1. Add text and game objects
1. Add histogram for campaign
1. Add automated journal logging for campaign

## Item Builder Features

Trivially make items to give to players. Image, name, description, effects, stat-changes, etc..

## Administrative Features

Administrative features are the core controls that we would need to manage our own product.

Administrative features are a Tier2 feature

1. Give free time to players
1. Give codes to unlock free time
1. Delete people
1. reset passwords
1. lock people from accounts
1. lock or remove content, ban users

## Business Plan

1. Evaluate project schedule, develop excel timelines w/ estimated effort and task logs
1. Find funding (personal, venture, friends & families, bank)
1. Build financial model (Monthly subscription, one-time license, monthly subscription per-player / per group etc..)
1. Determine market floor / cap
1. Evaluate ongoing costs and licenses that would be required. Bandwidth, database storage, etc..
1. Evaluate artist costs for 2d art
1. Evaluate artist / modeller cost for 3d art
1. Evaluate UI designer fees & cost
1. Evaluate marketing costs and expenses
1. Evaluate further Kickstarting plans and realistic goals

## Supported Systems

1. DnD5e SRD
1. Pathfinder
1. Trevor's RPG (ARCLite)
1. Star Wars RPG
1. Pathfinder Star Runner RPG
1. Arbitrary WarGame support
1. Arbitrary Tabletop Game support

### Super-stretch features

These are really, really cool features that would be fun / awesome to work on. But otherwise add no immediate value to consumers and justifying their cost would be very difficult.

#### Autogenerated Content

1. Players can "autogenerate" a dungeon
1. Players can "autogenerate" a campaign
1. Players can "autogenerate" a world
1. Players can "autogenerate" monsters
1. Players can "autogenerate" players

#### AI playmate

1. AI autogenerates a dungeon and uses monsters to attack
1. AI can move and play along with players

#### Playable Tutorials

One of the issues with DnD groups is not understanding the core rulesets (because people don't read). Having a playable tutorial would help streamline Dungeons and Dragons.

#### Literal Game Engine Support

Allow the creation and management of browser-based game using all of the tools created above.

#### OpenMap Integration

A user-editable OpenMap interface that allows users to quickly move around a world or battlemap with ease.

## Tutorials following

- http://catlikecoding.com/unity/tutorials/hex-map/part-1/

### Marketing / Competition

- Roll20 (Online map editor & gamespace)
- Realmworks (Campaign Managing Utility) http://www.wolflair.com/realmworks/features/the-future-of-realm-works/
- Realmware (App map editor) https://www.kickstarter.com/projects/realmware/realmware-tabletop-tools
- WorldAnvil (Online campaign managing utility)  https://www.worldanvil.com/#features
- Inkarnate (Online World map editor) https://inkarnate.com/
- Mipui (Online battlemap maker) https://www.mipui.net/app/
- Profantasy (App-based map editor) https://www.profantasy.com/
- Fantasy Grounds (App-based map editor & gamespace) (Steam)
- Dized (Board game education app) https://dized.com