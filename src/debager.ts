import { PrismaClient} from "@prisma/client";


const prisma=new PrismaClient({
    log:[
        {
            emit:"event",
            level:"query"
        }
    ]
})

prisma.$on("query",(e)=>{
    // console.log(e)
    console.log(e.query)
    console.log(e.duration)
    console.log(e.timestamp)
})

const main=async()=>{

const result=await prisma.post.findMany()
console.log(result)
}

main()