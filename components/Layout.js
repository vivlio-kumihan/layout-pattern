import Head from "next/head"
import SideBAR from "./SideBAR"
import Header from "./Header"
import Footer from "./Footer"
import "./Layout.scss"

const Layout = (porps) => {
  const appTitle = `> Learn next.js Layout`
  const siteTitle = "Takahiro Kumihan.com"
  return (
    <div className="Wrapper">
      {/* origin header */}
      <Head>
        <title>Learn next.js Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      {/* site header */}
      <Header appTitle={appTitle} siteTitle={siteTitle} />
    
      {/* side bar */}
      <SideBAR />

      {/* contents */}
      <div className="Content">
        {porps.children}
      </div>

      <Footer />

    </div>
  )
}

export default Layout