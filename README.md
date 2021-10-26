## Install
```bash
npm install
```

## Developing
```bash
npm run start
```

## Building

Build the site into the `_site` folder. Make sure to replace your pathPrefix in `.eleventy.js` and in `_includes/default.njk` with the correct path. You'll also need to create a new `ACTIONS_DEPLOY_KEY` for your repo if deploying on Github Pages. Follow instructions [here](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-create-ssh-deploy-key).

```bash
npm run build
```
