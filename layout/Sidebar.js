import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <div className="block bg-gray-700 min-w-10">
      <div className="font-semibold text-sky-100">Ecommerce CMS</div>
      <nav className="flex flex-col">
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/'}>
          <a>Products</a>
        </Link>
        <Link href={'/'}>
          <a>Logout</a>
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
