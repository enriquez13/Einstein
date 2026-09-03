import FunnelStage from "./FunnelStage";
import CurvedArrow from "./CurvedArrow"; // <-- Importar la flecha
import type { PipelineData } from "@/lib/data";

export default function ConsolidatedView({ data }: { data: PipelineData }) {
  const { totals, countries, valorEstimado } = data;
  const countryList = countries
    .filter((c) => c.total > 0)
    .map((c) => c.name)
    .join(" • ");

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-navy-text sm:text-3xl">
          PIPELINE INTERNACIONAL{" "}
          <span className="text-navy-text">| VISÃO</span>
          <br />
          <span className="border-b-4 border-teal pb-1">CONSOLIDADA</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500">
          Uma frente comercial com presença ativa em múltiplos mercados e
          oportunidades em diferentes estágios de maturidade.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_320px]">
        {/* Stat boxes */}
        <div className="flex gap-4 lg:flex-col">
          <div className="flex min-w-[110px] flex-col items-center justify-center rounded-card border border-cardborder bg-white px-4 py-4 shadow-card">
            <span className="text-3xl font-bold text-navy-text">
              {totals.total}
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-wide text-slate-400">
              OPORTUNIDADES
            </span>
          </div>
          <div className="flex min-w-[90px] flex-col items-center justify-center rounded-card border border-cardborder bg-white px-4 py-4 shadow-card">
            <span className="text-3xl font-bold text-teal">
              {totals.paisesActivos}
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-wide text-slate-400">
              PAÍSES
            </span>
          </div>
          <div className="hidden min-w-[110px] flex-col items-center justify-center rounded-card border border-cardborder bg-white px-4 py-6 text-center shadow-card lg:mt-40 lg:flex">
            <span className="text-lg font-bold text-navy-text">
              {valorEstimado}
            </span>
          </div>
        </div>

        {/* Funnel con Flecha Posicionada */}
        <div className="relative flex flex-col items-center gap-4 py-2">
          <FunnelStage
            label="TOPO | PROSPECÇÃO"
            value={totals.topo}
            colorClass="bg-navy"
            widthPercent={92}
            taper={7}
            size="lg"
            subtitle="abertura de relacionamento"
          />

          <FunnelStage
            label="MEIO | QUALIFICAÇÃO"
            value={totals.meio}
            colorClass="bg-teal"
            widthPercent={68}
            taper={9}
            size="lg"
            subtitle="consideração e construção de oportunidade"
          />

          <FunnelStage
            label="FUNDO | CONVERSÃO"
            value={totals.fundo}
            colorClass="bg-skyblue"
            widthPercent={46}
            taper={11}
            size="lg"
            subtitle="negociação e avanço para fechamento"
          />

          {/* Flecha posicionada a la derecha conectando MEIO y FUNDO */}
          <div className="absolute right-4 top-[60%] hidden -translate-y-1/2 lg:block">
            <CurvedArrow />
          </div>
        </div>

        {/* Leitura executiva */}
        <aside className="rounded-card border border-cardborder bg-white p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Leitura executiva
          </p>
          <h2 className="mt-2 text-lg font-bold leading-snug text-navy-text">
            Uma capacidade comercial internacional já instalada.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            O pipeline combina escala de prospecção com oportunidades que já
            avançaram para qualificação e conversão.
          </p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-teal">
            {countryList}
          </p>
        </aside>
      </div>

      <div className="mt-10 flex flex-col gap-3 rounded-card border border-mint-border bg-mint px-6 py-4 sm:flex-row sm:items-center sm:gap-6">
        <span className="whitespace-nowrap text-sm font-bold text-navy-text">
          FORÇA COMERCIAL
          <br className="hidden sm:block" /> INTERNACIONAL
        </span>
        <span className="text-sm text-slate-600">
          Presença regional + relacionamento institucional + geração
          estruturada de oportunidades para a Plataforma de
          Internacionalização.
        </span>
      </div>
    </div>
  );
}