export function formatDate(
  date: string
) {
  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}

export function formatTime(
  date: string,
  time?: string
) {
  if (!time) return "--";

  return new Date(
    `${date}T${time}`
  ).toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatDateTime(
  date: string,
  time?: string
) {
  if (!time) return formatDate(date);

  return new Date(
    `${date}T${time}`
  ).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}