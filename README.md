# Fifa-web-app

FIFA web app written with NextJS

## Get Started

To get started do the following:

1. Install NPM modules with yarn `yarn`
2. To start developing components, run `yarn storybook` to run the storybook server
3. To start developing on the web app, run `yarn dev` to run the NextJS app in dev.

## What has been bootstrapped

This repo contains a bunch of bootstrapped elements with examples to ease development. Below will be an outline of what elements have been boostrapped and what they do

### NextJS

Main framework used in this project, used alongside React and Typescript to form the core of the project. See [here](nextjs.org/) for more details

### Storybook/Components

This project uses [storybook](https://storybook.js.org/) to aid with component development. Pages should be split up into components which can be developed entirely through storybook and storybook stories. To start a storybook server run `yarn storybook`

### Tailwind/CSS modules

This project uses tailwind to quickly bootstrap css elements. Make sure you have the vscode extension `bradlc.vscode-tailwindcss` to make tailwind easier to use. This project also uses CSS modules which will scope HTML class names locally to avoid conflicts. Use CSS modules whenever using more complex CSS (i.e using media queries)

### React Query / Axios

React query is used to easily handle API requests, specifically using hooks to deal with error/loading states, caching and prefetching requests. We use axios beneath react query to make the requests.

### Zustand

Zustand is the project's global state manager see [here](https://github.com/pmndrs/zustand). Zustand is lightweight and is setup to deal with persisting global storage as well (for global state elements stored in local storage between different sessions)

### Blueprint templates

In the root directory under folder `.templates`, is a vscode plugin called `teamchilla.blueprint`. This plugin is used to quickly boostrap files in a certain format. It is used atm, to bootstrap components quickly with a main file, a storybook story and an CSS module. Feel free to add more templates where you see fit!
