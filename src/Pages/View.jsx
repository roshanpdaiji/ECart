import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'



function View() {

const {id}=useParams() //can handle path related information from components

const [product,setProduct]=useState({})


const {wishlist} = useSelector(state=>state.wishListReducer)

const cart = useSelector((state)=>state.cartReducer)




const dispatch = useDispatch()

useEffect(()=>{
  if(localStorage.getItem("allProducts")){
    const allProducts=JSON.parse(localStorage.getItem("allProducts"))
    console.log("allProducts")
    setProduct(allProducts.find(item=>item.id==id))
  }
  else{
    setProduct("")
  }
},[])


console.log(product)


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
  <Header/>
  <div className="container ms-5 row" style={{ marginTop: '100px' }}>
  {/* Image Section */}
  <div className="col-lg-4 mt-4">
    <img
      src={product?.thumbnail}
      alt="Product"
      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
    />
  </div>

  <div className="col-lg-2"></div>

  {/* Product Details Section */}
  <div className="col-lg-6">

    <p>Pid:{product?.id}</p>
    <h1>{product?.title}</h1>
    <p>{product?.description}</p>
    <h3>
      Price: <span className="text-danger">{product?.price}</span>
    </h3>

    {/* Wishlist and Cart Buttons */}
    <div className="d-flex justify-content-between mt-4">
      <Button className="btn btn-outline-dark" onClick={()=>handleWishlist(product)}>
        <i className="fa-solid fa-heart text-danger me-2"></i> Wishlist
      </Button>
      <Button className="btn btn-outline-dark" onClick={()=>handleCart(product)}>
        <i className="fa-solid fa-cart-shopping text-warning me-2"></i> Cart
      </Button>
    </div>
    
  </div>
</div>


    </>
  )
}

export default View

