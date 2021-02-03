# Covid-19 React App

- This is a coronavirus application built in ReactJs, styled with TailwindCSS and deployed to Netlify.
- The application uses the Coronavirus COVID19 API from Postman which is available at [https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712]
- The main link we will use to fetch our JSON data is [https://api.covid19api.com/summary] and we will fetch our data using Axios which is an npm package that you can use in place of the default fetch API in the browser.

## Status

Live link: https://covid-19-web-app-tsb.netlify.app

## Requirements

1. Install react-icons for our icon library. Run `npm install react-icons --save`
2. Install axios to handle data fetching. Run `npm install axios`
3. Get the tailwind CDN from their website, or from [https://cdnjs.com] and search for `tailwindcss`. If you do not want to use the tailwind CDN, you can install tailwindcss in your workspace using `npm`. For the complete instructions, head over to [https://tailwindcss.com/docs/installation] and select _React App_ to get the instructions for your React Application.

### create-react-app

- Canvassed using create-react-app and the cra-template-pwa to install the serviceworker files by default which React no longer does.
- You can clone the repository and run `npm install` in order to install all the dependencies as well as the files needed for the PWA, or you can run `npx create-react-app your-app-name --template cra-template-pwa` to install the serviceworker files for you.
- NOTE: `--template cra-template-pwa` is optional if you don't want the serviceworker files. For me, I need them because I would like to transform this application into a Progressive Web App.
