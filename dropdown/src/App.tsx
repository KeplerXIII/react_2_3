import { useState } from 'react'
import './App.css'

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
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
  )
}

export default App
