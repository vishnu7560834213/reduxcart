import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link,useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { removeFromCart,emptyCart } from '../slice/cartSlice';


function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
const navigate=useNavigate()
  const sumVal = cartArray.reduce((total, product) => total + product.price, 0);
const[total,setTotal]=useState(0)
const getCartTotal=()=>{

if(cartArray.length>0){
setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
}
else{
setTotal(0)
}
}
useEffect(()=>{
getCartTotal()
},[cartArray])

const handleCart=()=>{
dispatch(emptyCart())
alert("Your order placed succesfully...Thanks for purchasing")
navigate('/')
}
  return (
    <div style={{ marginTop: '100px' }}>
      {cartArray.length > 0 ? (
        <div className="row">
          <div className="col lg-8">
            <table className='table shadow rounded'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td><img width={'100px'} height={'80px'} src={product.thumbnail} alt="" /></td>
                    <td>${product.price}</td>
                    <td>
                      <Button className='btn' onClick={() => dispatch(removeFromCart(product.id))}>
                        <i className="fa-solid fa-trash text-danger" style={{ color: '#d22014' }}></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-3">
            <div className="border mt-3 rounded shadow p-2 w-100">
              <h1 className='text-primary p-2'>Cart summary</h1>
              <h4>Total products: <span>{cartArray.length}</span></h4>
              <h4>Total: <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
              <div className="d-grid">
                <button className='btn btn-success mt-5 rounded' onClick={handleCart}>Check out</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: '100vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'500px'} width={'500px'} src='https://bakestudio.in/assets/images/cart/empty-cart.gif' alt="Empty Cart" />
          <h3 className='text-center text-danger'>Wishlist is empty!!</h3>
          <Link className="btn btn-warning rounded" to={"/"}>Back to home</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
