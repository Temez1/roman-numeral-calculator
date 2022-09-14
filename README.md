# Roman Numeral Calculator

## This project uses

- [React](https://reactjs.org/), a JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/), a React framework that helps the app development
- [TypeScript](https://www.typescriptlang.org/), for adding types to JS
- [Testing library](https://testing-library.com/), for testing UI components
- [Romanize](https://github.com/jonschlinkert/romanize), for converting numbers to roman numerals

## Getting started

To install the libraries this project uses you need [Node.js](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your local development environment. After that run

```bash
npm i
```

to install the libraries. Now that you have the libraries, you can start developing the app by running the development server with

```bash
npm run dev
```

It should give you a link to <http://localhost:3000/> where you can see the app up and running.

## About the project structure

The pages directory contains the UI components. In the index file, you can find the Roman Numeral component that renders on the home page.

The public directory contains the Favicon Icon for the project that you can see in the browser tab when you run the app.

The rest of the files are configuration files for the project, except the index.test.tsx.

## Testing

The files with ".test.tsx" ending contain the tests corresponding to the filename being tested. You can run all the test files with

```bash
npm run test
```
