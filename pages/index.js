import { Link } from '../components/common/Links'
import Layout from '../components/layout'

function Index() {
  return (
    <header className="flex flex-col h-full items-center justify-center">
      <h1 className="text-3xl font-bold mb-3">Ecommerce CMS</h1>
      <p className="text-sm text-gray-500 mb-2">built with</p>
      <div className="max-w-[300px] flex items-center mb-2">
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
