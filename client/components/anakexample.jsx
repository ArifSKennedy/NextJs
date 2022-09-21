import React from 'react'
import PropTypes from 'prop-types'

function Anakexample({nama}) {
    return (
      // Untuk Membuat Class Grand Children
      <>
      <div>{nama}</div>
      
      </>
      )
  }
  
  Anakexample.propTypes = {
      nama: PropTypes.string
  }
  
  
  
  export default Anakexample