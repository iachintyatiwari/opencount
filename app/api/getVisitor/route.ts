import {prisma} from "../../lib/prisma";


export async function POST(request: Request){

 try{

    const {domainName} = await request.json();
 
    if(!domainName){

        return Response.json("Domain name is required",{status:400});
    }

    console.log("Domain Name:", domainName);

    try{

        const totalVisitors = await prisma.visit_data.findUnique({
            where:{domainName:domainName},
            select:{totalVisitors:true}
        })

        return Response.json({ok:true, totalVisitors:totalVisitors?.totalVisitors || 0});

    }catch(error){

        return Response.json({ok:false, error:"Domain name not found"}, {status:404});

    }


 } catch(error){

    return Response.json({ok:false, error:"Something went wrong"}, {status:500});
 }

}