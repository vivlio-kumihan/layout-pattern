import Link from "next/link"
import "./Header.scss"

const Header = (props) => {
  return (
    <Link href="/">
    <div className="Header">
      <div>{props.appTitle}</div>
      <div>{props.siteTitle}</div>
    </div>

    </Link>
  )
}

export default Header