import React from 'react'
import { products } from '../../assets/assets'
import ProductCard from './ProductCard'; 

const ProductsDG = React.memo(() => {
  return (
    <div className="space-y-8">
    {products.designed.map((product, index) => (
      <ProductCard key={index} product={product} index={index} />
    ))}
  </div>
  )
})

export default ProductsDG