export const apiKey = "9ea40cf4c0a8076f28a522df91177cd3";

export const coordinates = {
  latitude: "41.763710",
  longitude: "72.6734",
};

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../assets/day/foggy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rainy",
    url: new URL("../assets/day/rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snowy",
    url: new URL("../assets/day/snowy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "stormy",
    url: new URL("../assets/day/stormy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL("../assets/night/foggy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../assets/night/rainy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL("../assets/night/snowy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "stormy",
    url: new URL("../assets/night/stormy.png", import.meta.url).href,
  },
];

//-----------------BASEURL FOR CLOTHING ITEMS------------------>>
export const baseUrl = "http://localhost:3000";
