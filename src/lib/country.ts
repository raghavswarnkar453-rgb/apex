const COUNTRY_CODES: Record<string, string> = {
  Netherlands: "nl",
  "Great Britain": "gb",
  "United Kingdom": "gb",
  Monaco: "mc",
  Spain: "es",
  France: "fr",
  Italy: "it",
  Germany: "de",
  Australia: "au",
  Japan: "jp",
  Thailand: "th",
  Canada: "ca",
  China: "cn",
  "New Zealand": "nz",
  Denmark: "dk",
  Brazil: "br",
  Mexico: "mx",
  Argentina: "ar",
  Finland: "fi",
  Austria: "at",
  Belgium: "be",
  Switzerland: "ch",
};

export function getCountryCode(
  country: string
): string {
  return COUNTRY_CODES[country] ?? "un";
}