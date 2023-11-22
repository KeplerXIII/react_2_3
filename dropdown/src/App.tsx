import { useState } from 'react'
import './App.css'

const DropdownList = ['Profile', 'Settings', 'Log Out']

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [chosenItem, setItem] = useState(-1)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  function setChosen (index: number) {
    console.log(index)
    setItem(index)
  }

  return (
    <div className="container">
            <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
                <div className="btn" onClick={toggleDropdown}>
                    Dropdown <i className="material-icons">arrow_drop_down</i>
                </div>
                <ul className="dropdown">
                    {DropdownList.map((obj, index) => <li 
                      key={index} 
                      onClick={() => setChosen(index)}
                      style={{
                        backgroundColor: chosenItem === index ? '#5380F7' : 'transparent',
                      }}
                      >
                        <a>
                        {obj}
                        </a></li>)}
                </ul>
            </div>
        </div>
  )
}

export default App
