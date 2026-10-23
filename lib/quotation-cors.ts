export const pagesOrigin="https://jobless-fish.github.io";
export const corsHeaders={"Access-Control-Allow-Origin":pagesOrigin,"Access-Control-Allow-Methods":"GET, PUT, OPTIONS","Access-Control-Allow-Headers":"Authorization, Content-Type","Vary":"Origin"};
export function preflight(req:Request){return new Response(null,{status:req.headers.get("origin")===pagesOrigin?204:403,headers:corsHeaders})}
