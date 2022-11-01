import React from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Sidebar from './Sidebar'

const Layout = ({ meta, children, ...props }) => {
  return (
    <div className="lg:flex min-h-screen max-w-screen">
      <Meta {...meta} />
      <Sidebar />
      <div className="flex flex-col w-[100%] max-w-screen-xl mx-auto">
        <main
          className="px-2 md:px-6 py-2 flex-1 max-h-[95vh] lg:max-h-[92vh]"
          {...props}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
