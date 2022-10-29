import Layout from '../components/layout'
import Sidebar from '../components/layout/Sidebar'

function Index() {
  return (
    <main className="flex">
      <Sidebar />
      <header className="flex flex-column items-center justify-center">
        <h1 className="font-3xl">
          Next.js with<span className="text-pink-600">xata + cloudinary</span>
        </h1>
      </header>

      <footer className="flex flex-column items-center justify-center">
        <span>
          Made for{' '}
          <a href="https://xata.io" rel="noopener noreferrer" target="_blank">
            {' '}
            Jamstack Hack
          </a>
        </span>
      </footer>
    </main>
  )
}

export default Index

// Index.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>
// }
