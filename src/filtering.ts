import { PrismaClient, userRole } from "@prisma/client";
import { title } from "process";

const prisma=new PrismaClient()

const main=async()=>{
// -----------------------   And

    const result1=await prisma.post.findMany({
        where:{
            AND:[
                {
                    title:{
                        contains:"title"
                    },
                    published:true
                }
            ]
        }
    })
    
// -------------------- or 

 const result2=await prisma.post.findMany({
        where:{
            OR:[
                {
                    title:{
                        contains:"title"
                    },
                    published:true
                }
            ]
        }
    })
    
 


// -------------------- not  
 const result3=await prisma.post.findMany({
        where:{
            NOT:[
                {
                    title:{
                        contains:"title"
                    }
                }
            ]
        }
    })
    

   
// --------------  startsWith
const result4=await prisma.user.findMany({
    where:{
        email:{
            startsWith:"user1"
        }
    }
})
// --------------  startsWith
const result5=await prisma.user.findMany({
    where:{
        email:{
            endsWith:"gmail.com"
        }
    }
})

// --------------  startsWith
const result6=await prisma.user.findMany({
    where:{
        email:{
            equals:"user1@gmail.com"
        }
    }
})

// --------------  in
const useNameArray=["user1","user2"]
const result=await prisma.user.findMany({
    where:{
      username:{
            in:useNameArray
        }
    }
})
console.log(result)
}

main()