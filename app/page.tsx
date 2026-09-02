"use client";

import { useState } from "react";
import CountriesView from "@/components/CountriesView";
import ConsolidatedView from "@/components/ConsolidatedView";
import { getPipelineData } from "@/lib/data";

const data = getPipelineData();

type Tab = "paises" | "consolidado";

export default function Home() {
  const [tab, setTab] = useState<Tab>("paises");

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <nav className="flex gap-2 rounded-full border border-cardborder bg-white p-1 shadow-card">
          <button
            onClick={() => setTab("paises")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              tab === "paises"
                ? "bg-navy text-white"
                : "text-navy-text hover:bg-pagebg"
            }`}
          >
            Por país
          </button>
          <button
            onClick={() => setTab("consolidado")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              tab === "consolidado"
                ? "bg-navy text-white"
                : "text-navy-text hover:bg-pagebg"
            }`}
          >
            Visão consolidada
          </button>
        </nav>

        <div className="text-right">
          <p className="text-sm font-bold leading-tight text-navy-text">
            PLATAFORMA DE
            <br />
            INTERNACIONALIZAÇÃO
          </p>
          <p className="text-[10px] leading-tight text-slate-400">
            Sistema de Saúde Einstein
          </p>
        </div>
      </div>

      {tab === "paises" ? (
        <CountriesView data={data} />
      ) : (
        <ConsolidatedView data={data} />
      )}
    </main>
  );
}
