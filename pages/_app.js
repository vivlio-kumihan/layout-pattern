import "../styles/reset.scss"
import "../styles/global.scss"
// import "../styles/NavBar.scss"
// import "../styles/Header.scss"

// 『_app.js』で『グローバルCSS』を追加する。
// 実際のファイルは『stylesデレクトリ』へ。
// ブラウザに依存しているcssを一旦リセットしてから
// 文字組を中心に全体のスタイリングをする。

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}