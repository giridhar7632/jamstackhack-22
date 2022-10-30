import React from 'react'
import Meta from './Meta'
import Sidebar from './Sidebar'

const Layout = ({ meta, children, ...props }) => {
  return (
    <div
      className="lg:flex relative"
      style={{ minHeight: '100vh', maxWidth: '100vw' }}
    >
      <Meta {...meta} />
      <Sidebar />
      <main {...props}>{children}</main>
    </div>
  )
}

export default Layout
