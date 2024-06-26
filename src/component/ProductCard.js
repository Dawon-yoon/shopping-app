import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const showDetail = () => { 
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='product-card' onClick={showDetail}>
        <img alt='product-image' src={item?.img}/>
          <div>{item?.choice===true? "Conscious Choice":""}</div> 
          <div>{item?.title}</div>
          <div>₩{item?.price}</div>
          <div>{item.new===true? "new":""}</div>
    </div>
  )
}

export default ProductCard