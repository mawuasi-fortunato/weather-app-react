# Weather App

The Weather App is part of ASMR Programming [100 Days of JavaScript Coding](https://www.youtube.com/watch?v=DfDPJqD3FjI&list=PLkC56g8fboI0HghByzVuD2Vz8ROUXfF_j&ab_channel=AsmrProg) Youtube playlist.

I coded the "VanillaJS" version just like he demonstrated in his video.

I enjoyed the project and decided to create a ReactJS version.

This is a very basic ReactJS project without much sophistication, but the idea is to increase this project adding state management and other new features.

Feel free to use this project and don't forget to honor AsmrProg's work on his  [youtube channel](https://www.youtube.com/@AsmrProg).

## Running the Weather App

Download the project source code and run:

`cp .env.example .env`

This will generate the .env file where you will put app specific configurations.

After that, run:

`npm install`

Once the dependencies are installed, run the app in development mode:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## App external sources

The Weather App makes use of the Open Weather API.

To generate an api key, access:

[https://openweathermap.org/](https://openweathermap.org/)

Create and account if you haven't already and generate a new api key.

Put the generated api key in the variable `REACT_APP_WEATHER_API_KEY` inside .env file.
