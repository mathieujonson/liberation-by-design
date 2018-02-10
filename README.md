## Liberation By Design

### Getting Started

To get started, we'll need to install [node](https://nodejs.org/en/download/).  We'll also need Firebase CLI installed:
  `npm install -g firebase-tools`
  
Clone and install the repo.  Navigate to the directory where you want the project to live, and run:
  `git clone https://github.com/mathieujonson/liberation-by-design.git && cd liberation-by-design && npm install`


### Common commands

- To get a local up and running, we'll need to start two processes in terminal windows:

  `npm run watch-css` in the first window
  
  `npm run dev` -     in the second window

- To deploy to production we'll need to build first, then deploy:

  `npm run build`
  
  `firebase deploy`

### Organization

- `App.js`:     main entry point to the app, and it contains all of our routes.  If you're creating a new "page", you'll want to create and import the new component, and add a route to it.
- `main.scss`:  main SASS file, but mostly imports other style sheets.  Generic site-wide styles go here, otherwise create a `partial` or `page` SASS file and import it here.
- `components`: directory holding all components.  Each "page" should have its own directory within this folder component, with child components grouped in that folder.  Any components that can be shared between pages should go in the "Shared" directory.

