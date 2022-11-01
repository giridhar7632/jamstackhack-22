import React from 'react'

const ProductHeader = () => {
  return (
    <div className="flex mt-6 mb-3 px-5 lg:px-8 py-3 shadow-sm rounded-md border cursor-loading">
      <div className="flex-1 text-sky-600 font-semibold">Name</div>
      <div className="flex-1 text-sky-600 font-semibold text-right lg:text-left">
        Price
      </div>
      <div className="flex-1 text-sky-600 font-semibold text-right lg:text-left">
        In Stock
      </div>
      <div className="flex-1"></div>
    </div>
  )
}

export default ProductHeader
