"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui";

const TARGET_DATE = new Date("2026-07-26T19:30:00+05:30"); // Belgian GP (placeholder)

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = TARGET_DATE.getTime() - Date.now();

    if (total <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(total / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((total / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((total / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((total / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    ["Days", timeLeft.days],
    ["Hours", timeLeft.hours],
    ["Min", timeLeft.minutes],
    ["Sec", timeLeft.seconds],
  ];

  return (
    <div className="grid max-w-xl grid-cols-4 gap-4">
      {items.map(([label, value]) => (
        <Card
          key={label}
          className="flex flex-col items-center justify-center p-6"
        >
          <p className="font-mono text-4xl font-bold text-white">
            {value}
          </p>

          <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
            {label}
          </p>
        </Card>
      ))}
    </div>
  );
}