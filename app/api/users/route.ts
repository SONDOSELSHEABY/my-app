import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
//GET METHOD

export function GET(request:NextRequest){
 return NextResponse.json([{
    id:1,
    name:'Sondos Elsheaby' },
    { 
       id:2, 
       name:'MOhamed'
    }
])
}
//POST METHOD

export async function POST(request:NextRequest){
    
   const body = await request.json();
   const validation = schema.safeParse(body)
   if(!validation.success)
    return NextResponse.json({error:' Name is Required'},{status:400})
 
 return NextResponse.json({id:1,name:body.name}, {status:201}) 
}

// ANTHER//////////////////////////////////////////////////////;


// //GET METHOD
// export function GET(request:NextRequest){

//     return NextResponse.json([{
//         "id": 1,
//         name: 'kerollos'
//     },{
//         id: 2 ,
//         name:'eng Inas'
//     }
// ])
// }
// //POST METHOD

// export async function POST(request:NextRequest){

//     const body =await request.json()
//     if(!body.name)
//     return NextResponse.json({error:"Name is required!"},{status:400})
// return NextResponse.json({id:1 , name:`Hello ${body.name}`},{status:200});
// }

// //PUT METHOD

// export async function PUT(request:NextRequest){

//     const body =await request.json()
//     const validate = schema.safeParse(body)
//     if(!validate.success){
//     return NextResponse.json({error:"Name is required!"},{status:400})
//     }
//     if(body.id>10)
//     return NextResponse.json({error:"Not found!"},{status:400}) 
// return NextResponse.json({name:`Hello ${body.name}`,id:`your id is:${body.id}`},{status:200});
// }


// //DELETE METHOD
// export async function DELETE(request:NextRequest){
//     const body =await request.json()
//     const validation = schema.safeParse(body)
//     if(!validation.success){
//     return NextResponse.json({error:"Not found!"},{status:400})
//     }
//     return NextResponse.json({}, {status:200})
// }