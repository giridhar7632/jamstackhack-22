import React from 'react'
import { Link } from '../common/Links'

const Footer = () => {
  return (
    <footer className="h-[5vh] w-full border-t border-gray-200 bg-white p-3 text-center lg:h-[8vh]">
      Made for
      <Link href={'https://hackmamba.io/hackathon/'} target={'_blank'}>
        JamStack Hack 2022
      </Link>
    </footer>
  )
}

export default Footer
