import type {
  ConstructorStanding,
} from "@/types/constructor";

import ConstructorCard from "./ConstructorCard";

interface ConstructorGridProps {
  constructors: ConstructorStanding[];
}

export default function ConstructorGrid({
  constructors,
}: ConstructorGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {constructors.map((constructor) => (
        <ConstructorCard
          key={
            constructor.Constructor.constructorId
          }
          standing={constructor}
        />
      ))}

    </div>
  );
}