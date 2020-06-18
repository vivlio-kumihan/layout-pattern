import Link from "next/link"
import "./Header.scss"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// fontawesomeのコアファイル
import { library } from '@fortawesome/fontawesome-svg-core'
//fontawesomeのbrandアイコンのインポート
import { fab } from '@fortawesome/free-brands-svg-icons'
//fontawesomeのsolidアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'
//fontawesomeのregularアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'
//他のコンポーネントから簡単に呼び出せるようにするための登録処理？
library.add(fab, fas, far);

const Header = (props) => {
  return (
    <Link href="/">
      <div className="Header">
        <a href="/" className="logo">{props.appTitle}</a>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={['fab', "fa-github-square"]} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "fa-node-js"]} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "fa-react"]} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "fa-twitter-square"]} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "fa-apple"]} />
            </a>
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default Header


  // < li > <a href="#"><FontAwesomeIcon icon={['fas', 'minus-circle']} /></a></ >
  //   <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
  //   <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
  //   <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
  //   <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>

// $ npm i--save @fortawesome/react-fontawesome @fortawesome/fontawesome - svg - core @fortawesome/free-brands-svg-icons @fortawesome/free - solid - svg - icons @fortawesome/free-regular-svg-icons


//   < i class="fab fa-github-square" ></ >
//     <i class="fab fa-js-square"></i>
//     <i class="fab fa-node-js"></i>
//     <i class="fab fa-react"></i>
//     <i class="fab fa-twitter-square"></i>
//     <i class="fab fa-adobe"></i>
//     <i class="fab fa-apple"></i>