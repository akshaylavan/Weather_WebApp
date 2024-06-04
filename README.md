# Weather WebApp

This project is a simple Weather Web Application built with React that allows users to search for current weather details of any city. The app fetches weather data from the OpenWeatherMap API and displays information such as temperature, humidity, wind speed, and more.

## Features

- Search for weather details by city name.
- Displays weather icon, temperature, city, country, latitude, longitude, humidity, and wind speed.
- Shows a loading indicator while fetching data.
- Handles errors such as "City Not Found".
- Responsive design.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akshaylavan/Weather_WebApp.git
   cd Weather_WebApp
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the search bar to enter a city name and press Enter or click the search button to fetch weather details.

## Code Overview

### `WhetherDetails` Component

The `WhetherDetails` component displays the weather details for the searched city.

- **Props:**
  - `icon` - Weather icon URL.
  - `temp` - Temperature in Celsius.
  - `city` - City name.
  - `country` - Country code.
  - `lat` - Latitude of the city.
  - `log` - Longitude of the city.
  - `wind` - Wind speed in km/h.
  - `humidity` - Humidity percentage.

### `Whether` Component

The `Whether` component handles the main functionality, including fetching data from the API and managing state.

- **State Variables:**
  - `text` - User input for city name.
  - `icon` - Weather icon URL.
  - `temp` - Temperature in Celsius.
  - `city` - City name.
  - `country` - Country code.
  - `log` - Longitude of the city.
  - `lat` - Latitude of the city.
  - `humidity` - Humidity percentage.
  - `wind` - Wind speed in km/h.
  - `cityNotFound` - Boolean to handle "City Not Found" error.
  - `loading` - Boolean to show loading state.

- **Functions:**
  - `search` - Fetches weather data from the API based on the city name.
  - `handleCity` - Updates the city name based on user input.
  - `handleKeyDown` - Initiates search when the Enter key is pressed.

### Weather Icons

Weather icons are imported and mapped to their corresponding weather conditions using the `weatherIconMap` object.

### Styling

The components use Tailwind CSS for styling. Ensure Tailwind CSS is properly configured in your project.

## Screenshots

![Weather WebApp Screenshot](./Whether/screenshot.jpg)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further to suit your project's needs. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!
