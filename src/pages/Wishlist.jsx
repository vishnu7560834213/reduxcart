import React from 'react';
import { Row, Col, Button, Card } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from '../slice/wishlistslice';
import { addToCart } from '../slice/cartSlice';


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
const dispatch=useDispatch()
const handleWishlistCart=(product)=>{
dispatch(addToCart(product))
dispatch(removeFromWishlist(product.id))
}
  return (
    <div style={{ marginTop: '100px' }}>
      <Row>
        {wishlistArray.length > 0 ? (
          wishlistArray.map((product, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={"200px"} src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description.slice(0, 50)}
                  </Card.Text>
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn' onClick={()=>dispatch(removeFromWishlist(product.id))}>
                      <i className="fa-solid fa-trash" style={{ color: '#d22014' }}></i>
                    </Button>
                    <Button className=' btn' onClick={()=>handleWishlistCart(product)}>
                      <i className="fa-solid fa-cart-shopping" style={{ color: '#eb1405' }}></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div style={{ height: '100vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'500px'} width={'500px'} src='https://bakestudio.in/assets/images/cart/empty-cart.gif' alt="Empty Cart" />
            <h3 className='text-center text-danger'>Wishlist is empty!!</h3>
            <Link className="btn btn-warning rounded" to={"/"}>Back to home</Link>
          </div>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
