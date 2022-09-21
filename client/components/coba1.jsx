import React from 'react'
import PropTypes from 'prop-types'
import { listItemButtonClasses } from '@mui/material'


function Coba1({items}) {
  return (
    <>
    <div>test</div>
    {
        items.length > 0 && (
            items.map((item,index) => (
                <div key={index}>{item}</div>
            ))
        )
    }
    {
        items.length === 0 && (
            <div>data tidak ditemukan</div>
        )
    }
    </>
  )
}

Coba1.propTypes = {
    items: PropTypes.array
}

export default Coba1

