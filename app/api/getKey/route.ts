import { NextRequest  } from "next/server";
import {prisma} from "../../lib/prisma";


export async function GET(request : NextRequest){

    const searchParams = request.nextUrl.searchParams;
    const domainName = searchParams.get("domainName");
    
    if(!domainName){

        return new Response("Domain name is required", {status:400});
    }

    try{

     const {id} = await prisma.visit_data.create({data:{domainName:domainName}});

     return new Response(JSON.stringify(id));

    }catch(error){
        
        return new Response("Domain Name allredy in use",{status:500});
    }
    

}