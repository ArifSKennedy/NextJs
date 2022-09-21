import React from 'react'
import PropTypes from 'prop-types'
import Test from './test'
import Coba1 from './coba1'
import GrandComponent from './grandcomponent'




function Coba({nama}) {
  return (
    // Untuk Membuat Class Grand Children
    <>
    <div>{nama}</div>
    <Test umur={15} nama={'arif'} nilai={true} />
    <Coba1  items={[3,4,5]}/>   
    <GrandComponent 
        items={
            [
                {
                    name: 'arif',
                    age: 17,
                },
                {
                    name: 'ari',
                    age: 17,
                },
                {
                    name: 'hadad',
                    age: 17,
                }
            ]
        }
    />
    </>
    )
}

Coba.propTypes = {
    nama: PropTypes.string
}



export default Coba
