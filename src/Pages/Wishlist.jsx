import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'



function Wishlist() {

  const {wishlist} = useSelector(state=>state.wishListReducer)

  //deleting from wishlist

  const dispatch = useDispatch()

//removing from wishlist on adding from cart


  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product?.id))

  }



  
  return (

   <>
   
   <Header/>
    
    <div style={{ marginTop: "100px" }} className="container-fluid ms-4">

<Row>

{ 

wishlist?.length>0?wishlist.map(product=>(
  <Col>

  <Card style={{ width: '18rem' }}>

    <Link to={`/view/${product?.id}`}>
    <Card.Img 
    width={"100%"}
      className="m-2" 
      variant="top" 
      src={product?.thumbnail} 
      alt=""
    />
    </Link>
   
    <Card.Body>
      <Card.Title>{product?.title}</Card.Title>
      <Card.Text>
        {product?.description.slice(0,30)}
      </Card.Text>

      <div className="d-flex justify-content-between">
        <Button className="btn btn-light" onClick={()=>dispatch(removeFromWishlist(product?.id))}>
          <i className="fa-solid fa-trash text-danger"></i>
        </Button>
        <Button className="btn btn-light" onClick={()=>handleCart(product)}>
          <i className="fa-solid fa-cart-plus text-warning"></i>
        </Button>
      </div>
    </Card.Body>
  </Card>

  </Col>
)):

<div style={{ marginTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
  <img src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="Empty Wishlist" width="500px" />
  <h2 className="text-primary mt-5">Your wishlist is empty</h2>
</div>

}
</Row>

</div>
   
   </>

  )
}

export default Wishlist
