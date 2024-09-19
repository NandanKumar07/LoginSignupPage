import React from 'react'

const Header = () => {
    const item1 = "Amit";
    const item2 = "Rajesh";
  return (
    <div>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li>Satish</li>
                <li>{item1}</li>
                <li>{item2.toUpperCase()}</li>
            </ul>
        </nav>
       
        <hr/>
    </div>
  )
}

export default Header