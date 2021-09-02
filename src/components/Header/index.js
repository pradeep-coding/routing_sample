import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="head-container">
    <div className="logo-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <div>
      <Link className="route-link" to="/">
        Home
      </Link>

      <Link className="route-link" to="/about">
        About
      </Link>

      <Link className="route-link" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
