# Personal Website

This is my personal website.

## CI & Server Setup

Domain is registered through Namecheap.

Hosting is through Digital Ocean

## Developing

Pre-reqs:

1. NPM and NodeJS
2. Python3

Running:

1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Server the `www` directory as the root directory of a webserver (`python3 -m http.server`)

## Deploying

Add the remote to your local git.

`git remote add prod ssh://lafferty@lafferty.dev/opt/website-node/prod/prod.git`

Then just do `git push prod master` to deploy.

## Deployment Explained

Deploying the Server isn't too complex, but it does have a lot of interlinked parts. At its core, we're using Git, NPM, and SSH for deploying. Most of it is pretty magical.

First, I setup post-receive hooks on the server. I followed this guide on [Deploying with Git and PM2](https://medium.com/@aunnnn/automate-digitalocean-deployment-for-node-js-with-git-and-pm2-67a3cfa7a02b)

This worked for a while, but eventually I wanted to splitup my website project into several repositories. I had a few reasons for this that aren't relevant here. My core problem was that my other repos are private repositories, so npm can't access them by default. Additionally, my Github is locked to 2FA, so you can't prompt for a username/password to pass that to Github.

What I ended up doing was taking advantage of Github deployment Keys. You can read about those here [Managing Deploy Keys](
https://developer.github.com/v3/guides/managing-deploy-keys/)

After generating the Keypair, however, I now needed to figure out how to get node / npm to see the newly generated key and authenticate with it. In comes SSH config to the resuce!

1. https://superuser.com/questions/232373/how-to-tell-git-which-private-key-to-use
2. https://gist.github.com/zhujunsan/a0becf82ade50ed06115
3. https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/
4. https://stackoverflow.com/questions/22768517/how-to-manage-one-only-key-per-each-git-repository

I don't currently know how to have separate keys for Github, that node/npm can use, with the SSH config.

1. Trying to use `github` instead of `github.com` in `package.json` means node will resolve it as a relative URL instead of a domain URL
2. I don't know if I can use the `git` protocol during development to download dependencies. Pretty sure windows git utility automagically resolves everything

Reminders for myself on how to set this up again in the future:

1. Setup post-receive hook and multiple git repos on server
2. Setup remote origin on my dev machine to point to the prod server
3. Setup deploy SSH keys on the server (with read access)
4. Setup SSH Config so node resolves the SSH keys correctly
5. On windows, don't forget to enable the `ssh-agent` windows service -- check services!
6. On windows, don't forget to make a config identify file

## Adding a View

Too hands on, can automate this.

1. Add `.hbs` file in `/views` directory
2. Add link to URL in the `header.hbs` file
3. Add compilation file to `build.js` file
4. (If Javascript) Add compilation info to Rollup

All of this could 100% be automated away.
