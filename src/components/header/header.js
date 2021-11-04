import HeaderDropdown from "../header-dropdown/header-dropdown"
import RocketContextProvider from "../../contexts/rocket-context"
import SiteLogo from '../../assets/img/rocketman-logo.svg'
import './header.scss'
import Input from "../Input/input"


function Header () {


  return (
    <>

      <RocketContextProvider>
        <header className="site-header">
          <div className="site-header__content content-wrapper">
            <a className="site-header__logo-link" href="#">
              <img className="site-header__logo" src={SiteLogo} alt="rocketman" width="161" height="32" />
            </a>

            <div className="site-header__action">
              {/* <div className="site-header__input"></div> */}
              <Input />

              <div className="site-header__dropdown">
                <HeaderDropdown />
              </div>
              
            </div>
          </div>
        </header>
      </RocketContextProvider>

    </>
  )
}

export default Header
