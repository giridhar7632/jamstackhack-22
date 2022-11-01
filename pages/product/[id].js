import React from 'react'
import Layout from '../../components/layout'
import DeleteProduct from '../../components/Product/DeleteProduct'
import UpdateProduct from '../../components/Product/UpdateProduct'

const Product = ({ id }) => {
  return (
    <div>
      <header className="flex items-center justify-between mt-3">
        Product: <h1 className="text-xl font-bold text-gray-700">{id}</h1>
        <div className="flex items-center space-x-2">
          <UpdateProduct />
          <DeleteProduct />
        </div>
      </header>
    </div>
  )
}

export default Product

Product.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Products' }}>{page}</Layout>
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
