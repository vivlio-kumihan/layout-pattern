import Head from "next/head"
import Header from "./Header"
import NavBar from "./NavBar"
import "./Layout.scss"
import SideBar from "./SideBar"

const Layout = (porps) => {
  const appTitle = `> Learn next.js Layout`
  const siteTitle = "Takahiro Kumihan.com"
  return (
    <div className="Wrapper">
      <Head>
        <title>Learn next.js Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} siteTitle={siteTitle} />

      <SideBar />
      <div className="Content">
        <div className="Main">
          {porps.children}
        </div>
        <NavBar />
      </div>

    </div>
  )
}

export default Layout