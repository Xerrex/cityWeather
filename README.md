# City Weather
- Show city Weather
- [view app here](https://cityweather-xerrex.netlify.app/)

## Tools used
* [Nodejs & npm](https://nodejs.org/en)
* [React + Vite](https://vite.dev/guide/)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwind Css](https://tailwindcss.com/)
* [Open Weather](https://openweathermap.org/) - Provides the API
* [Netifly](https://www.netlify.com/) - The deployment platform.


## Local Setup
1. Clone the code from the repo
```
git clone <repo-url>
```

2. Change into the cloned repo folder
```
cd cityWeather
```

3. Install the node modules
```
npm install
```

4. Get your api key from OpenWeather API for [current weather API](https://openweathermap.org/current)

5. Copy `envExamples` to `.env` and edit values.
```
cp envExamples .env
```

6. Run the app and follow console directives to access the app on browser
```
npm run dev
```

7. To view production build
    1. Build 
    ```
    npm run build
    ```
    
    2. Preview: `follow console directives to view in browser`
    ```
    npm run preview
    ```