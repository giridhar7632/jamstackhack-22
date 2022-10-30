import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prev) => !prev)

  return (<div className={clsx("absolute w-0 lg:block lg:min-w-[15vw] p-3 ease-in-out", isOpen && "w-screen")}>
    <nav className={}></nav>
  </div>)
}

export default Sidebar
