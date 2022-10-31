import NextLink from 'next/link'

export const Link = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a className="text-sky-600 hover:underline px-2">{children}</a>
    </NextLink>
  )
}

export const NavLink = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a className="p-2 rounded border text-center my-2 border-gray-200 hover:shadow-sm text-gray-800 font-semibold hover:text-sky-600 ease">
        {children}
      </a>
    </NextLink>
  )
}
