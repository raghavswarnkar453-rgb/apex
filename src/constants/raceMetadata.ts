export interface CircuitMetadata {
  laps: number;
  length: string;
  corners: number;
  firstGrandPrix: number;
  country: string;
  countryCode: string;
  direction: "Clockwise" | "Anti-clockwise";
  drsZones: number;

  latitude: number;
  longitude: number;

  lapRecord: {
    time: string;
    driver: string;
    season: number | null;
  };
}

export const RACE_METADATA: Record<
  string,
  CircuitMetadata
> = {
  albert_park: {
    laps: 58,
    length: "5.278 km",
    corners: 14,
    firstGrandPrix: 1996,
    country: "Australia",
    countryCode: "AU",
    direction: "Clockwise",
    drsZones: 4,

    latitude: -37.8497,
    longitude: 144.968,

    lapRecord: {
      time: "1:19.813",
      driver: "Charles Leclerc",
      season: 2024,
    },
  },

  shanghai: {
    laps: 56,
    length: "5.451 km",
    corners: 16,
    firstGrandPrix: 2004,
    country: "China",
    countryCode: "CN",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 31.3389,
    longitude: 121.2206,

    lapRecord: {
      time: "1:32.238",
      driver: "Michael Schumacher",
      season: 2004,
    },
  },

  suzuka: {
    laps: 53,
    length: "5.807 km",
    corners: 18,
    firstGrandPrix: 1987,
    country: "Japan",
    countryCode: "JP",
    direction: "Clockwise",
    drsZones: 1,

    latitude: 34.8431,
    longitude: 136.5419,

    lapRecord: {
      time: "1:30.983",
      driver: "Lewis Hamilton",
      season: 2019,
    },
  },

  sakhir: {
    laps: 57,
    length: "5.412 km",
    corners: 15,
    firstGrandPrix: 2004,
    country: "Bahrain",
    countryCode: "BH",
    direction: "Clockwise",
    drsZones: 3,

    latitude: 26.0325,
    longitude: 50.5106,

    lapRecord: {
      time: "1:31.447",
      driver: "Pedro de la Rosa",
      season: 2005,
    },
  },

  jeddah: {
    laps: 50,
    length: "6.174 km",
    corners: 27,
    firstGrandPrix: 2021,
    country: "Saudi Arabia",
    countryCode: "SA",
    direction: "Anti-clockwise",
    drsZones: 3,

    latitude: 21.6319,
    longitude: 39.1044,

    lapRecord: {
      time: "1:30.734",
      driver: "Lewis Hamilton",
      season: 2021,
    },
  },

  miami: {
    laps: 57,
    length: "5.412 km",
    corners: 19,
    firstGrandPrix: 2022,
    country: "United States",
    countryCode: "US",
    direction: "Anti-clockwise",
    drsZones: 3,

    latitude: 25.9581,
    longitude: -80.2389,

    lapRecord: {
      time: "1:29.708",
      driver: "Max Verstappen",
      season: 2023,
    },
  },

  imola: {
    laps: 63,
    length: "4.909 km",
    corners: 19,
    firstGrandPrix: 1980,
    country: "Italy",
    countryCode: "IT",
    direction: "Anti-clockwise",
    drsZones: 1,

    latitude: 44.3439,
    longitude: 11.7167,

    lapRecord: {
      time: "1:15.484",
      driver: "Lewis Hamilton",
      season: 2020,
    },
  },

  monaco: {
    laps: 78,
    length: "3.337 km",
    corners: 19,
    firstGrandPrix: 1950,
    country: "Monaco",
    countryCode: "MC",
    direction: "Clockwise",
    drsZones: 1,

    latitude: 43.7347,
    longitude: 7.4206,

    lapRecord: {
      time: "1:12.909",
      driver: "Lewis Hamilton",
      season: 2021,
    },
  },

  catalunya: {
    laps: 66,
    length: "4.657 km",
    corners: 14,
    firstGrandPrix: 1991,
    country: "Spain",
    countryCode: "ES",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 41.57,
    longitude: 2.2611,

    lapRecord: {
      time: "1:16.330",
      driver: "Max Verstappen",
      season: 2023,
    },
  },

  villeneuve: {
    laps: 70,
    length: "4.361 km",
    corners: 14,
    firstGrandPrix: 1978,
    country: "Canada",
    countryCode: "CA",
    direction: "Clockwise",
    drsZones: 3,

    latitude: 45.5006,
    longitude: -73.5228,

    lapRecord: {
      time: "1:13.078",
      driver: "Valtteri Bottas",
      season: 2019,
    },
  },
    red_bull_ring: {
    laps: 71,
    length: "4.318 km",
    corners: 10,
    firstGrandPrix: 1970,
    country: "Austria",
    countryCode: "AT",
    direction: "Clockwise",
    drsZones: 3,

    latitude: 47.2197,
    longitude: 14.7647,

    lapRecord: {
      time: "1:05.619",
      driver: "Carlos Sainz",
      season: 2020,
    },
  },

  silverstone: {
    laps: 52,
    length: "5.891 km",
    corners: 18,
    firstGrandPrix: 1950,
    country: "United Kingdom",
    countryCode: "GB",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 52.0733,
    longitude: -1.0147,

    lapRecord: {
      time: "1:27.097",
      driver: "Max Verstappen",
      season: 2020,
    },
  },

  spa: {
    laps: 44,
    length: "7.004 km",
    corners: 19,
    firstGrandPrix: 1950,
    country: "Belgium",
    countryCode: "BE",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 50.4372,
    longitude: 5.9714,

    lapRecord: {
      time: "1:46.286",
      driver: "Valtteri Bottas",
      season: 2018,
    },
  },

  hungaroring: {
    laps: 70,
    length: "4.381 km",
    corners: 14,
    firstGrandPrix: 1986,
    country: "Hungary",
    countryCode: "HU",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 47.5822,
    longitude: 19.2511,

    lapRecord: {
      time: "1:16.627",
      driver: "Lewis Hamilton",
      season: 2020,
    },
  },

  zandvoort: {
    laps: 72,
    length: "4.259 km",
    corners: 14,
    firstGrandPrix: 1952,
    country: "Netherlands",
    countryCode: "NL",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 52.3888,
    longitude: 4.5409,

    lapRecord: {
      time: "1:11.097",
      driver: "Lewis Hamilton",
      season: 2021,
    },
  },

  monza: {
    laps: 53,
    length: "5.793 km",
    corners: 11,
    firstGrandPrix: 1950,
    country: "Italy",
    countryCode: "IT",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 45.6156,
    longitude: 9.2811,

    lapRecord: {
      time: "1:21.046",
      driver: "Rubens Barrichello",
      season: 2004,
    },
  },

  baku: {
    laps: 51,
    length: "6.003 km",
    corners: 20,
    firstGrandPrix: 2016,
    country: "Azerbaijan",
    countryCode: "AZ",
    direction: "Anti-clockwise",
    drsZones: 2,

    latitude: 40.3725,
    longitude: 49.8533,

    lapRecord: {
      time: "1:43.009",
      driver: "Charles Leclerc",
      season: 2019,
    },
  },

  marina_bay: {
    laps: 62,
    length: "4.940 km",
    corners: 19,
    firstGrandPrix: 2008,
    country: "Singapore",
    countryCode: "SG",
    direction: "Anti-clockwise",
    drsZones: 4,

    latitude: 1.2914,
    longitude: 103.8644,

    lapRecord: {
      time: "1:34.486",
      driver: "Daniel Ricciardo",
      season: 2024,
    },
  },
    americas: {
    laps: 56,
    length: "5.513 km",
    corners: 20,
    firstGrandPrix: 2012,
    country: "United States",
    countryCode: "US",
    direction: "Anti-clockwise",
    drsZones: 2,

    latitude: 30.1328,
    longitude: -97.6411,

    lapRecord: {
      time: "1:36.169",
      driver: "Charles Leclerc",
      season: 2019,
    },
  },

  rodriguez: {
    laps: 71,
    length: "4.304 km",
    corners: 17,
    firstGrandPrix: 1963,
    country: "Mexico",
    countryCode: "MX",
    direction: "Clockwise",
    drsZones: 3,

    latitude: 19.4042,
    longitude: -99.0907,

    lapRecord: {
      time: "1:17.774",
      driver: "Valtteri Bottas",
      season: 2021,
    },
  },

  interlagos: {
    laps: 71,
    length: "4.309 km",
    corners: 15,
    firstGrandPrix: 1973,
    country: "Brazil",
    countryCode: "BR",
    direction: "Anti-clockwise",
    drsZones: 2,

    latitude: -23.7036,
    longitude: -46.6997,

    lapRecord: {
      time: "1:10.540",
      driver: "Valtteri Bottas",
      season: 2018,
    },
  },

  vegas: {
    laps: 50,
    length: "6.201 km",
    corners: 17,
    firstGrandPrix: 2023,
    country: "United States",
    countryCode: "US",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 36.1147,
    longitude: -115.1728,

    lapRecord: {
      time: "1:35.490",
      driver: "Oscar Piastri",
      season: 2024,
    },
  },

  losail: {
    laps: 57,
    length: "5.419 km",
    corners: 16,
    firstGrandPrix: 2021,
    country: "Qatar",
    countryCode: "QA",
    direction: "Clockwise",
    drsZones: 1,

    latitude: 25.4898,
    longitude: 51.4542,

    lapRecord: {
      time: "1:22.384",
      driver: "Lando Norris",
      season: 2024,
    },
  },

  yas_marina: {
    laps: 58,
    length: "5.281 km",
    corners: 16,
    firstGrandPrix: 2009,
    country: "United Arab Emirates",
    countryCode: "AE",
    direction: "Anti-clockwise",
    drsZones: 2,

    latitude: 24.4672,
    longitude: 54.6031,

    lapRecord: {
      time: "1:26.103",
      driver: "Max Verstappen",
      season: 2021,
    },
  },

  madring: {
    laps: 57,
    length: "5.470 km",
    corners: 22,
    firstGrandPrix: 2026,
    country: "Spain",
    countryCode: "ES",
    direction: "Clockwise",
    drsZones: 2,

    latitude: 40.4722,
    longitude: -3.6125,

    lapRecord: {
      time: "-",
      driver: "-",
      season: null,
    },
  },
};