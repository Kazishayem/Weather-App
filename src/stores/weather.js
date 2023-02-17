import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    api_key: "415eeb114c112148ffb14a4898d12e03",
    weather_icon: "http://openweathermap.org/img/wn/",
    location_query: "",
    weather: {},
  }),

  getters: {},
  actions: {
    async fetchWeather(e) {
      if (e.key == "Enter") {
        const {data} = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);

          this.weather = data;

      } 
    },
  },
});
