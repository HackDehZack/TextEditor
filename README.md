# Progressive Web Application: Text Editor
A cutting-edge text editor that runs directly in the web browser, designed to function both online and offline thanks to the implementation of progressive web application (PWA) standards. This project showcases a high level of understanding and application of several web technologies and is built upon the concepts learned through a comprehensive development course.

short demo via localhost- [shortWalkThru.webm](https://github.com/HackDehZack/TextEditor/assets/140559436/02977ced-ce39-4530-b236-6bf1fdf68ad7)

Link to deployed app on render-  [render deployment](https://texteditorpwazackdehhack.onrender.com/)

## Features
PWA compliant, enabling offline use and installability
Data persistence using IndexedDB with idb package for robust browser-side storage
Full-stack deployment with backend support for serving the client
Bundled JavaScript using webpack for optimized performance
Service worker implementation using workbox for asset caching and offline functionality
Deployment-ready configuration for Render

## User Story
AS A developer,
I WANT to create notes or code snippets with or without an internet connection,
SO THAT I can reliably retrieve them for later use.

## Acceptance Criteria
GIVEN a text editor web application,
WHEN I open my application in my editor,
THEN I should see a client-server folder structure.

WHEN I run `npm run start` from the root directory,
THEN my application should start up the backend and serve the client.

WHEN I run the text editor application from my terminal,
THEN my JavaScript files have been bundled using webpack.

WHEN I run my webpack plugins,
THEN I have a generated HTML file, service worker, and a manifest file.

WHEN I use next-gen JavaScript in my application,
THEN the text editor still functions in the browser without errors.

WHEN I open the text editor,
THEN IndexedDB has immediately created a database storage.

WHEN I enter content and subsequently click off of the DOM window,
THEN the content in the text editor has been saved with IndexedDB.

WHEN I reopen the text editor after closing it,
THEN the content in the text editor has been retrieved from our IndexedDB.

WHEN I click on the Install button,
THEN I download my web application as an icon on my desktop.

WHEN I load my web application,
THEN I should have a registered service worker using workbox.

WHEN I register a service worker,
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets.

WHEN I deploy to Render,
THEN I should have proper build scripts for a webpack application.

## Mock-Up
The application's functionality is demonstrated through a series of images and animations showing the use of the text editor in the browser, the manifest.json file, the registered service worker, and the IndexedDB storage named 'jate'.

## Getting Started
To run this application locally, ensure that you have the following:

Node.js installed
A modern web browser that supports PWA
Basic familiarity with terminal and command-line operations

## Installation
Clone the starter code repository to your local machine.
Navigate to the cloned directory and run npm install to install dependencies.
Use npm run start to initiate the backend and serve the client.
Access the text editor through http://localhost:3000 in your browser.

## Development
The project should be structured with a focus on the MVC architectural pattern:

client/ - Holds the front-end PWA including service worker and manifest.
server/ - Contains the backend server configurations.
db/ - Manages the IndexedDB using idb for data persistence.
webpack.config.js - Configures webpack for bundling and optimizations.

## Build and Deployment
To deploy this application:

Ensure all dependencies are properly installed and the application runs locally.
Set up a Render account and follow the Render Deployment Guide to configure your deployment settings.
Deploy your application and verify its functionality on Render.
## Support
For support, refer to the repository's issues section or consult the various online communities and resources for PWA development.

## License
This project is open-sourced under the MIT license. Please see the LICENSE file for more details.

## Questions?
Reach out to me at zackseriousemail@gmail.com or on my GitHub profile with any questions, or if you personally need help deploying with render. 
