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
        className={clsx('px-3 py-2 border block lg:hidden cursor-pointer')}
      >
        {isOpen ? 'Close' : 'Menu'}
      </div>
      <div
        className={clsx(
          'absolute w-screen h-max-content lg:relative lg:block lg:max-w-[15vw] p-3 border-r-1 lg:border-gray-200 bg-white ease-in-out duration-300 transition-all shadow lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav
          onClick={handleToggle}
          className={clsx('flex flex-col h-full px-3 py-6')}
        >
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/products'}>Products</NavLink>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
