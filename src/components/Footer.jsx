import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <p>&copy; All Rights Reserved {(new Date().getFullYear())} - {(new Date().getFullYear()+1)}</p>
        </footer>
    </div>
  )
}

export default Footer