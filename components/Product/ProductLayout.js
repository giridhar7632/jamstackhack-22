import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section = ({ title, children, ...props }) => (
  <section className="rounded-md px-3 py-4 mb-3 border" {...props}>
    <h3 className="text-xl font-semibold text-gray-500 mb-3">{title}</h3>
    {children}
  </section>
)

const ProductLayout = ({ product }) => {
  return (
    <div className="flex gap-4 flex-col md:flex-row mt-6 overflow-auto">
      <div>
        <p className="mb-2 pl-3">Product Id: {product.id}</p>
        <Section title={'Name'}>
          <p className="text-2xl">{product.name}</p>
        </Section>
        <Section title={'Description'}>
          <p className="text-md max-w-md">{product.description}</p>
        </Section>
        <Section title={'Price'}>
          <p className="text-md max-w-md">{product.price}</p>
          <p className="text-xs">for one product</p>
        </Section>
        <Section title={'In Stock'}>
          <p className="text-md max-w-md">{product.stock}</p>
        </Section>
      </div>
      <div>
        <div className="mb-2 h-6"></div>
        <Section title={'Thumbnail'}>
          <Link href={product.thumbnail}>
            <a target="_blank">
              <Image
                height={281}
                width={500}
                className="max-w-[500px] max-h-[281px] aspect-video rounded"
                src={product.thumbnail}
                alt={''}
              />
            </a>
          </Link>
        </Section>
        <Section title={'Media'}>
          {product.media.length ? (
            <div className="grid grid-cols-2">
              {product.media?.map((i, idx) => (
                <Link href={i} key={idx}>
                  <a target="_blank">
                    <Image
                      height={138}
                      width={245}
                      className="max-h-[138px] max-w-[245px] p-1 aspect-video rounded overflow-hidden"
                      src={i}
                      alt={''}
                    />
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center font-bold text-gray-400"> No media</p>
          )}
        </Section>
      </div>
    </div>
  )
}

export default ProductLayout
