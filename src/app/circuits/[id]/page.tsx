import { notFound } from "next/navigation";

import { getCircuit } from "@/services/circuit";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CircuitPage({
  params,
}: Props) {
  const { id } = await params;

  const circuit = await getCircuit(id);

  if (!circuit) {
    notFound();
  }

  return (
    <main className="p-12">
      <h1 className="text-5xl font-bold">
        {circuit.circuitName}
      </h1>

      <p className="mt-4 text-zinc-400">
        {circuit.Location.locality},{" "}
        {circuit.Location.country}
      </p>
    </main>
  );
}