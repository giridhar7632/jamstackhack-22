import React from 'react'
import { Link } from '../common/Links'

const ProductItem = ({ id, name, price, stock }) => {
  return (
    <div className="my-2 flex cursor-pointer rounded-md border px-3 py-4 shadow-sm hover:shadow lg:px-6">
      <p className="flex-1 truncate font-medium">{name}</p>
      <p className="flex-1 text-right lg:text-left">$ {price}</p>
      <p className="flex-1 text-right lg:text-left">{stock}</p>
      <div className="flex-1 text-right text-sm lg:text-left">
        <Link href={`/product/${id}`}>
          <span className="hidden text-sm lg:inline-block">View Details</span>
          <span className="inline-block text-sm lg:hidden">Details</span>
        </Link>
      </div>
    </div>
  )
}

export default ProductItem
