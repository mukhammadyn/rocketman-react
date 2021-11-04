import { useContext } from 'react'
import { RocketContext } from '../../contexts/rocket-context'
import './header-dropdown.scss'

function HeaderDropdown () {

  const {nameClass, setNameClass} = useContext(RocketContext)

  function handleDropdownButton () {
    if (nameClass) {
      setNameClass(false)
    } else {
      setNameClass(true)
    }
  }
  
  return (
    <>
      <div className= {nameClass ? "header-dropdown header-dropdown--open" : "header-dropdown"}>
        <div className="header-dropdown__btn-wrapper">
          <span className="header-dropdown__btn-txt">John Doe</span>
          <button onClick={handleDropdownButton} className="header-dropdown__btn"></button>
        </div>
        <div className="header-dropdown__content">
          <a className="header-dropdown__logout" href="#">Log out</a>
        </div>
      </div>
    </>
  )
}

export default HeaderDropdown
