import Layout from '../components/layout'
import Button from '../components/common/Button'
import ProductItems from '../components/Products/ProductItems'
import { useState } from 'react'
import ProductItemsSkeleton from '../components/Products/ProductItemsSkeleton'
import ProductHeader from '../components/Products/ProductHeader'

function Products() {
  const [loading, setLaoding] = useState(true)

  return (
    <div>
      <header className="flex items-center justify-between mt-3">
        <h1 className="text-2xl font-bold text-gray-700">Products</h1>
        <div className="flex items-center space-x-2">
          <Button type="button">Add Product</Button>
          <Button
            onClick={() => setLaoding((prev) => !prev)}
            variant={'text'}
            type="button"
          >
            Load items
          </Button>
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
