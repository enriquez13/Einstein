"""
Recalcula los conteos TOPO/MEIO/FUNDO por país a partir del Excel y
los imprime en el formato que va en lib/data.ts (RAW_COUNTS).

Uso:
    pip install pandas openpyxl
    python scripts/extract-data.py "ruta/al/Pipeline Comercial.xlsx"
"""
import sys
import pandas as pd

COUNTRIES = {
    "Colombia": ("Colômbia", "🇨🇴"),
    "México": ("México", "🇲🇽"),
    "Chile": ("Chile", "🇨🇱"),
    "Peru": ("Peru", "🇵🇪"),
    "Equador": ("Equador", "🇪🇨"),
    "Costa Rica": ("Costa Rica", "🇨🇷"),
    "Bolivia": ("Bolívia", "🇧🇴"),
    "Uruguay": ("Uruguai", "🇺🇾"),
}

MAPPING = {
    "Topo do funil": "topo",
    "Meio do funil": "meio",
    "Fundo do funil": "fundo",
}


def main(path: str) -> None:
    xls = pd.ExcelFile(path)
    print("const RAW_COUNTS = [")
    for sheet, (display_name, flag) in COUNTRIES.items():
        if sheet not in xls.sheet_names:
            print(f"  // AVISO: pestaña '{sheet}' no encontrada, se omite")
            continue
        df = pd.read_excel(xls, sheet_name=sheet, header=None)
        counts = {"topo": 0, "meio": 0, "fundo": 0}
        for v in df.iloc[1:, 0]:
            if pd.isna(v):
                continue
            key = MAPPING.get(str(v).strip())
            if key:
                counts[key] += 1
        print(
            f'  {{ key: "{sheet}", name: "{display_name}", flag: "{flag}", '
            f'topo: {counts["topo"]}, meio: {counts["meio"]}, fundo: {counts["fundo"]} }},'
        )
    print("];")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Uso: python scripts/extract-data.py <archivo.xlsx>")
        sys.exit(1)
    main(sys.argv[1])
