import React from 'react'

 async function getPostsDetails(id:number) {
        const  response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        });
        console.log(response);
        return response.json();
    }

type Posts = {
   id:number,
   title:string,
   body:string,
}
interface props {
    params: {post_id:number}
}
const PostDetails = async ({params:{post_id}}:props) => {
   
    const Singlepost = await getPostsDetails(post_id);
    
  return (
    
    
    <div style={{justifyContent:"center",alignItems:"center",display:"flex", flexDirection:"column"}}>
        <div style={{width:"70%",backgroundColor:'white' , color:"black" , marginTop:"20px",  padding:"16px" ,  borderRadius:"5px"}} >
       <h1>{Singlepost.title}</h1>
       <p>{Singlepost.body}</p>
    </div>
    </div>
 
  )
}

export default PostDetails