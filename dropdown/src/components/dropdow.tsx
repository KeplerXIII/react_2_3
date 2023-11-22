export function DropDown () {
    
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <div className="dropdown-wrapper">
                <div className="btn">
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