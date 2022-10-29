import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <div className="flex flex-col min-w-[10vw]">
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/'}>
        <a>Products</a>
      </Link>
      <Link href={'/'}>
        <a>Logout</a>
      </Link>
    </div>
  )
}

export default Sidebar
