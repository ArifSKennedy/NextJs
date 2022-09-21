import React from 'react'
import PropTypes from 'prop-types'

function Test({umur}) {
  return (
    <>
    <div>test</div>
    <div>umur</div>
    </>
  )
}

Test.propTypes = {
    umur: PropTypes.number
}

export default Test
