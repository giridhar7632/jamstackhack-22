import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section = ({ title, children, ...props }) => (
  <section className="mb-3 rounded-md border px-3 py-4" {...props}>
    <h3 className="mb-3 text-xl font-semibold text-gray-500">{title}</h3>
    {children}
  </section>
)

const ProductLayout = ({ product }) => {
  return (
    <div className="mt-6 flex flex-col gap-4 overflow-auto md:flex-row">
      <div>
        <p className="mb-2 pl-3">Product Id: {product.id}</p>
        <Section title={'Name'}>
          <p className="text-2xl">{product.name}</p>
        </Section>
        <Section title={'Description'}>
          <p className="text-md max-w-md">{product.description}</p>
        </Section>
        <Section title={'Price'}>
          <p className="text-md max-w-md">{product.price} $</p>
          <p className="text-xs">for one product</p>
        </Section>
        <Section title={'In Stock'}>
          <p className="text-md max-w-md">{product.stock}</p>
        </Section>
      </div>
      <div>
        <div className="mb-2 h-6"></div>
        <Section title={'Thumbnail'}>
          {product.thumbnail ? (
            <Link href={product.thumbnail}>
              <a target="_blank">
                <Image
                  height={281}
                  width={500}
                  className="aspect-video max-h-[281px] max-w-[500px] rounded"
                  src={product.thumbnail}
                  alt={product.name}
                />
              </a>
            </Link>
          ) : (
            <p className="h-[100px] w-[400px] text-center font-bold text-gray-300">
              No thumbnail
            </p>
          )}
        </Section>
        <Section title={'Media'}>
          {product.media?.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {product.media?.map((i, idx) => (
                <Link href={i} key={idx}>
                  <a target="_blank">
                    <Image
                      height={138}
                      width={245}
                      className="aspect-video w-full overflow-hidden rounded p-1 lg:max-h-[138px] lg:max-w-[245px]"
                      src={i}
                      alt={''}
                    />
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <p className="h-[100px] w-[400px] text-center font-bold text-gray-300">
              No media
            </p>
          )}
        </Section>
      </div>
    </div>
  )
}

export default ProductLayout
