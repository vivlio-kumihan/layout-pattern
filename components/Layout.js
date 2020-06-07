import Head from "next/head"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%"
}

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
}

const Layout = (porps) => {
  return (
    <div className="Wrapper" style={wrapperStyle}>
      <Head>
        <title>Learn next.js Layout</title>
      </Head>
      <Header />
      <div className="Content" style={contentStyle}>
        {porps.children}
      </div>
      <NavBar />
    </div>
  )
}

export default Layout