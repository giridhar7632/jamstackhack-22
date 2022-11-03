import React from 'react'
import ProductItem from './ProductItem'

const ProductItems = ({ products }) => {
  return (
    <div className="block max-h-[75vh] overflow-y-auto rounded-lg border p-2 desktop:max-h-[80vh]">
      {products.length ? (
        products.map((i) => <ProductItem key={i.id} {...i} />)
      ) : (
        <div className="h-[100px] w-full text-center font-bold text-gray-300">
          Add some products to see the data.
        </div>
      )}
    </div>
  )
}

export default ProductItems
