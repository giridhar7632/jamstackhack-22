import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLink } from '../common/Links'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <>
      <div
        onClick={handleToggle}
        className={clsx('block cursor-pointer border px-3 py-2 lg:hidden')}
      >
        {isOpen ? 'Close' : 'Menu'}
      </div>
      <div
        className={clsx(
          'h-max-content border-r-1 absolute w-screen bg-white p-3 shadow transition-all duration-300 ease-in-out lg:relative lg:block lg:max-w-[15vw] lg:translate-x-0 lg:border-gray-200',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav
          onClick={handleToggle}
          className={clsx('flex h-full flex-col px-3 py-6')}
        >
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/products'}>Products</NavLink>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
