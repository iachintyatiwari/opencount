import {prisma} from "../../lib/prisma";


export async function POST(request: Request){

  try{

   const {domainName} = await request.json();
    
   if(!domainName){ 
    
      return new Response("Domain name is required", {status:400});
   }


   try{

       await prisma.visit_data.update({
        
          where:{domainName:domainName},
          data:{totalVisitors:{increment:1}

       }});

       return  Response.json({ok:true})

    }catch(error){
       
         return Response.json({ok:false, error:"Domain name not found"}, {status:404});

    }

   }catch(error){

      return Response.json({ok:false, error:"Something went wrong"}, {status:500});

   }


}
