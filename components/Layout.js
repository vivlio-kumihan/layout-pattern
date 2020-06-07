import Head from "next/head"
import Header from "./Header"
import NavBar from "./NavBar"

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

      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }
          html, body, #__next {
            width: 100%;
            height: 100%;
          }
          body {
            margin: 0;
            padding: 0;
            font-size: 4mm;
            font-height: 1.5rem;
          }
          .Wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
          }
          .Content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>

    </div>
  )
}

export default Layout