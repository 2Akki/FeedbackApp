import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Header({title="Feedback UI",backgroundColor="rgba(0,0,0,0.4)",textColor="#ff6a95",}) {

    
  return (
    <header style={{backgroundColor:backgroundColor,color:textColor}}>
        <div className="container">
            <h2 ><Link to="/">{title}</Link></h2> 
        </div>
    </header>
  )
}
// Header.propTypes = {title: PropTypes.string}