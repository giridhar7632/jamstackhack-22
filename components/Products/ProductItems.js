import React from 'react'
import ProductItem from './ProductItem'
import data from '../../utils/products.json'

const ProductItems = () => {
  return (
    <div className="block border rounded-lg max-h-[70vh] desktop:max-h-[75vh] p-2 overflow-y-auto">
      {data.PRODUCTS.map((i) => (
        <ProductItem key={i.id} {...i} />
      ))}
    </div>
  )
}

export default ProductItems
