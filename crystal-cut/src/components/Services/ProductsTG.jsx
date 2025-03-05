import React from 'react'
import { products } from '../../assets/assets'
import ProductCard from './ProductCard'; 

const ProductsTG = React.memo(() => {
  return (
    <div className="space-y-8">
      {products.toughened.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  )
})



export default ProductsTG