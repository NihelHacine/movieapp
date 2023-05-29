import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Firstcomp() {
  return (
    <div>
    <div style={{backgroundColor:'black'}} className='backvid'>
        <video className='vid' autoPlay loop muted> 
      <source src="vid1.mp4" type='video/mp4'/>
    </video>
    </div>
    <div className='ecriture'>
    <h1>New Film <br/>to discover</h1>
    <div>
    <Button variant="secondary">Play now</Button>
    <Button variant="light"><Link to='/movies' style={{textDecoration:'none', color:'black'}}>Movies available</Link></Button>
    </div>
    </div>
    </div>
  )
}

export default Firstcomp