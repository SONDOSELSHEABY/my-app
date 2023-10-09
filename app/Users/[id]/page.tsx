import Link from 'next/link';
import React from 'react'
interface props {
    params : {id:number}
}
interface Props{
  params: {id:number};
}

const UserProductsPage = ({params:{id}}:Props) => {
return (
  <div>
   <Link href={`/Users/${id}/products/${id}`}>  Details of User {id}</Link>
   

  </div>
)
}

export default UserProductsPage
