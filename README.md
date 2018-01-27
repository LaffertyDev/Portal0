# Portal0
My Webserver

This is my personal NodeJs webserver. In particular, I wanted to host a few things here:

- Links to all relevant projects
- Brief descriptions and summaries of my projects
- A Blog (that I may or may not write in)
- Hosting area for my Dungeons and Dragons content
- Relevant tools that I have created to make my life easier
- Completely move away from LinkedIn as my professional area (why use a linkedin as a web developer? seems awful)

[Guide Used to setup NodeJs server](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

[Guide used to harden SSH](https://thepcspy.com/read/making-ssh-secure/)

[Guide used to setup teamspeak](https://www.digitalocean.com/community/questions/setup-teamspeak-server-ubuntu-15-04)

[CI Guide](http://thesociablegeek.com/node/github-continuous-deployment-to-a-raspberry-pi/)

[HTTPS re-cert w/ let's encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)

# Running

1. run `npm install --dev`
2. run `npm run debug` to start debug mode (and have webpack see changes as they come in)

# Deployment

1. scp via `webuser` user account
1. copy files into `nodeserver` directory of `webuser`
2. run `npm install` (Note: do not need dev if you precompiled your data) (Note: this is dirty and needs cleanedup)
3. run `sudo pm2 restart nodeserver`
4. refresh website and the changes should populate

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

# Site Design & Layout todo

1. Setup basic mobile media queries
1. Setup grid / flexbox layout
1. Verify mobile page works & flows
1. Learn what the meta viewport property does cross-browser
1. Wrap the header float'd list in a div so it wraps properly
1. fix the footer so it wraps intelligently
1. [Unicode lists](https://css-tricks.com/ordered-lists-unicode-symbols/)

# Content Todo

1. get repeatable background setup on a few pages
1. setup icons
1. Get the girlfriend to design me a logo
1. Include a picture of me
1. Import & fix all of my old school projects
1. make timeline of work experience because that is definitely dank
1. setup contact info request w/ google recaptcha or something similar

# devops todo

1. Setup auto-deploy
1. setup some form of analytics to see website hits
1. include robots.txt file
1. setup HSTS
1. setup shim for html5 on legacy browsers (why does edge not support details & summary)
1. setup teamspeak to reboot on server reboot
1. Setup separate git project for DnD worldbuilder & how to auto import it when changes are made

## School Projects to import:
Write project for Senior Design
Write project for AI Project
Fix ai project
Write project for Graphics interpolation project
Fix graphics interpolation project
Write project for Graphics 