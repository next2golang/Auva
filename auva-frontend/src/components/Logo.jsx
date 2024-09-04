import logo from '../assets/img/logo.svg'
import {Link} from 'react-scroll'

export default function Logo() {
  return (
    <Link className="logo" to="banner" spy={true} smooth={true} duration={600} offset={0}>
        <img height={42} width={165} src={logo} alt="site-logo" />
    </Link>
  )
}
