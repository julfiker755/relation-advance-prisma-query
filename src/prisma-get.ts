import { PrismaClient, userRole } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // const result=await prisma.user.findUnique({
    //  where:{
    //     id:1
    //  },
    //  include:{
    //     post:true,
    //     profile:true
    //  }
    // })

    const result=await prisma.user.findMany({
       include:{
         post:{
            where:{
                published:true
            }
         }
       }
       })
    //    console.dir(result,{depth:Infinity})
 console.dir(result,{depth:Infinity})
   

}

main()