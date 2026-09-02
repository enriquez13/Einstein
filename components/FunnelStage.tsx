interface FunnelStageProps {
  label: string;
  value: number;
  colorClass: string; // bg-navy | bg-teal | bg-skyblue
  widthPercent: number; // 0-100, ancho del bloque respecto al contenedor
  taper: number; // cuánto se angosta la base, en puntos porcentuales
  size?: "sm" | "lg";
  subtitle?: string;
}

export default function FunnelStage({
  label,
  value,
  colorClass,
  widthPercent,
  taper,
  size = "sm",
  subtitle,
}: FunnelStageProps) {
  const clip = `polygon(0% 0%, 100% 0%, ${100 - taper}% 100%, ${taper}% 100%)`;

  return (
    <div
      className="mx-auto"
      style={{
        width: `${widthPercent}%`,
        clipPath: clip,
        WebkitClipPath: clip,
      }}
    >
      <div
        className={`flex w-full flex-col items-center justify-center text-center text-white ${colorClass} ${
          size === "lg" ? "px-10 py-7" : "px-4 py-3"
        }`}
      >
        {size === "sm" ? (
          <span className="text-[12px] font-bold tracking-wide">
            {label} {value}
          </span>
        ) : (
          <>
            <span className="text-lg font-bold tracking-wide">{label}</span>
            <span className="mt-1 text-4xl font-bold leading-none">
              {value}
            </span>
            {subtitle && (
              <span className="mt-2 max-w-md text-sm font-normal text-white/90">
                {subtitle}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
