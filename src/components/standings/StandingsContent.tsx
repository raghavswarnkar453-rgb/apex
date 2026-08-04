"use client";

import { useMemo, useState } from "react";

import type { DriverStanding } from "@/types/driver";
import type { ConstructorStanding } from "@/types/constructor";

import DriverStandingsTable from "./DriverStandingsTable";
import ConstructorStandingsTable from "./ConstructorStandingsTable";
import StandingsSearch from "./StandingsSearch";
import StandingsTabs, {
  StandingsTab,
} from "./StandingsTabs";

interface Props {
  drivers: DriverStanding[];
  constructors: ConstructorStanding[];
}

export default function StandingsContent({
  drivers,
  constructors,
}: Props) {
  const [tab, setTab] =
    useState<StandingsTab>("drivers");

  const [query, setQuery] =
    useState("");

  const filteredDrivers = useMemo(() => {
    const search = query.toLowerCase();

    return drivers.filter((driver) => {
      const fullName =
        `${driver.Driver.givenName} ${driver.Driver.familyName}`.toLowerCase();

      return (
        fullName.includes(search) ||
        driver.Constructors[0]?.name
          .toLowerCase()
          .includes(search)
      );
    });
  }, [drivers, query]);

  const filteredConstructors = useMemo(() => {
    const search = query.toLowerCase();

    return constructors.filter((constructor) => {
      return (
        constructor.Constructor.name
          .toLowerCase()
          .includes(search) ||
        constructor.Constructor.nationality
          .toLowerCase()
          .includes(search)
      );
    });
  }, [constructors, query]);

  return (
    <>
      <StandingsTabs
        value={tab}
        onChange={setTab}
      />

      <StandingsSearch
        value={query}
        onChange={setQuery}
        placeholder={
          tab === "drivers"
            ? "Search drivers or teams..."
            : "Search constructors..."
        }
      />

      {tab === "drivers" ? (
        <DriverStandingsTable
          drivers={filteredDrivers}
        />
      ) : (
        <ConstructorStandingsTable
          constructors={filteredConstructors}
        />
      )}
    </>
  );
}