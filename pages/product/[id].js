import React from 'react'
import Layout from '../../components/layout'
import ProductLayout from '../../components/Product/ProductLayout'
import DeleteProduct from '../../components/Product/DeleteProduct'
import UpdateProduct from '../../components/Product/UpdateProduct'
import data from '../../utils/products.json'

const Product = ({ id, product }) => {
  return (
    <div>
      <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
        <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
          <span className="mr-2 text-sm font-medium text-gray-500">
            Product:{' '}
          </span>
          {id}
        </h1>
        <div className="flex items-center space-x-2">
          <UpdateProduct product={product} />
          <DeleteProduct />
        </div>
      </header>
      {product && <ProductLayout product={product} />}
    </div>
  )
}

export default Product

Product.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Products' }}>{page}</Layout>
}

export async function getStaticProps({ params }) {
  const product = data.PRODUCTS.filter((i) => i.id == params.id)[0]
  return {
    props: {
      id: params.id,
      product,
    },
  }
}

export async function getStaticPaths() {
  const paths = data.PRODUCTS.map((p) => ({
    params: { id: `${p.id}` },
  }))
  return {
    paths,
    fallback: true,
  }
}
