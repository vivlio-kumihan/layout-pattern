import Head from "next/head"
import Header from "./Header"
import NavBar from "./NavBar"
import "./Layout.scss"

const Layout = (porps) => {
  return (
    <div className="Wrapper">
      <Head>
        <title>Learn next.js Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header />

      <div className="Content">
        {porps.children}
      </div>

      <NavBar />
    </div>
  )
}

export default Layout