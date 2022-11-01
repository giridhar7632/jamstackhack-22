import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import ChevronRight from './icons/ChevronRight'

export default function MyDisclosure({ title, children, ...props }) {
  return (
    <Disclosure as="div" {...props}>
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className={clsx(
              'flex items-center justify-between p-3 border rounded-md font-medium',
              !open && 'shadow-sm hover:shadow-md'
            )}
          >
            {title}
            <ChevronRight
              className={clsx(
                'text-gray-600',
                open && 'rotate-90 transform duration-100'
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel as="div" className="p-3 shadow-sm rounded">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
