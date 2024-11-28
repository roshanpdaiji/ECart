import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Components/Header'
import { addToWishlist } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'




function Home() {

  const dispatch=useDispatch()
  const {allProducts,loading,error}=useSelector(state=>state.productReducer)
  const {wishlist} = useSelector(state=>state.wishListReducer)
  const cart = useSelector((state)=>state.cartReducer)



  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const handleWishlist=(product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already exist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }
  

  //adding to cart


  const handleCart=(product)=>{
     const existingProduct = cart?.find(item=>item.id==product.id)
     if(existingProduct){
      alert("items added")
      dispatch(addToCart(product))
     }
     else{
      alert("item added")
      dispatch(addToCart(product))
     }
  }






  
  return (
    <>

<Header insideHome/>

<div className="container ms-5 row">


{ 
loading?<div className='text-center' >
  <Spinner animation="border" variant="primary"></Spinner>

</div>:
  <Row>

{  allProducts?.length>0?allProducts.map(product=>(
  <Col key={product?.id}>
  
  <Card style={{ width: '19rem' }} className='mt-5 productcard' >

<Link to={`/view/${product?.id}`}>
<Card.Img 
  className="m-2" 
  variant="top" 
  src={product?.thumbnail} 
  alt="" width={"100%"}
/>
</Link>
<Card.Body>
  <Card.Title className='text-danger fw-bolder'>{product?.title}</Card.Title>
  <Card.Text>
   {product?.description.slice(0,40)}...
  </Card.Text>

  <div className="d-flex justify-content-between">
    <Button className="btn btn-light" onClick={()=>handleWishlist(product)}>
      <i className="fa-solid fa-heart text-danger"></i>
    </Button>
    <Button className="btn btn-light" onClick={()=>handleCart(product)}>
      <i className="fa-solid fa-cart-shopping text-warning"></i>
    </Button>
  </div>
</Card.Body>
</Card>
  
  </Col>)): 
  
  <p className='text-danger'>Nothing to dispaly</p>
}

 </Row>}


</div>


    </>
  )
}

export default Home
