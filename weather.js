class Weather {
   constructor(city, state) {
      this.apiKey = apiKey;
      this.city = city;
      this.state = state;
   }

   // Getch weather from API
   async getWeather() {
      const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

      const responseData = await reponse.json();

      return responseData;
   }

   // Check weather location
   changeLocation(city, state) {
      this.city = city;
      this.state = state;
   }
}