interface Props{

    params: {id:number,productId:number};
    
}

const UserProductsPage = ({params:{id,productId}}:Props) => {
  return (
    <div>
      this User {id} <br />
      this is product Detail {productId} 

    </div>
  )
}

export default UserProductsPage
