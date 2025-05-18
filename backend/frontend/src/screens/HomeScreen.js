import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from "../actions/productActions";
import { useLocation } from 'react-router-dom'; // React Router v6

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
const keyword = queryParams.get('keyword') || '';
const pageNumber = queryParams.get('page') || 1;


  // Log for debugging
  console.log("Location search:", location.search);  // Check the raw location search string
  console.log("Dispatching with keyword:", keyword);  // Check the extracted keyword value

  useEffect(() => {
    dispatch(listProducts(keyword ,pageNumber));
  }, [dispatch, keyword,pageNumber]);

  return (
    <div>
       {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        
        <div>

        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>

            <Paginate page={page} pages={pages} keyword={keyword} />
            
        </div>
      )}
    </div>
  );
}

export default HomeScreen;



