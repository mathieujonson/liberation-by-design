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

