import React from 'react'
import Head from 'next/head'

const makeTitle = (title, name) =>
  title === name || !name ? title : `${title} | ${name}`

const Meta = ({
  title = 'Jamstack Hack',
  name = '',
  description = 'An ecommerce content management system.',
  url = process.env.NEXT_PUBLIC_URL,
  image = '/og.jpg',
  children,
}) => (
  <Head>
    <title>{makeTitle(title, name)}</title>
    <meta property="og:title" content={makeTitle(title, name)} key="og:title" />
    <meta property="og:image" content={url + image} key="og:image" />
    <meta property="description" content={description} key="description" />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={title} key="twitter:title" />
    <meta
      property="twitter:description"
      content={description}
      key="twitter:description"
    />
    <meta property="twitter:image" content={image} key="twitter:image" />
    <meta
      name="theme-color"
      content="#f1f5f8"
      media="(prefers-color-scheme: dark)"
    />
    <meta
      name="theme-color"
      content="#172126"
      media="(prefers-color-scheme: light)"
    />
    {children}
  </Head>
)

export default Meta
