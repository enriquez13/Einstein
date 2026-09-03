import CountryCard from "./CountryCard";
import type { PipelineData } from "@/lib/data";

export default function CountriesView({ data }: { data: PipelineData }) {
  const destaque = [...data.countries]
    .sort((a, b) => b.total - a.total)
    .slice(0, 2)
    .map((c) => c.name)
    .join(" e ");

  return (
    <div>
      <header className="mb-8">
        <h1 className="inline text-2xl font-bold text-navy-text sm:text-3xl">
          PIPELINE POR PAÍS <span className="text-navy-text">| CAPILARIDADE</span>
          <br />
          <span className="border-b-4 border-teal pb-1">REGIONAL</span>
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-500">
          A mesma lógica comercial aplicada em {data.countries.length} mercados, com
          diferentes níveis de maturidade e potencial de avanço.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.countries.map((c) => (
          <CountryCard key={c.key} country={c} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-navy-text">
        <span className="font-bold">Destaque:</span> {destaque} concentram o maior
        volume; os demais mercados ampliam a presença regional.
      </p>
    </div>
  );
}
