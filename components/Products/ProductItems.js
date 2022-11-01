import React from 'react'
import ProductItem from './ProductItem'
const PRODUCTS = [
  {
    id: 1,
    name: 'Product 1 hjwbdh sb sbasjc ',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 2,
    name: 'Product 2',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 3,
    name: 'Product 3',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 4,
    name: 'Product 4',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 5,
    name: 'Product 5',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 6,
    name: 'Product 6',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 11,
    name: 'Product 1',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 12,
    name: 'Product 2',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 13,
    name: 'Product 3',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 14,
    name: 'Product 4',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 15,
    name: 'Product 5',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
  {
    id: 16,
    name: 'Product 6',
    description:
      'wkudhgjk hv c weuye wbn sy qhgqcnq 126ouwfv12b e2oevqwjhdqw dwquvdqw dqvdyqwv dwq d8qw dhqwvdqwv dbjqwd7uq wjdwdv wegvmcdqhgdgqo;wdhiqy80pq;wqj quuhbwqd q.',
    price: 36,
    stock: 1000,
    thumbnail: '',
    media: [''],
  },
]

const ProductItems = () => {
  return (
    <div className="block border rounded-lg max-h-[70vh] desktop:max-h-[75vh] p-2 overflow-y-auto">
      {PRODUCTS.map((i) => (
        <ProductItem key={i.id} {...i} />
      ))}
    </div>
  )
}

export default ProductItems
