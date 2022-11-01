import React from 'react'
import { Link } from '../common/Links'

const Footer = () => {
  return (
    <footer className="p-3 text-center w-full border-t h-[5vh] lg:h-[8vh] bg-white border-gray-200">
      Made for
      <Link href={'https://hackmamba.io/hackathon/'} target={'_blank'}>
        JamStack Hack 2022
      </Link>
    </footer>
  )
}

export default Footer
