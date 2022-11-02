import { Link } from '../components/common/Links'
import Layout from '../components/layout'

function Index() {
  return (
    <header className="flex h-full flex-col items-center justify-center sm:max-lg:min-h-[85vh]">
      <h1 className="mb-3 text-3xl font-bold">Ecommerce CMS</h1>
      <p className="mb-2 text-sm text-gray-500">built with</p>
      <div className="mb-2 flex max-w-[300px] items-center">
        <Link href={'https://nextjs.org/'} target={'_blank'}>
          Next.js
        </Link>
        <Link href={'https://xata.io/'} target={'_blank'}>
          Xata
        </Link>
        <Link href={'https://cloudinary.com/'} target={'_blank'}>
          Cloudinary
        </Link>
      </div>
      <div className="text-sm">
        deployed to{' '}
        <Link href={'https://netlify.com'} target={'_blank'}>
          Netlify
        </Link>
      </div>
    </header>
  )
}

export default Index

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
