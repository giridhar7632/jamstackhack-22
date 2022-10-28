import clsx from 'clsx'
import React from 'react'

const Input = ({ register, children, error, className, ...props }) => {
  return (
    <input
      className={clsx([
        'form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 focus:ring-2 font-normal text-gray-700',
        error ? 'ring ring-red-500' : 'border-gray-300',
        'm-0 rounded-md transition ease-in-out focus:ring-sky-300 focus:bg-white focus:text-gray-700 focus:outline-none',
        className,
      ])}
      {...props}
      {...register}
    />
  )
}

export default Input
