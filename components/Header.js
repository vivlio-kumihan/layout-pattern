import Link from "next/link"
import "./Header.scss"

const Header = (props) => {
  return (
    <Link href="/">
    <div className="Header">
      {props.appTitle}
    </div>

    </Link>
  )
}

export default Header