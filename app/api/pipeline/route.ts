import { NextResponse } from "next/server";
import { getPipelineData } from "@/lib/data";

// -----------------------------------------------------------------------
// ESTE ENDPOINT HOY DEVUELVE LOS DATOS EMBEBIDOS (lib/data.ts).
//
// CUANDO TENGAS LAS CREDENCIALES DE AZURE AD (client id, client secret,
// tenant id) reemplaza el cuerpo de GET por algo como esto:
//
// 1. Variables de entorno en Vercel:
//    AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID,
//    GRAPH_DRIVE_ITEM_ID (id del archivo en OneDrive/SharePoint)
//
// 2. Obtener un token con client credentials flow (@azure/msal-node):
//
//    import { ConfidentialClientApplication } from "@azure/msal-node";
//    const cca = new ConfidentialClientApplication({
//      auth: {
//        clientId: process.env.AZURE_CLIENT_ID!,
//        authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
//        clientSecret: process.env.AZURE_CLIENT_SECRET!,
//      },
//    });
//    const token = await cca.acquireTokenByClientCredential({
//      scopes: ["https://graph.microsoft.com/.default"],
//    });
//
// 3. Leer cada pestaña con la Workbook API de Graph:
//
//    const res = await fetch(
//      `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}` +
//      `/workbook/worksheets/${sheetName}/usedRange`,
//      { headers: { Authorization: `Bearer ${token.accessToken}` } }
//    );
//    const json = await res.json();
//    // json.values es una matriz [fila][columna]; toma la columna 0
//    // (índice 0), igual que hace lib/data.ts con el Excel local.
//
// 4. Cuenta "Topo do funil" / "Meio do funil" / "Fundo do funil" por
//    pestaña y arma el mismo objeto PipelineData que ya usa la UI.
// -----------------------------------------------------------------------

export async function GET() {
  const data = getPipelineData();
  return NextResponse.json(data);
}
