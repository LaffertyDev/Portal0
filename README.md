# Portal0
My Webserver

This is my personal NodeJs webserver. In particular, I wanted to host a few things here:

- Links to all relevant projects
- Brief descriptions and summaries of my projects
- A Blog (that I may or may not write in)
- Hosting area for my Dungeons and Dragons content
- Relevant tools that I have created to make my life easier
- Completely move away from LinkedIn as my professional area (why use a linkedin as a web developer? seems awful)

## Design Considerations

1. Mobile friendly
2. Try to use as few packages as possible*
3. Attempt to design and build website without using a template
4. Attempt to build things using my new core paradigms, good coding styles, and clean html/css
5. Maintain documentation and workflows as I build the website, instead of pushing them off

> Notable Exceptions are MongoDb, Express, Angular, and Nodejs (MEAN)

## Reasoning

1. So I can learn more fundamentals of web technologies first and foremost
2. Improve my design skills with hands-on experience

## Installed Packages

- NodeJs
- AngularJs
- Express
- Sass
- Handlebars (HBS)

## How it all Works

ExpressJS acts as the actual webserver, allowing me to dynamically serve content (static files, webapi, etc.).

When a request hits one of my endpoints, the app will compile the handlebars code and send it as an html file to the client.

On dev, I have SCSS middleware which will automatically compile whenever my routes are hit

Build:
1. scss is compiled & put into Client/content/css/main.css
2. typescript is compiled & bundled (using webpack) to Client/content/scripts/bundle.js

Dev:
1. webpack is setup to run concurrently, will auto compile typescript files when changes are detected

Startup:
1. Register all node dependencies
2. Start expressjs server
3. Load middleware

Server:
1. Endpoint is hit, compile associated .hbs file (converts to html), send back to client
2. Endpoint is hit, send static files

DnD Webapp:
1. React & react dependencies are loaded from server
2. React loads, initializes components & binds to DOM

### Setting up React & Typescript

1. Install react/react-dom dependencies
2. Convert all files to .ts/.tsx
3. Install webpack dependency (ts react will NOT work without it)
4. Install awesome-typescript-loader (again, ts react will NOT work without it)

# Todo

1. Further flesh out site design & layout
1. Import & fix all of my old school projects
1. Cleanup resume page
1. Get the girlfriend to design me a logo
1. Include a picture of me
1. Setup TLS
1. Verify mobile page works & flows
1. Setup auto-deploy
1. Setup separate git project for DnD worldbuilder & how to auto import it when changes are made
1. Figure out how to auto commit / sync using Visual Studio Code w/ Github

## School Projects to import:
Write project for Senior Design
Write project for AI Project
Fix ai project
Write project for Graphics interpolation project
Fix graphics interpolation project
Write project for Graphics 

## Responsive Todo

1. Learn what the meta viewport property does cross-browser
2. Wrap the header float'd list in a div so it wraps properly
3. fix the footer so it wraps intelligently

## Worldbuilder todo:

1. add customization options for constant values
1. improve model support for non-Parisian towns/cities
1. build name generator

### Worldbuilder Stretch:

1. Generate city / town / village names
1. Generate building names
1. Generate people names
  * Generate Castle details
1. Name, size, fortifications, previous sieges?
1. Specify region naming style
1. Custom table importing
1. Generate roads
1. Generate terrain features
  * Lakes / rivers / forests / hills / mountains
1. Visualize generated map
1. Visualize generated cities / towns
1. Specify & auto generate region type
1. Mountainous, grassland, swamp, etc..
1. Regions influence population density / agricultural slider
1. Generate region type
  * Multiple biomes per region
1. Sub-biome generation
1. Climate generation
1. Culture generation
1. Caravan & Trade generation
1. Town import / exports
1. Legends generation
1. Epic monsters
  * History
  * Epic items & swords
  * Etc..
1. Editable workspace
  * Edit terrain features, canvas, legends, world names, building names, etc..
  * Dungeon generation
  * Encounter generation
1. Export features
  * Export into pdf / image / word doc / csv spreadsheet / gimp / photoshop

#### WorldBuilder Editor Stretch stretch

1. Attach a timeline
  * Timeline is searchable
  * Timeline automatically pulls data from places, regions, events, people, items
1. Add ‘Places’
  * ‘City of Wardeep’
  * ‘Exalted Plains’
  * Attach People, Objects, and Events to Places
1. Add ‘Regions’
  * Regions are defined by an area on the map
  * Automatically link places, people, events, and objects
  * Searchable
  * Regions may overlap
1. Add ‘Events’
  * Person did this
  * Object was created
  * War happened here
  * Data
  * Name of event
  * Date of event (or range)
  * Description of Event
  * <Node> did <Action>
1. Add ‘Objects’
  * Items
  * Magical Weapons
  * Cannons
  * Artillery Equipment
  * May be owned by places, people
  * may be associated with events
  * Data
  * Name of object
  * Date created (or range, for destroyed)
  * Description of Object
  * Associated Places
  * Associated People

1. Add ‘People’
  * Ancestors
  * Husbands, Wives
  * Children
  * Jobs
  * Names
  * Residential Locations
  * Friends
  * Enemies
  * Killed by
1. Sigil Generator
  * Automatically creates images and icons for organizations, groups, kingdoms
  * Can edit generated sigils
  * Each sigil consists of “pieces” which are images that you can place and color
  * Pieces are loaded dynamically from a list and imported into the application

# NPC Generator Ideas

1. Pick race
1. Pick age threshold
1. Pick name type
1. Generate