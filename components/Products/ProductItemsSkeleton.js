import React from 'react'

const ItemSkeleton = () => {
  return (
    <div className="flex animate-pulse border space-x-16 my-2 px-6 py-4 rounded-md shadow-sm cursor-loading">
      <div className="flex-1 rounded bg-gray-200 h-3"></div>
      <div className="flex-1 rounded bg-gray-200 h-3"></div>
      <div className="flex-1 rounded bg-gray-200 h-3"></div>
      <div className="flex-1 rounded bg-gray-200 h-3"></div>
    </div>
  )
}

const ProductItemsSkeleton = () => (
  <>
    {new Array(5).fill(0).map((_, idx) => (
      <ItemSkeleton key={idx} />
    ))}
  </>
)

export default ProductItemsSkeleton
