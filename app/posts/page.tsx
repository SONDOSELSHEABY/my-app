import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

async function getPosts() {
         const  response  = await fetch("https://jsonplaceholder.typicode.com/posts",{
            next:{
                revalidate:120,
            }
         });
         console.log(response);
         
         return response.json();
    }
   
    type Posts = {
        id:number,
        title:string,
        body:string,
    }
    interface Props{
      searchParams:{orderBy:string}
  }
const PostsPage = async ({searchParams}:Props) => {
   

    const postsData:Posts[] = await getPosts();
    
         const sortdPosts = sort(postsData).
          asc(searchParams.orderBy==="title"? post =>post.title: post=>post .body);
const postList =  sortdPosts.map((post:Posts) =>
    <Link  style={{width:"70%",backgroundColor:'gray' , color:"black" , marginTop:"20px",       padding:"16px" ,}} href={`posts/${post.id}`}> 
        <div key={post.id}> 
         <h1 style={{fontSize:"50px"}}>{post.title}</h1> 
         <p >{post.body}</p> 
         
         </div>
         </Link>
         );

        
  return (
    <> 
         <div style={{justifyContent:"center",alignItems:"center",display:"flex", flexDirection:"column"}}> 
                <h1>{searchParams.orderBy}</h1>
                <Link href="/posts?orderBy=title">By-Title</Link><Link href="/posts?orderBy=body">By-Body</Link>
                
            {postList}
         </div>
    </> 

  )
}

export default PostsPage