import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Button,DropdownButton,Dropdown,Container, Row, Col}  from 'react-bootstrap'

const ProductDetail = () => {
    let { id } = useParams()
    
    const [product, setProduct] = useState(null)
    
    const getProductDetail = async() => { 
        let url = `https://my-json-server.typicode.com/Dawon-yoon/shopping-app/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data)
    }

    useEffect(() => { 
        getProductDetail()
    }, [])
    
  return (
      <Container>
          <Row>
              <Col className='detail-img'>
                  <img alt='cloth' src={product?.img} />
              </Col>
              <Col>
                  <div>{product?.title}</div>
                  <div>₩{product?.price}</div>
                  <div>{product?.choice === true ? "Conscious Choice" : ""}</div>
                  <Dropdown >
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    {product?.size.length > 0 &&
                    product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark">
                 장바구니에 담기
                </Button>
              </Col>
          </Row>
      </Container>
  )
}

export default ProductDetail