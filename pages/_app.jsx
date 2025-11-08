import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow container py-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
