import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { addToWishlist } from '../slice/wishlistslice';
import {useDispatch  } from "react-redux";
import { addToCart } from '../slice/cartSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);
const dispatch=useDispatch()

  return (
    <div>
      <Row>
        {
           data?.length > 0 ?data?.map((products, index) => (
              <Col key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height={"200px"} src={products?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{products.title}</Card.Title> {/* Assuming there's a 'name' property */}
                    <Card.Text>
                      {products.description.slice(0,50)}
                    </Card.Text>
                    <Card.Text>
                     $ {products.price}
                    </Card.Text>
                    <div className='d-flex  justify-content-between'>
                      <Button className='btn ' onClick={()=>dispatch (addToWishlist(products))} ><i className="fa-solid fa-heart" style={{ color: '#d22014' }}></i> </Button> {/* className instead of class */}
                      <Button className=' btn ' onClick={()=>dispatch(addToCart(products))}><i className="fa-solid fa-cart-shopping" style={{ color: '#eb1405' }}></i> </Button> {/* className instead of class */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )):
            <p>Nothing to display</p>
        }
      </Row>
    </div>
  )
}

export default Home;
