import { Helmet } from 'react-helmet'
import Navbar from '../Components/Header/Navbar/Navbar'
import SideBar from '../Components/Header/SideBar/SideBar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className='main_content'>
        {children}
      </main>

      <section>
        <SideBar />
      </section>
    </>
  )
}

export default Layout