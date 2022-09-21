import React from 'react'
import PropTypes from 'prop-types'

function Anak({nama}) {
  return (
    // Untuk Membuat Class Grand Children
    <>
    <div>{nama}</div>
    
    </>
    )
}

Anak.propTypes = {
    nama: PropTypes.string
}



export default Anak