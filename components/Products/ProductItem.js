import React from 'react'
import { Link } from '../common/Links'

const ProductItem = ({ id, name, price, stock }) => {
  return (
    <div className="flex my-2 px-3 lg:px-6 py-4 rounded-md shadow-sm border hover:shadow cursor-pointer">
      <p className="font-medium flex-1 truncate">{name}</p>
      <p className="flex-1 text-right lg:text-left">$ {price}</p>
      <p className="flex-1 text-right lg:text-left">{stock}</p>
      <div className="flex-1 text-sm text-right lg:text-left">
        <Link href={`/product/${id}`}>
          <span className="text-sm hidden lg:inline-block">View Details</span>
          <span className="text-sm inline-block lg:hidden">Details</span>
        </Link>
      </div>
    </div>
  )
}

export default ProductItem
