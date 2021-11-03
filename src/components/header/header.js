import HeaderDropdown from "../header-dropdown/header-dropdown"
import RocketContextProvider from "../../contexts/rocket-context"


function Header () {


  return (
    <>

      <RocketContextProvider>
        <HeaderDropdown />
      </RocketContextProvider>

    </>
  )
}

export default Header
