import React from 'react'
import ProductItem from './ProductItem'
import data from '../../utils/products.json'

const ProductItems = () => {
  return (
    <div className="block max-h-[75vh] overflow-y-auto rounded-lg border p-2 desktop:max-h-[80vh]">
      {data.PRODUCTS.map((i) => (
        <ProductItem key={i.id} {...i} />
      ))}
    </div>
  )
}

export default ProductItems
