# music-app

Provides a SPA to browse through a list of albums and listen on

## Installation and running locally

To install dependancies run
`yarn`

- To get the app running locally for the production version `yarn start:prod`
- For development and hot-loading `yarn start:dev`

## Tech

1. Music app was developed using Typescript, React and React Context.
2. Babel was used for the transpilation of the app and webpack for the bundling. No cli was used for the build of this app.
3. No CSS frameworks were used for this project, sass was used as processor.

## Assumptions

1. On the Album list page the user can listen to all the songs from all the albums.
2. On the Album info page, the user can select a song and listen to it or if no song is selected and the user clicks the play button then all the tracks list is playing.

## FUTURE IMPROVEMENTS

1. Fix the progress bar to be more interactive
2. Iterate upon state management
3. Iterate upon track next and previous
4. Improve upon the design of both pages and implement mobile view.
