// -----------------------------------------------------------------------
// Fuente de datos del pipeline comercial.
//
// HOY: los números vienen embebidos (extraídos del archivo
// "Copia TESTE. Nova Planilha Pipeline Comercial.xlsx").
//
// MAÑANA (cuando tengas acceso a Azure AD / Microsoft Graph):
// reemplaza el cuerpo de `getPipelineData()` por una llamada a
// `/api/pipeline` (ver app/api/pipeline/route.ts) que lea el Excel
// directo de la nube vía Graph. El resto de la app (componentes,
// tabs, cards) no cambia: todos consumen `PipelineData`.
// -----------------------------------------------------------------------

export type FunnelStage = "TOPO" | "MEIO" | "FUNDO";

export interface CountryPipeline {
  key: string; // nombre de la pestaña en el Excel
  name: string; // nombre a mostrar
  flag: string; // emoji de bandera
  topo: number;
  meio: number;
  fundo: number;
  total: number;
}

export interface PipelineData {
  countries: CountryPipeline[];
  totals: {
    topo: number;
    meio: number;
    fundo: number;
    total: number;
    paisesActivos: number;
  };
  // Rango de valor estimado del pipeline. No viene de la columna "Fúnil";
  // edítalo a mano o cotéjalo con la columna "Valor em Reais" del Excel.
  valorEstimado: string;
  updatedAt: string;
}

// Conteo real por país, calculado a partir de la columna A ("Fúnil") de
// cada pestaña del Excel subido el 2026-09-02.
const RAW_COUNTS: Omit<CountryPipeline, "total">[] = [
  { key: "Colombia", name: "Colômbia", flag: "🇨🇴", topo: 10, meio: 1, fundo: 1 },
  { key: "México", name: "México", flag: "🇲🇽", topo: 12, meio: 0, fundo: 0 },
  { key: "Chile", name: "Chile", flag: "🇨🇱", topo: 5, meio: 0, fundo: 1 },
  { key: "Peru", name: "Peru", flag: "🇵🇪", topo: 6, meio: 1, fundo: 0 },
  { key: "Equador", name: "Equador", flag: "🇪🇨", topo: 4, meio: 0, fundo: 0 },
  { key: "Costa Rica", name: "Costa Rica", flag: "🇨🇷", topo: 1, meio: 0, fundo: 0 },
  { key: "Bolivia", name: "Bolívia", flag: "🇧🇴", topo: 1, meio: 0, fundo: 0 },
  { key: "Uruguay", name: "Uruguai", flag: "🇺🇾", topo: 1, meio: 0, fundo: 0 },
];

function buildData(): PipelineData {
  const countries: CountryPipeline[] = RAW_COUNTS.map((c) => ({
    ...c,
    total: c.topo + c.meio + c.fundo,
  }));

  const totals = countries.reduce(
    (acc, c) => ({
      topo: acc.topo + c.topo,
      meio: acc.meio + c.meio,
      fundo: acc.fundo + c.fundo,
      total: acc.total + c.total,
      paisesActivos: acc.paisesActivos + (c.total > 0 ? 1 : 0),
    }),
    { topo: 0, meio: 0, fundo: 0, total: 0, paisesActivos: 0 }
  );

  return {
    countries,
    totals,
    valorEstimado: "US$ —", // sin dato de valor asociado; edita aquí si lo quieres mostrar
    updatedAt: "2026-09-02",
  };
}

/**
 * Punto único de entrada para obtener los datos del pipeline.
 * Hoy devuelve los datos embebidos; cuando conectes Graph API,
 * cambia esto por un fetch a tu API route (server-side) y mantén
 * la misma forma de retorno (PipelineData).
 */
export function getPipelineData(): PipelineData {
  return buildData();
}
