import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../Redux/slice/cartSlice';
import { Link } from 'react-router-dom';




function Cart() {

  const cart = useSelector((state)=>state.cartReducer)

  const dispatch=useDispatch()


  //cart summary

  const [total,setTotal] = useState(0)


  useEffect(()=>{

    if(cart?.length>0){
    setTotal(cart?.map(product=>product?.totalPrice).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
  },[cart])







  return (

    <>

    <Header/>

  
 {  
 cart.length>0?(
  <div className="container mt-5">

      <div className="row">
        {/* Spacer Column */}
        <div className="col-lg-1"></div>

        {/* Cart Table */}
        <div className="col-lg-7">
          <div className="table-responsive shadow rounded">
            <table className="table table-bordered text-center">
              <thead className="bg-light">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
             {  
             cart?.map((product,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt="Product"
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
              </td>
              <td><input type="text" readOnly value={product.quantity} style={{ width: "25px", textAlign: "center", lineHeight: "25px" }} /></td>
              <td>Rs{product.totalPrice}</td>
              <td>
                <button className="btn btn-light" onClick={()=>dispatch(removeFromCart(product?.id))}>
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
             ))
            
                
                }


              </tbody>
            </table>

            <div className="d-flex justify-content-between p-3">
              <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
              <Link to={'/'} className='btn btn-info'>Shop More</Link>
            </div>


          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-3">
          <div className="card shadow rounded p-4">
            <h2>Cart Summary</h2>
            <h4>
              <span className="text-dark fw-bold">Total Products:</span> {cart?.length}
            </h4>
            <h4>
              <span className="text-dark fw-bold">Total Price:</span>{' '}
              <span className="text-danger fw-bold">{total}</span>
            </h4>
            <div className="d-grid mt-3">
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
          
        </div>

        {/* Spacer Column */}
        <div className="col-lg-1"></div>
      </div>

    </div>):

<div style={{ marginTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh" }}>
<img src="https://static.vecteezy.com/system/resources/previews/011/049/134/non_2x/supermarket-shopping-cart-design-full-of-goods-and-shopping-bags-vector.jpg" alt="Empty Wishlist" width="500px" />
<h2 className="text-primary">Your Cart is empty</h2>
</div>

    }

    </>
  );
}


export default Cart;

