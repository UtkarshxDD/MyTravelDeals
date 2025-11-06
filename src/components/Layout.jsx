import Navbar from './Navbar'
import Footer from './Footer'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-textPrimary">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


