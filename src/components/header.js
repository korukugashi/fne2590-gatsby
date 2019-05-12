import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as Logo}  from "../images/logo.svg"

// @todo toggle mobile menu

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo title={siteTitle} />
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="mainNavbar" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">Accueil</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/fne-25-90/">
                L'association FNE 25-90
              </Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/fne-25-90/">
                  Qui sommes-nous ?
                </Link>
                <Link className="navbar-item" to="/fne-25-90/fne/">
                  Le mouvement FNE
                </Link>
                <Link className="navbar-item" to="/fne-25-90/actions/">
                  Nos actions
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/fne-25-90/membres/">
                  Associations membres
                </Link>
                <Link className="navbar-item" to="/fne-25-90/partenaires/">
                  Partenaires
                </Link>
              </div>
            </div>

            <Link className="navbar-item" to="/publications/">Publications</Link>
            <Link className="navbar-item" to="/nous-rejoindre/">Nous rejoindre</Link>
            <Link className="navbar-item" to="/contact/">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
