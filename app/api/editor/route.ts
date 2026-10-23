import { corsHeaders, preflight } from "../../../lib/quotation-cors";
import { quotationHtml } from "../../../lib/quotation-html";
import { canOpenQuotation } from "../../../lib/quotation-access";
export const dynamic="force-dynamic";
export async function GET(req:Request){if(!await canOpenQuotation(req))return new Response("전용 링크가 필요합니다.",{status:403,headers:corsHeaders});return new Response(quotationHtml,{headers:{...corsHeaders,"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store","Referrer-Policy":"no-referrer","X-Robots-Tag":"noindex, nofollow"}});}

export const OPTIONS=preflight;
