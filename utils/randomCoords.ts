import axios from "axios";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default async function randomCoordinates(
  cityName: string
): Promise<Coordinates[]> {
  const response = await axios.get(
    `https://geocode.maps.co/search?q=${encodeURIComponent(cityName)}`
  );
  const matches = response.data;

  if (matches.length === 0) {
    throw new Error("No matching cities found");
  }

  const cityLat = parseFloat(matches[0].lat);
  const cityLng = parseFloat(matches[0].lon);

  const results: Coordinates[] = [];

  for (let i = 0; i < 7; i++) {
    // await new Promise(resolve => setTimeout(resolve, 500)); // Adding a 500ms delay to avoid hitting the API rate limit
    const randLat = cityLat + (Math.random() - 0.5) * (2 / 69);
    const randLng =
      cityLng +
      (Math.random() - 0.5) * (2 / (Math.cos((cityLat * Math.PI) / 180) * 69));
    results.push({ latitude: randLat, longitude: randLng });
  }

  return results;
}
