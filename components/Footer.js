import Link from "next/link"
import "./Footer.scss"

const Footer = (props) => {
  return (
    <Link href="/">
      <div className="content">
        <div>{props.appTitle}</div>
        <div>{props.siteTitle}</div>
      </div>

    </Link>
  )
}

export default Footer