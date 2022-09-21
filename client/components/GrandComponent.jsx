import React from 'react'
import PropTypes from 'prop-types'
import { listItemButtonClasses } from '@mui/material'


function GrandComponent({items}) {
  return (
    <>
    <div>test</div>
    // Untuk Melooping Data 
    // kita harus punya nilai awal (items)
    // Kondisi
    // Aksi
    {
        items.length > 0 && (
            items.map((item,index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <span>{item.age}</span>
                </div>
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

GrandComponent.propTypes = {
    items: PropTypes.array
}

export default GrandComponent