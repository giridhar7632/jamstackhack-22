import React from 'react'
import { getXataClient } from '../../utils/xata'
import Layout from '../../components/layout'
import ProductLayout from '../../components/Product/ProductLayout'
import DeleteProduct from '../../components/Product/DeleteProduct'
import UpdateProduct from '../../components/Product/UpdateProduct'

const xata = getXataClient()

function Product({ product }) {
  return (
    <Layout meta={{ name: product?.name || 'Product' }}>
      <div>
        <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
          <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
            <span className="mr-2 text-sm font-medium text-gray-500">
              Product:{' '}
            </span>
            {product?.name}
          </h1>
          <div className="flex items-center space-x-2">
            <UpdateProduct product={product} />
            <DeleteProduct productId={product?.id} />
          </div>
        </header>
        {product ? (
          <ProductLayout product={product} />
        ) : (
          <div className="w-full text-center text-2xl font-bold text-gray-300">
            No details
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Product

export async function getStaticProps({ params }) {
  try {
    const productsData = await xata.db.products.getAll()
    const data = productsData.find((i) => i.id == params.id)
    return {
      props: { product: data },
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}

export async function getStaticPaths() {
  const products = await xata.db.products.getAll()
  return {
    paths: products.map((item) => ({
      params: { id: item.id },
    })),
    fallback: true,
  }
}
