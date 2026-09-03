import Image from "next/image";
import FunnelStage from "./FunnelStage";
import type { CountryPipeline } from "@/lib/data";

export default function CountryCard({ country }: { country: CountryPipeline }) {
  return (
    <div className="mx-auto flex  w-full max-w-xs flex-col rounded-card border border-cardborder bg-white p-5 shadow-card sm:block sm:aspect-auto sm:max-w-none">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold uppercase tracking-wide text-navy-text">
            {country.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={`https://flagcdn.com/w80/${country.flagCode}.png`}
            alt={`Bandeira ${country.name}`}
            width={45}
            height={32}
            className="rounded-[3px] object-cover shadow-sm"
            unoptimized
          />
        </div>
        <div className="text-right">
          <div className="text-xl font-bold leading-none text-teal">
            {country.total}
          </div>
          <div className="text-[9px] font-medium tracking-wide text-slate-400">
            TOTAL
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-none sm:justify-start">
        <FunnelStage
          label="TOPO"
          value={country.topo}
          colorClass="bg-navy"
          widthPercent={92}
          taper={10}
        />
        <FunnelStage
          label="MEIO"
          value={country.meio}
          colorClass="bg-teal"
          widthPercent={68}
          taper={10}
        />
        <FunnelStage
          label="FUNDO"
          value={country.fundo}
          colorClass="bg-skyblue"
          widthPercent={46}
          taper={13}
        />
      </div>
    </div>
  );
}
