# Covid-19 React App

- This is a coronavirus application build in ReactJs, styled with TailwindCSS and deployed to Netlify.
- The application uses the Coronavirus COVID19 API from Postman which is available at [https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712]
- The main link we will use to fetch our JSON data is [https://api.covid19api.com/summary] and we will fetch our data using Axios which is an npm package that you can use in place of the default fetch API in the browser.

## Status

- Currently the app is still in development. Check back later for the live link.

## Requirements

1. Install react-router-dom to manage our in-app routing. Run `npm install react-router-dom`
2. Install react-icons for our icon library. Run `npm install react-icons --save`
3. Install axios to handle data fetching. Run `npm install axios`
4. Get the tailwind CDN from their website, or from [https://cdnjs.com] and search for `tailwindcss`. If you do not want to use the tailwind CDN, you can install tailwindcss in your workspace using `npm`. For the complete instructions, head over to [https://tailwindcss.com/docs/installation] and select _React App_ to get the instructions for your React Application.

### create-react-app

- Canvassed using create-react-app and the cra-template-pwa to install the serviceworker files by default which React no longer does.
- You can clone the repository and run `npm install` in order to install all the dependencies as well as the files needed for the PWA, or you can run `npx create-react-app your-app-name --template cra-template-pwa`
