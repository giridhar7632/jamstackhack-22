import React from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Sidebar from './Sidebar'

const Layout = ({ meta, children, ...props }) => {
  return (
    <div className="lg:flex relative min-h-screen max-w-screen">
      <Meta {...meta} />
      <Sidebar />
      <div className="flex flex-col w-[100%]">
        <main className="p-6 flex-1" {...props}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
