import React, { Component, Fragment } from 'react'
import MetaHead from '@/components/core/MetaHead'
import LandingContainer from '@/containers/landing/LandingContainer'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'


export default class Test extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Landing',
        description: 'LAPANGAN.ID Landing'
      }
    }
  }

  render () {
    return (
 <Fragment>
    <div className='test'>FlexBox</div>
      <div className='test_container'>
        <div className='test_flex'>
            <div className='test_flex_item green' class='card' font="bold">Belajar flexbox</div>
            <div className='test_flex_item blue'>Ini Warna  Lorem ipsun</div>
            <div className='test_flex_item red'>Ini Warna  Lorem ipsun</div>    
      </div>
    </div>
      <div className='test_block'>
        <div></div>
        <div></div>    
    </div>
    <center>   
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana" src='https://source.unplash.com/random'
        />
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
       </CardActionArea>
    </Card>
    </center> 
     
        
 </Fragment>
    
    )
  }
  
}

