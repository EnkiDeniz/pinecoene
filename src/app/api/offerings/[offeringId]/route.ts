import { getHostedOffering } from "@/lib/offering-v01";

export async function GET(request:Request,{params}:{params:Promise<{offeringId:string}>}){
  const {offeringId}=await params;
  const revision=new URL(request.url).searchParams.get("revision");
  const value=await getHostedOffering(offeringId,revision);
  if(!value)return Response.json({error:"Offering unavailable"},{status:404,headers:{"Cache-Control":"private, no-store"}});
  return Response.json(value,{headers:{"Cache-Control":"private, no-store","X-Content-Type-Options":"nosniff"}});
}
