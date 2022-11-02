import Layout from '../components/layout'
import ProductItems from '../components/Products/ProductItems'
import { useState } from 'react'
import ProductItemsSkeleton from '../components/Products/ProductItemsSkeleton'
import ProductHeader from '../components/Products/ProductHeader'
import AddProduct from '../components/Product/AddProduct'

function Products() {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <header className="mt-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">Products</h1>
        <div className="flex items-center space-x-2">
          <AddProduct />
        </div>
      </header>
      <ProductHeader />
      {loading ? <ProductItemsSkeleton /> : <ProductItems />}
    </div>
  )
}

export default Products

Products.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Products' }}>{page}</Layout>
}
