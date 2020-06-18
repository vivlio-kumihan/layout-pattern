import Head from "next/head"
import SideBAR from "./SideBAR"
import Header from "./Header"
import Footer from "./Footer"
import "./Layout.scss"
// import ReactDOM from 'react-dom'
// // fontawesomeのコアファイル
// import { library } from '@fortawesome/fontawesome-svg-core'
// //fontawesomeのbrandアイコンのインポート
// import { fab } from '@fortawesome/free-brands-svg-icons'
// //fontawesomeのsolidアイコンのインポート
// import { fas } from '@fortawesome/free-solid-svg-icons'
// //fontawesomeのregularアイコンのインポート
// import { far } from '@fortawesome/free-regular-svg-icons'
// //他のコンポーネントから簡単に呼び出せるようにするための登録処理？
// library.add(fab, fas, far);

const Layout = (porps) => {
  const appTitle = `Editorial by HTML5 UP`
  return (
    <div className="Wrapper">
      {/* origin header */}
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      {/* site header */}
      <Header appTitle={appTitle} />
    
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