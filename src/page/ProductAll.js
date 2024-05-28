import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Col, Container,Row } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {

    const [productList, setProductList] = useState([])
    
    const [query, setQuery] = useSearchParams()

    const getProduct = async () => { 
        let searchQuery = query.get('q') || ''
        console.log("qyery?",searchQuery)
        let url = `https://my-json-server.typicode.com/Dawon-yoon/shopping-app/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

    useEffect(() => { 
        getProduct()
    },[query])

  return (
      <div>
          <Container>
              <Row>
                  {productList.map((item) => <Col md={3} sm={12}>
                      <ProductCard item={item} />
                  </Col>)}
              </Row>
          </Container>
              
    </div>
  )
}

export default ProductAll