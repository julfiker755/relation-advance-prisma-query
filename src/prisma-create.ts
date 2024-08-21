import { PrismaClient, userRole } from "@prisma/client";

const prisma=new PrismaClient()

const main=async()=>{
    // const result=await prisma.user.create({
    //  data:{
    //     username:"user3",
    //     email:"user3@gmail.com",
    //     role:userRole.user
    //  }
    // })

    // const result2=await prisma.profile.create({
    //     data:{
    //         bio:"There is no bio",
    //         userId:1
    //     }
    //    })
    // const result2=await prisma.catagory.create({
    //     data:{
    //         name:"Java",
    //     }
    //    })

    // post--model
    const result2=await prisma.post.create({
        data:{
            title:"make it title",
            content:"discripation hare",
            published:true,
            author:"julfiker",
            authorId:1,
            postCatagory:{
                create:{
                    catagoryId:2
                    // catagory:{
                    //     connect:{
                    //         id:1
                    //     }
                    // }
                }
            }
            
        },
        include:{
            postCatagory:true
        }
       })
         // post--model
    const result3=await prisma.post.create({
        data:{
            title:"make it title",
            content:"discripation hare",
            published:true,
            author:"julfiker",
            authorId:1,
            postCatagory:{
                create:[
                    {catagoryId:1},
                    {catagoryId:2},
                    {catagoryId:3}
                ]
            }
            
        },
        include:{
            postCatagory:true
        }
       })
    console.log(result3)
}

main()