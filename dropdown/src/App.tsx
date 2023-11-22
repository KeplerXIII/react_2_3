import { useState } from 'react'
import './App.css'

const DropdownList = ['Profile', 'Settings', 'Log Out']

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
            <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
                <div className="btn" onClick={toggleDropdown}>
                    Dropdown <i className="material-icons">arrow_drop_down</i>
                </div>
                <ul className="dropdown">
                    {DropdownList.map((obj, index) => <li key={index}><a>{obj}</a></li>)}
                </ul>
            </div>
        </div>
  )
}

export default App
