export const RACE_METADATA: Record<
  string,
  {
    laps: number;
    length: string;
    corners: number;
    firstGrandPrix: number;
    country: string;
    countryCode: string;
  }
> = {
  spa: {
    laps: 44,
    length: "7.004 km",
    corners: 19,
    firstGrandPrix: 1950,
    country: "Belgium",
    countryCode: "BE",
  },

  hungaroring: {
    laps: 70,
    length: "4.381 km",
    corners: 14,
    firstGrandPrix: 1986,
    country: "Hungary",
    countryCode: "HU",
  },

  monza: {
    laps: 53,
    length: "5.793 km",
    corners: 11,
    firstGrandPrix: 1950,
    country: "Italy",
    countryCode: "IT",
  },

  silverstone: {
    laps: 52,
    length: "5.891 km",
    corners: 18,
    firstGrandPrix: 1950,
    country: "United Kingdom",
    countryCode: "GB",
  },

  suzuka: {
    laps: 53,
    length: "5.807 km",
    corners: 18,
    firstGrandPrix: 1987,
    country: "Japan",
    countryCode: "JP",
  },

  monaco: {
    laps: 78,
    length: "3.337 km",
    corners: 19,
    firstGrandPrix: 1950,
    country: "Monaco",
    countryCode: "MC",
  },

  interlagos: {
    laps: 71,
    length: "4.309 km",
    corners: 15,
    firstGrandPrix: 1973,
    country: "Brazil",
    countryCode: "BR",
  },

  yas_marina: {
    laps: 58,
    length: "5.281 km",
    corners: 16,
    firstGrandPrix: 2009,
    country: "United Arab Emirates",
    countryCode: "AE",
  },
};